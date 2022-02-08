import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { ContractComponent } from './contract/contract.component';

import { LoginComponent } from './login/login.component';
import { ListContractComponent } from './myContract/list-contract/list-contract.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

  {path:'contract',component:ContractComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'contract' , component: ContractComponent},
  {path: 'client' , component: AddClientComponent},
  {path: 'contracts' , component: ListContractComponent},
  {path: 'clients' , component: ListClientComponent},

  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
