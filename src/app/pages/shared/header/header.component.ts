import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userAuthenticated = false;
  userVerify = false;
  authenticatedSub: Subscription;
  name = localStorage.getItem('userDetails');
  constructor(private authservice: AuthService,) { }

  ngOnInit(): void {
    this.userAuthenticated = this.authservice.getAuthenticated();
    this.userVerify = this.authservice.getIsVerify();
    this.authenticatedSub = this.authservice.getAuthenticatedListener()
        .subscribe((isAuthenticated: boolean) => {
          this.userAuthenticated = isAuthenticated;
        });

  }

}
