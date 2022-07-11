import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  edurl="http://127.0.0.1:8000/news/editorapi/"
  surl="http://127.0.0.1:8000/news/sportsapi/"
  turl="http://127.0.0.1:8000/news/techapi/"
  eurl="http://127.0.0.1:8000/news/entertainapi/"
  constructor(private http:HttpClient) {  
   }
  getSportsData(){
    return this.http.get(this.surl)
  } 
}
