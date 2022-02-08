import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientDAO } from 'src/app/models/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  
 
  clients: Observable<ClientDAO[]>;
  constructor(private route: ActivatedRoute, private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.clients = this.clientService.getClientList();
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

 

  updateClient(id: number){
    this.router.navigate(['update', id]);
  }


}
