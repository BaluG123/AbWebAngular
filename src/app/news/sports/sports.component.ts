import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news-service.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styles: [
  ]
})
export class SportsComponent implements OnInit {
  sportsdata:any;
  constructor(private newsdata:NewsServiceService) {
    this.newsdata.getSportsData().subscribe((data)=>{
      this.sportsdata=data
    })
   }

  ngOnInit(): void {
  }

}
