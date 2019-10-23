import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MongodbService } from '../services/mongodb.service';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  titles: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mongodbService: MongodbService
  ) { }

  ngOnInit() {

    this.mongodbService.getTitles(
      this.activatedRoute.snapshot.paramMap.get('date'),
      this.activatedRoute.snapshot.paramMap.get('board')
      )
      .subscribe(result => {
        console.log(result);
        this.titles = result.data;
      });
  }

  toContent(id) {
    console.log(id);
    this.router.navigate([
      '/boards/' +
      this.activatedRoute.snapshot.paramMap.get('date') +
      '/' +
      this.activatedRoute.snapshot.paramMap.get('board') +
      '/' +
      id
      ]);
  }

}
