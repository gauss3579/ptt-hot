import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { MongodbService } from '../services/mongodb.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dates: [];

  constructor(
    private router: Router,
    private mongodbService: MongodbService
  ) { }

  ngOnInit() {
    this.getDates();
  }

  getDates() {

    this.mongodbService.getDates()
      .subscribe(result => {
        console.log(result);
        this.dates = result.data;
      });

  }

  toBoards(date) {
    console.log(date);
    this.router.navigate(['/boards/' + date]);
  }

}
