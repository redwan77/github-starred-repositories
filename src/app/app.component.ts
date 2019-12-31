import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'github-starred-repository';
  constructor(private router : Router){

  }
  ngOnInit(): void {
    this.router.navigate(['/repositories']) ;
  }

}
