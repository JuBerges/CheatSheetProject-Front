import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommuService {
  lightStatus: string = 'Eteint';
  buttonLabel: string = 'Fermé';

  constructor() { }

  getButtonLabel(): string {
    return this.buttonLabel;
  }
  changeLabel(): string {
    this.buttonLabel === 'Fermé'? this.buttonLabel = 'Ouvert':this.buttonLabel = 'Fermé';
    return this.buttonLabel;
  }

  getLightStatus() : string {
    return this.lightStatus;
  }

  changeLightStatus() : string {
    this.lightStatus === 'Allumé'? this.lightStatus = 'Eteint' : this.lightStatus = 'Allumé';
    return this.lightStatus;
  }

}
