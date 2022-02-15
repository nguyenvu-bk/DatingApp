import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private httpClient: HttpClient,) { }

  ngOnInit(): void {
    this.getUser();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  public getUser() {
    this.httpClient.get("https://localhost:5001/api/users").subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
