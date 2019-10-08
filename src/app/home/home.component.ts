import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Tŝilhqot’in Alphabet';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onTapMenuButton(){
    console.log(`Menu button tapped.`);
    this.router.navigateByUrl('/menu');
  }

  onTapCreditsButton(){
    console.log(`Credits button tapped`);
    this.router.navigateByUrl('/credits');
  }
}
