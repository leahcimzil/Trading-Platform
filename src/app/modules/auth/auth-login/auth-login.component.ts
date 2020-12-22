import { AfterViewInit, Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILoginDTO} from '../../../models/auth-model';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;




  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });


  }


  submitLogin(): void {
    const {email, password} = this.loginForm.value;

    const data: ILoginDTO = {
      email,
      password
    };
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('.toggle-password').click(function(): void {

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
