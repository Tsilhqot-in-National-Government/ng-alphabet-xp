import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  public credits: string = "Tŝilhqot’in Alphabet. Word list by Bella Alphonse with assistance from Aaron Plahn. Nasal vowels identified by Maria Myers. App designed and developed by Aaron Plahn. Title page by Blake Sellars. Built with NativeScript."
  public photoCredits: string = "Letters a,e,u,o,dl,tl,tl’,ŝ,ts’,j,sh,y,g,k,k’,gw,kw,w,q’,gh,ggw,qw,qw’,ʔ, and h: Photographs under CC0 license; no attribution required by original artist. Letter kw’: Artwork by Holly Fischer - http://open.umich.edu/education/med/resources/second-look-series/materials - Urinary Tract Slide 6, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=24367128. Letter n: Photograph Sherry Stump took of her horse. Letters i,lh,s, and x: Taken by other TNG staff. Letter b: photographed by Aaron Plahn- Sherry Stump’s gloves made by Madeline William. Letter t: Photographed by Aaron Plahn at TNG. Letter ch’: photographed by Aaron Plahn.; ch’i made by Mary Setah. Letter q photographed by Aaron Plahn with permission of Randy Billyboy; beteqash made by William Billyboy. Letters ɨ,p,m,d,t’,l,dẑ,tŝ,tŝ’,ẑ,dz,ts,z,ch,wh,gg,xw,ŵ: Photographed by Aaron Plahn."

  constructor() { }

  ngOnInit() {
  }

}
