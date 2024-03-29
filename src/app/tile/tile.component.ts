import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AudioPlayer } from "@src/app/split-helpers/audio-player";


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  private totalNumberTiles: number = 53;

  public currentTileNumber: number;
  public imageSource: string;
  public screenScale: number; 



  constructor(private activatedRoute: ActivatedRoute, private audioPlayer: AudioPlayer) {
    this.activatedRoute.queryParams.subscribe((params)=>{

      this.currentTileNumber = params["currentTile"];
    });
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
    console.log(`incrementing ${n}`);
    let output: number= n;
    if(output==max){
      output=1;
    }else{
      output++;
    }
    return output;
  }

  private cyclicDecrement(n: number, max: number): number{
    console.log(`decrementing ${n}`);
    let output: number = n;
    if(n==1){ //
      output=max;
    }else{
      output--;
    }
    return output;
  }

  private updateImage(){
    this.imageSource = this.createImageSourceString(this.currentTileNumber);
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
