import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(private http: HttpClient) { }

  getDates()
    : Observable<{}> {
    return this.http.get(environment.url + '/dates',
      {}
    );
  }

  getBoards(date)
    : Observable<{}> {
    return this.http.get(environment.url + '/' + date,
      {}
    );
  }

  getTitles(date, board)
    : Observable<{}> {
    return this.http.get(environment.url + '/' + date + '/' + board,
      {}
    );
  }

  getContent(date, board, id)
    : Observable<{}> {
    return this.http.get(environment.url + '/' + date + '/' + board + '/' + id,
      {}
    );
  }
}
