import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  data;
  account_verified: boolean = true;
   constructor(private dashboard: DashboardService, private spinner: NgxSpinnerService) { }
 
   ngOnInit() {
    this.spinner.show();
     this.dashboard.ReloadNeeded.subscribe(
       () => {
            this.getAccount();
         
       }
     );
     this.getAccount();
   }
 
 
 
    private getAccount() {
     
     this.dashboard.getAccount().subscribe(
       (data: any[]) => {
      this.data = data;
      if(this.data) {
     this.account_verified = data['0'].owner.is_account_verified;
      }
         }
 
       )
        this.spinner.hide();}
}
