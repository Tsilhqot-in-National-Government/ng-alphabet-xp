import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  private totalNumberTiles: number;
  public currentTileNumber: number;
  public imageSource: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      this.currentTileNumber = params["number"];
    })
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.updateImage();
  }

  private createImageSourceString (n: number): string{
    // corrects for fact that image 1 is p01.png not p1.png, and so on for single digit tile numbers
    if(n<10){
      return `~/app/images/p0${n}.png`;
    }else{
      return `~/app/images/p${n}.png`;
    }
  }

  onSwipeTile(args: SwipeGestureEventData){
    switch(args.direction){
      case 1:
        console.log(`You swiped to your right`);
        this.turnPage("RIGHT");
        break;
      case 2:
        console.log(`You swiped to your left`);
        this.turnPage("LEFT");
        break;
      default:
        console.log(`Unexpected swipe input`);
    }
  }

  private turnPage(direction: string){
    direction = direction.toUpperCase();
    console.log(`DIRECTION - ${direction}`);
    if(direction === "LEFT"){
    this.loadNextTile();
    }
    if(direction === "RIGHT"){
      this.loadPreviousTile();
    }
  }

  private loadNextTile(){
    console.log(`Loading next tile...`);
    this.currentTileNumber = this.cyclicIncrement(this.currentTileNumber,this.totalNumberTiles);
    this.updateImage();
  }

  private loadPreviousTile(){
    console.log(`Loading previous tile...`);
    this.currentTileNumber = this.cyclicDecrement(this.currentTileNumber,this.totalNumberTiles);
    this.updateImage();
  }

  private cyclicIncrement(n: number, max: number): number{
    console.log(`decrementing ${n}`);
    let output: number= n;
    if(output===max){
      output=1;
    }else{
      output++;
    }
    return output;
  }

  private cyclicDecrement(n: number, max: number): number{
    let output: number = n;
    if(n===0){
      output=max;
    }else{
      output--;
    }
    return output;
  }

  private updateImage(){
    this.imageSource = this.createImageSourceString(this.currentTileNumber);
  }

}
