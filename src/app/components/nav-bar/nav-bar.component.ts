import { HttpClientService } from 'src/app/services/http-client.service';
import { CommuService } from 'src/app/services/commu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  posts: any;
  showMenu: boolean = false;

  constructor(private commuService: CommuService, private HttpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.HttpClientService.getAllBills().subscribe(
      (res) => { this.posts = res; },
      (error) => { console.log(error); });

    //this.HttpClientService.getAllBills();
  }
  getLightStatus(): string {
    return this.commuService.getLightStatus();
  }
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
