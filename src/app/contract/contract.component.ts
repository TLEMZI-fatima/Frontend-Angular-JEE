import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { TransferService } from '../service/transfer.service';

// interface dataArrayList{
//   type_immoblier:string;
//   buyer:string;
//   seller:string;
//   price:string;
//   date:Date;
// }
// const dataArray:dataArrayList[]=[]
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  product: any = {
    tasktype_immoblier: null,
    taskbuyer: null,
    taskseller: null,
    tasprice:null
  };
  constructor(private transferService:TransferService) { }
  containtDataArray: Promise<void> | undefined;
  ngOnInit(): void {
    this.transferService.render();
  }
 
  connectWallet(){
    this.transferService.LoginWithMetaMask() //lgin metamask
  }
  loadContract(){
    
    this.transferService.loadContract()

    console.log("__________GETTING BALANCE___________")
    this.transferService.getCurrentAccountBalance().then(console.log)

  }
  

  createTask(){

    this.transferService.createTask(this.product.tasktype_immoblier,this.product.taskbuyer,this.product.taskseller,this.product.tasprice)


  }
  
  getAllTasks(){
  this.transferService.getAllTasks()
  }

  onSubmit(){
    this.createTask();
    console.log(this.product)
  }
}
