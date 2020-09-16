import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  items = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://simplerssreader.herokuapp.com/test").subscribe(data =>{

      this.items = Object.values(data).map(value => value.item);
    })
  }

}
