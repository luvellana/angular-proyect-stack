import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  constructor(private authService: AuthService) {  }

  ngOnInit() {
  }

  public onLogout(): void {
    this.authService.logout();
  }

}