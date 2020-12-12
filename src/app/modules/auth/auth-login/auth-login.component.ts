import { AfterViewInit, Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('.toggle-password').click(function() {

      $(this).toggleClass('fa-eye fa-eye-slash');
      const input = $($(this).attr('toggle'));
      if (input.attr('type') === 'password') {
        input.attr('type', 'text');
      } else {
        input.attr('type', 'password');
      }
    });

  }

}
