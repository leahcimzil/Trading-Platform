import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryISO, PhoneNumberFormat, SearchCountryField, TooltipLabel } from 'ngx-intl-tel-input';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  form: FormGroup;
  data: any;
  id: any;
 separateDialCode = false;
 SearchCountryField = SearchCountryField;
 TooltipLabel = TooltipLabel;
 CountryISO = CountryISO;
 PhoneNumberFormat = PhoneNumberFormat;
 preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  constructor(private fb: FormBuilder, private dashboard: DashboardService,
              private router: Router) { 
    this.form = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      phone_number: [''],
      date_of_birth: [''],
      citizenship: [''],
      zip_code: [''],
      address: [''],
      city: [''],
      country: ['']

    })
  }

  ngOnInit() {

    this.dashboard.ReloadNeeded.subscribe(
      () => {
           this.getAccount();
        
      }
    );
    this.getAccount();
  }

  changePreferredCountries(): void {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
   }

   private getAccount() {
    this.dashboard.getAccount().subscribe(
      (data: any[]) => {
     this.data = data;
     this.id = data['0'].id;
     if(this.data) {
       this.form.patchValue({
         first_name: this.data['0'].owner.first_name,
         last_name: this.data['0'].owner.last_name,
         phone_number: this.data['0'].owner.phone_number,
         email: this.data['0'].owner.email,
         date_of_birth: this.data['0'].date_of_birth ?  this.data['0'].date_of_birth : '',
         citizenship: this.data['0'].citizenship ?  this.data['0'].citizenship : '',
         city: this.data['0'].city ?  this.data['0'].city : '',
         country: this.data['0'].owner.country,
         address: this.data['0'].address ?  this.data['0'].address : '',
         zip_code: this.data['0'].zip_code ?  this.data['0'].zip_code : '',
       })
     }
        }

      
 
    )}

    submitForm() {
      const { phone_number, date_of_birth,
        citizenship, city, country, address, zip_code} = this.form.value;

        const data: any = {
          phone_number, date_of_birth,
        citizenship, city, country, address, zip_code
        }
        this.dashboard.updateAccount(this.id, data).subscribe(
          res => {
             this.router.navigate(['/dashboard/account/uploads']);
          }
        );

        
    }


}
