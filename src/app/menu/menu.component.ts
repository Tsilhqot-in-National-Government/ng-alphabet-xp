import { Component, OnInit } from '@angular/core';
import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title: String = "Main Menu";

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  onTapMenuItem(args: GestureEventData){

    console.log(`You tapped item number ${args.object.get('id')}`);
    this.routerExtensions.navigate(["tile",args.object.get('id')]);

  }

}
