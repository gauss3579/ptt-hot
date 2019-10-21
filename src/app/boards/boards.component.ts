import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {


  boards: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.firebaseService.getBoards(
      this.activatedRoute.snapshot.paramMap.get('date')
    )
    .subscribe(result => {
      console.log(result);
      this.boards = result;
    });
  }

  toTitles(board) {
    this.router.navigate(['/boards/' + this.activatedRoute.snapshot.paramMap.get('date') + '/' + board]);
  }

}
