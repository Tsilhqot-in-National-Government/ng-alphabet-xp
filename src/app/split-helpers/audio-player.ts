import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AudioPlayer{

    public playAudioFromFile(audioFilePath: string){
        console.log(`Web audio file ${audioFilePath} will play...`);
    }
}