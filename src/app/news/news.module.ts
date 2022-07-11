import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnologyComponent } from './technology/technology.component';
import { EditorchoiceComponent } from './editorchoice/editorchoice.component';


@NgModule({
  declarations: [
    SportsComponent,
    EntertainmentComponent,
    TechnologyComponent,
    EditorchoiceComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
