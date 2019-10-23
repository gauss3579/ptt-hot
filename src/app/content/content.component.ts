import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params  } from '@angular/router';
import { MongodbService } from '../services/mongodb.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mongodbService: MongodbService
  ) { }

  ngOnInit() {

    this.mongodbService.getContent(
      this.activatedRoute.snapshot.paramMap.get('date'),
      this.activatedRoute.snapshot.paramMap.get('board'),
      this.activatedRoute.snapshot.paramMap.get('id')
      )
    .subscribe(result => {
      console.log(result);
    });
  }

}
