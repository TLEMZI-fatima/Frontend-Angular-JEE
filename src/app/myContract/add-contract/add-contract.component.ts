import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from 'src/app/models/myContract';
import { MycontractService } from 'src/app/service/mycontract.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  

 
  constructor(private mycontractService: MycontractService, private router: Router, private _activatedRoute: ActivatedRoute) {}
  contract: Contract = new Contract();
  submitted = false;
  ngOnInit(){

  }

  
onSubmit() {
  this.submitted = true;
  this.mycontractService.createContract(this.contract)
  .subscribe(data => console.log(data), error => console.log(error));
  this.contract = new Contract();
  this.router.navigate(['/contracts']);
}

movetolistcontract() {
  this.router.navigate(['../contracts'], { relativeTo: this._activatedRoute });
}
movetohome() {
  this.router.navigate(['/home'], { relativeTo: this._activatedRoute });
}
}

