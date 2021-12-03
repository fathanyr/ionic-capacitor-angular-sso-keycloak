import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'ionic-appauth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-session',
  template: '<p>Logging Out.....</p>',
})
export class EndSessionPage implements OnInit {

  constructor(
    private auth: AuthService,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.endSessionCallback();
    this.navCtrl.navigateRoot('login');
  }

}
