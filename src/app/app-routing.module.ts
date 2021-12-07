import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { TeaComponent } from './components/tea/tea.component';
import { TatsComponent } from './components/tats/tats.component';
import { GuestsComponent } from './components/guests/guests.component';
import { PiercingsComponent } from './components/piercings/piercings.component';
import { BeerComponent } from './components/beer/beer.component';
import { DiscComponent } from './components/disc/disc.component';
import { EventComponent } from './components/event/event.component';
import { CommitmentsComponent } from './components/commitments/commitments.component';
import { ContactComponent } from './components/contact/contact.component';
import { NoResultComponent } from './components/no-result/no-result.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'}, {path: 'home', component: HomeComponent},
  {path: 'équipe', component: TeamComponent},
  {path: 'salon-de-thé', component: TeaComponent},
  {path: 'tats', component: TatsComponent},
  {path: 'guests', component: GuestsComponent},
  {path: 'piercings', component: PiercingsComponent},
  {path: 'beer', component: BeerComponent},
  {path: 'disc', component: DiscComponent},
  {path: 'event', component: EventComponent},
  {path: 'commitments', component: CommitmentsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NoResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
