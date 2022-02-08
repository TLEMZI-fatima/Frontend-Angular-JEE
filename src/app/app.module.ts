import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ContractComponent } from './contract/contract.component';

import { AddContractComponent } from './myContract/add-contract/add-contract.component';
import { ListContractComponent } from './myContract/list-contract/list-contract.component';
import { LoginService } from './service/login.service';
import { TokenService } from './service/token.service';
import { ClientService } from './service/client.service';
import { MycontractService } from './service/mycontract.service';
import { TransferService } from './service/transfer.service';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    LoginComponent,
    RegisterComponent,
    AddContractComponent,
    NavbarComponent,
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSnackBarModule,  
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    TokenService,
    ClientService,
    MycontractService,
    TransferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }