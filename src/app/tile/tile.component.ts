import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  public currentTileNumber: String;
  public imageSource: String;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      this.currentTileNumber = params["number"];

    })
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.imageSource = this.createImageSourceString(this.currentTileNumber);
  }

  private createImageSourceString (n: String): String{
    // corrects for fact that image 1 is p01.png not p1.png, and so on for single digit tile numbers
    if(Number(n)<10){
      return `~/app/images/p0${n}.png`;
    }else{
      return `~/app/images/p${n}.png`;
    }
  }


}
