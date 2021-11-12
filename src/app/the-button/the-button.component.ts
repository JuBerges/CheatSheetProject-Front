import { CommuService } from './../services/commu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-button',
  templateUrl: './the-button.component.html',
  styleUrls: ['./the-button.component.css']
})
export class TheButtonComponent implements OnInit {
  isAuth: boolean = false;
  constructor(private commuService: CommuService) { }

  ngOnInit(): void {
  }
  changeLabel() : void {
    this.commuService.changeLabel();
    this.commuService.changeLightStatus();
  }


  getButtonLabel() : string {
    return this.commuService.getButtonLabel();
  }
}
