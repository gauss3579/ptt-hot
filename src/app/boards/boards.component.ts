import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MongodbService } from '../services/mongodb.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {


  boards: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mongodbService: MongodbService
  ) { }

  ngOnInit() {

    this.mongodbService.getBoards(this.activatedRoute.snapshot.paramMap.get('date'))
      .subscribe(result => {
        console.log(result);
        this.boards = result.data;
      });
  }

  toTitles(board) {
    this.router.navigate(['/boards/' + this.activatedRoute.snapshot.paramMap.get('date') + '/' + board]);
  }

}
