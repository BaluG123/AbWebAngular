import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorchoiceComponent } from './editorchoice/editorchoice.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path: 'sports',
    component: SportsComponent,
  },
  {
    path:'entertainment',
    component:EntertainmentComponent
  },
  {
    path:'technology',
    component:TechnologyComponent
  },
  {
    path:'editorchoice',
    component:EditorchoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
