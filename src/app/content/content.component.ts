import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(
    public firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.firebaseService.getContent(
      this.activatedRoute.snapshot.paramMap.get('date'),
      this.activatedRoute.snapshot.paramMap.get('board'),
      this.activatedRoute.snapshot.paramMap.get('no')
    )
    .subscribe(result => {
      console.log(result);
    });
  }

}
