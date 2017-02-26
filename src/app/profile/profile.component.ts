import { Component, OnInit } from '@angular/core';
import { GithubService } from '../shared/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    img {
      width: 100%;
    }
  `]
})
export class ProfileComponent {
  user: any[];
  repos: any[];

  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe(user => {
      this.user = user;    
    });

    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
}
