import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  competitions: any[];

  constructor(private httpService: HttpService) {
   }

  ngOnInit() {
    this.httpService.getCompetition()
      .subscribe(competition => this.competitions = competition);
  }

}
