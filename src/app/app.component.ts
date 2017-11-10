import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";

declare const FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logged: boolean = false;
  pages: string[] = [];
  user: string = "desconhecido";

  constructor(private service: AppService) { }  
  
  ngOnInit() {
    FB.getLoginStatus((response) => {
      if (response.authResponse) {
        this.logged = true;
        this.getInfo(response.authResponse.userID);
      }
      else {
        this.logged = false;
      }
      this.verifyState();
    });
  }

  getInfo(userID) {
    if (!this.logged) return;
    this.service.getInfo(userID);
    this.user = this.service.user;
    this.pages = this.service.pages;
  }

  verifyState() {
    FB.Event.subscribe('auth.statusChange', (response => {
      if (response.status === 'connected') {
        this.logged = true;
        this.getInfo(response.authResponse.userID);
      } else {
        this.logged = false;
        console.log('usuario não se logou');
      }
    }));
  }
}
