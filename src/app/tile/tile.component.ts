import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures';
import { TouchGestureEventData } from "tns-core-modules/ui/gestures";
import { screen } from "tns-core-modules/platform";
import { AudioPlayer } from "@src/app/split-helpers/audio-player";


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  private totalNumberTiles: number;

  public currentTileNumber: number;
  public imageSource: string;
  public screenScale: number; 

  constructor(private activatedRoute: ActivatedRoute, private audioPlayer: AudioPlayer) {
    this.activatedRoute.params.subscribe((params)=>{
      this.currentTileNumber = params["number"];
    });
    this.screenScale = screen.mainScreen.scale;

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

  private createAudioSourceString (wordOrLetter: string, n: number): string{
    let audioExtension: string = ".mp3";
    wordOrLetter = wordOrLetter.toUpperCase();
    let letterPrefix: string;
    if(wordOrLetter === "WORD"){
      letterPrefix = "S";
    }
    if(wordOrLetter === "LETTER"){
      letterPrefix = "L";
    }
    // console.log(`${this.audioExtension}`);
    return `~/app/sounds/${letterPrefix}${this.convertIntegersToTwoDigitString(n)}${audioExtension}`;
  }

  private convertIntegersToTwoDigitString(n: number): string{
    if(Number.isInteger){
      if(0<=n && n<=10){
        return "0"+ String(n);
      }
      return String(n);
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

  public onTouchTile(args: TouchGestureEventData){
    let tile: any= args.object;
    let regionClicked: string;
    // percentage of tile occupied by letter-> will register a click on letter if within this distance from top of tile
    let letterBottomBoundaryAsPercentage = 0.265; 
    console.log(`You touched the tile at point: ${args.getX()},${args.getY()}`);
    console.log(`Screen scale: ${this.screenScale}`);
    console.log(`Card width: ${tile.getMeasuredWidth()/this.screenScale}`);
    let cardHeight: number = tile.getMeasuredHeight()/this.screenScale;
    console.log(`Card height: ${tile.getMeasuredHeight()/this.screenScale}`);
    regionClicked = this.classifyClick(args.getY(),letterBottomBoundaryAsPercentage,cardHeight);
    this.audioPlayer.playAudioFromFile(this.createAudioSourceString(regionClicked,this.currentTileNumber));
  }

  private classifyClick(y: number, letterPercentage: number, cardHeight: number): string{
    if(y<letterPercentage*cardHeight){
      console.log(`Letter clicked`);
      return "LETTER";
    }
    console.log(`Word clicked.`);
    return "WORD";
  }

}
