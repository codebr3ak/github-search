import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any = [];

  constructor(private http: HttpClient, private _githubService: GithubService) { }

  ngOnInit() {
    this.http.get("https://api.github.com/users/codebr3ak/repos?access_token=" + "535266855deafa4bf251c7086ad7d94a891ec0f2").subscribe(data => {
      this.user = data;
      console.log(data);
      console.log("stiletos on mastard")
    })
    this._githubService.getUserRepo().subscribe(repos => {
      this.repos = repos;
      console.log(repos)
      console.log("repos on a roll")
    })
  }

}
