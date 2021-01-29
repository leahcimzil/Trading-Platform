import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  address = '';
  amount = '';
  id= '';
  data = ''
  show = 'true'
  constructor(private dashboard: DashboardService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    //  this.dashboard.ReloadNeeded.subscribe(
    //    () => {
    //         this.getQr();
         
    //    }
    //  );
    //  this.getQr();

   
  }


  private getQr() {
     
    this.dashboard.getQrCode().subscribe(
      (data: any[]) => {
    //  this.data = data;
    
        }

      )
       this.spinner.hide();}


  pay10() {
    this.spinner.show();
    const data: any = {
      amount: 10
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

  pay20() {
    this.spinner.show();
    const data: any = {
      amount: 20
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

  pay30() {
    this.spinner.show();
    const data: any = {
      amount: 30
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

  pay40() {
    this.spinner.show();
    const data: any = {
      amount: 40
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
