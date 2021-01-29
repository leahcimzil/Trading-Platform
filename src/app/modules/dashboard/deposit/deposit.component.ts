import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  address = '';
  amount = '';
  id= '';
  data = ''
  show = 'true'

  amountLabel = '';

  payForm: FormGroup;
  constructor(private dashboard: DashboardService,
    private fb: FormBuilder,
     private spinner: NgxSpinnerService) { 
       this.payForm =  this.fb.group({
         amount: ['']
       })

  }

  ngOnInit() {
  }

  input() {
    this.amountLabel = '$'+this.payForm.get('amount').value
  }

  pay() {
    this.spinner.show();
    const data: any = {
      amount: this.payForm.get('amount').value
    };
    this.dashboard.postPayment(data).subscribe(
      res => {
        this.address = res.wallet_address;
        this.id = res.id;
        this.amount = res.value_of_crypto;
        this.data = 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&color=1&prefix=on&fiat=USD&amount='+ `${this.amount}`+ '&address='+`${this.address}`;
        this.spinner.hide();
      }
    )
    this.show = 'false'
  }


}
