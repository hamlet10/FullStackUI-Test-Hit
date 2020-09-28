import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ShortenerServicesService } from '../shortener-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private _shortenerService: ShortenerServicesService,
    private fb: FormBuilder,
    private router: Router,
    private confirmService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit(event: FormGroup) {
    this._shortenerService.login(event.value).subscribe(
      (res) => {
        if (res.userId != null) {
          localStorage.setItem('UserId', res.userId);
          localStorage.setItem('UserName', res.email);
          this.router.navigate(['/urls']);
        }
      },
      (error) => {
        this.confirmService.confirm({
          message: 'Usuario/Contrasena invalidos',
          rejectVisible: false,
          acceptLabel: 'Aceptar',
          header: 'Informacion',
        });
      }
    );
  }
}
