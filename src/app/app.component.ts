import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TradingPlatfrom-Frontend';
  userAuthenticated = false;
  userVerify = false;
  authenticatedSub: Subscription;

  constructor(private authservice: AuthService) {


  }


  inItContents = () => {

    // ============== User Authentication ========================
    this.authservice.automaticAuthenticationData();
    this.userAuthenticated = this.authservice.getAuthenticated();
    this.userVerify = this.authservice.getIsVerify();
    this.authenticatedSub = this.authservice.getAuthenticatedListener()
        .subscribe((isAuthenticated: boolean) => {
          this.userAuthenticated = isAuthenticated;
        });

    this.authenticatedSub = this.authservice.getVerifyListener()
      .subscribe((isVerify: boolean) => {
          this.userVerify = isVerify;
      });
    // ============== End User Authentication ==================
    // console.log(this.userVerify);
    // console.log(this.userAuthenticated);
  }


  ngOnInit() {
      // ==============***********=====================

      this.inItContents();
    // ==============***********=====================
  }
}
