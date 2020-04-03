import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : string;
  constructor(private httpclient : HttpClient){
    this.title = 'my-app';
  }
  totalCases : number;
  totalRecovered : number;
  totalActive : number;
  totalDeaths : number;
  timestamp : Date;
  ngOnInit(): void {
    this.httpclient.get('https://corona.lmao.ninja/all').subscribe(
      data =>{
          this.totalCases = data['cases'];
          this.totalRecovered = data['recovered'];
          this.totalDeaths = data['deaths'];
          this.totalActive = data['active'];
          this.timestamp = this.getTime(data['updated']);
      }
    );
  }
  public getTime(timestamp:number){
    var d = new Date(timestamp);
    return d;
  }


}


