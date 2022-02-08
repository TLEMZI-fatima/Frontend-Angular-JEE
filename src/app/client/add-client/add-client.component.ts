import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDAO } from 'src/app/models/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  private _activatedRoute: any;
  

  constructor(private clientService: ClientService, private router: Router) { }
  client: ClientDAO = new ClientDAO();
  submitted = false;

  ngOnInit() {
  }

  addClient() {
    // this.submitted = true;
    // this._myservice.createClient(this.client)
    // .subscribe(data => console.log(data), error => console.log(error));
    // this.client = new ClientDAO();
    // this.router.navigate(['/contracts']);
    console.log(this.client);
    this.clientService.addClient(this.client).subscribe();
    this.router.navigate(['/contracts']);
  }
  movetolistclient() {
    this.router.navigate(['../clients'], { relativeTo: this._activatedRoute });
  }
  movetohome() {
    this.router.navigate(['/home'], { relativeTo: this._activatedRoute });
  }
}
