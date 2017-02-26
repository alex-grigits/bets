import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { HttpPipe } from '../shared/http.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  competitions: any[];
  fixtures: any[];
  tableStands: any[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getCompetition()
      .subscribe(competition => this.competitions = competition);

    this.httpService.getFixtures()
      .subscribe(fixtures => this.fixtures = fixtures);

    this.httpService.getTable()
      .subscribe(tableStands => this.tableStands = tableStands);
  }

}
