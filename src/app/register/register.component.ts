import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ShortenerServicesService } from '../shortener-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private _shortenerService: ShortenerServicesService,
    private fb: FormBuilder,
    private router: Router,
    private confirmService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit(event: FormGroup) {
    this._shortenerService.register(event.value).subscribe(
      (res) => {
        if (res.userId != null) {
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
