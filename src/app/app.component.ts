import { Component, OnInit } from '@angular/core';
import { ShortenerServicesService } from './shortener-services.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  constructor(private shortenerService: ShortenerServicesService) {}
  ip: string;
  ngOnInit(): void {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', url: '/login' },
      { label: 'Urls', icon: 'pi pi-fw pi-calendar', url: '/urls' },
      { label: 'Registero', icon: 'pi pi-fw pi-pencil', url: '/register' },
    ];
  }
  title = 'shortenerUI';
}
