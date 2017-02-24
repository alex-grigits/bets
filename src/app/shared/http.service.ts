import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  private competitionUrl = 'http://api.football-data.org/v1/competitions/?season=2016';
  
  constructor(private http: Http) {}

  getCompetition() {
    return this.http.get(this.competitionUrl)
      .map((response: Response) => response.json());
  }

}
