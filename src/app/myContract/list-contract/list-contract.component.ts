import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contract } from 'src/app/models/myContract';
import { MycontractService } from 'src/app/service/mycontract.service';



@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  id: number;
  contract: Contract;
 
  contracts: Observable<Contract[]>;
  
  constructor(private route: ActivatedRoute, private mycontractService: MycontractService,
  private router: Router) { 
    
    
  }

  ngOnInit() {
    this.reloadData();
    this.contract = new Contract();

    this.mycontractService.getContractList()
      .subscribe(data => {
        console.log(data)
        this.contract = data;
      }, error => console.log(error));
  }
  reloadData() {
    this.contracts = this.mycontractService.getContractList();
  }
  
  deleteContract(id: number) {
    this.mycontractService.deleteContract(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

 

  updateContract(id: number){
    this.router.navigate(['update', id]);
  }


movetocontract() {
  this.router.navigate(['../contract'], { relativeTo: this.route });
}
movetohome() {
  this.router.navigate(['/home'], { relativeTo: this.route });
}
movetoclients() {
  this.router.navigate(['/clients'], { relativeTo: this.route });
}
movetodash() {
  this.router.navigate(['/dash'], { relativeTo: this.route });
}
}