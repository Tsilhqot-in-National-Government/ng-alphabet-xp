import { Component, OnInit } from '@angular/core';
import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { Router, NavigationExtras } from '@angular/router';
// import { Navigation } from 'selenium-webdriver';
// import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public title: String = "Main Menu";

  constructor(private router: Router ) {
   }

  ngOnInit() {
  }

  onTapMenuItem(args: GestureEventData){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        "currentTile" : args.object.get('id')
      }
    }
    console.log(`You tapped item number ${args.object.get('id')}`);
    this.router.navigate(["tile"], navigationExtras);
  }

}
