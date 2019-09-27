import { TNSPlayer } from 'nativescript-audio';
import { Injectable } from '@angular/core';
import { knownFolders, path, Folder, File } from "tns-core-modules/file-system";

@Injectable({
    providedIn: 'root'
  })
export class AudioPlayer{
    private player: TNSPlayer;

    constructor() {
      this.player = new TNSPlayer();
      this.player.debug = true; // set true to enable TNSPlayer console logs for debugging.
}

public playAudioFromFile(audioFilePath: string){
  console.log(`Playing audio...`)
  
    let playerOptions: any = {
        audioFile: audioFilePath,
        loop: false,
        completeCallback: function() {
          console.log('finished playing');
        },
        errorCallback: function(errorObject) {
          console.log(JSON.stringify(errorObject));
        },
        infoCallback: function(args) {
          console.log(JSON.stringify(args));
        }
    }
    if(!this.player.isAudioPlaying()){
        this.player.playFromFile(playerOptions);
    } 
  }
  
}