import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShortenerServicesService } from '../shortener-services.service';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.scss'],
})
export class UrlsComponent implements OnInit {
  url: any;
  ip: string;
  showNew = false;
  urlForm: FormGroup;

  constructor(
    private _shortenerService: ShortenerServicesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getData();
    this._shortenerService.getIP().subscribe((res) => {
      (this.ip = res.ip), console.log(res.ip);
    });

    this.urlForm = this.fb.group({
      LongUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      Description: ['', [Validators.required]],
      AplicationUserId: [Number(localStorage.getItem('UserId'))],
    });
  }

  getData() {
    let userId = localStorage.getItem('UserId');
    if (userId == null) {
      userId = 0;
    }
    this._shortenerService.getAllUrls(userId).subscribe((data) => {
      this.url = data;
      console.log(data);
      console.log('userId: ' + userId);
    });
  }

  openSite(siteUrl) {
    let body = {
      MyUrlId: siteUrl.id,
      BrowserName: navigator.userAgent,
      IP: this.ip,
    };
    this._shortenerService.addVisitor(body).subscribe((res) => {
      window.open('//' + siteUrl.longUrl, '_blank');
    });
  }

  openNew() {
    this.showNew = true;
  }

  hideDialog() {
    this.showNew = false;
    this.urlForm.reset();
  }

  onSubmit(event: FormGroup) {
    this._shortenerService.createUrl(event.value).subscribe((res) => {
      this.getData();
      this.showNew = false;
      this.urlForm.reset();
    });
  }
}
