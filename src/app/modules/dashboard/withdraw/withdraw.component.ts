import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  data;
  account_verified: boolean = true;
   constructor(private dashboard: DashboardService) { }
 
   ngOnInit() {
 
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
     this.account_verified = data['0'].is_account_verified;
      }
         }
 
       
  
     )}
}
