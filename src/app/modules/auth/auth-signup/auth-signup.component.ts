import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SearchCountryField, TooltipLabel, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordStrengthValidator, passwordValidators} from '../../../utils/validators/passwordValidators';
import {SignupDTO} from '../../../models/auth-model';
declare var $: any;
@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit, AfterViewInit {
  signupForm: FormGroup;

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      phone_number: [undefined, [Validators.required, Validators.maxLength(15)]],
      password: ['', [Validators.required, PasswordStrengthValidator, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
      country: ['', [Validators.required]],
      check: [true, [Validators.required] ]
    }, {validator: passwordValidators});
  }


  submitSignup(): void {
  const { first_name,
          last_name,
          email,
          password,
          country} = this.signupForm.value;
  const phone = this.signupForm.get('phone_number').value

  const data: SignupDTO = {
    first_name,
    last_name,
    email,
    phone_number: phone.e164Number,
    password,
    country
  };

  console.log(data);
  }



  changePreferredCountries(): void {
 this.preferredCountries = [CountryISO.India, CountryISO.Canada];
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
