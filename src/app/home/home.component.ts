import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Tŝilhqot’in Alphabet';

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  onTapMenuButton(){
    console.log(`Menu button tapped.`);
    this.routerExtensions.navigate(["menu"]);
  }

  onTapCreditsButton(){
    console.log(`Credits button tapped`);
  }
}
