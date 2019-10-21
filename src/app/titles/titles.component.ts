import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';
@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  titles: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getTitles(
      this.activatedRoute.snapshot.paramMap.get('date'),
      this.activatedRoute.snapshot.paramMap.get('board')
    )
    .subscribe(result => {
      console.log(result);
      this.titles = result;
    });
  }

  toContent(no) {
    console.log(no);
    this.router.navigate([
      '/boards/' +
      this.activatedRoute.snapshot.paramMap.get('date') +
      '/' +
      this.activatedRoute.snapshot.paramMap.get('board') +
      '/' +
      no
      ]);
  }

}
