import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './login/login.component';
import { UrlsComponent } from './urls/urls.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmationService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UrlsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    CardModule,
    ToolbarModule,
    InputTextareaModule,
  ],
  providers: [
    {
      provide: 'API_URL',
      useValue: 'https://localhost:44307/api/',
    },
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
