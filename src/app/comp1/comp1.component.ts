import { Component, OnInit } from '@angular/core';
import { Validators, FormControlName } from '@angular/forms';
import { IImage } from 'ng-simple-slideshow';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})


export class Comp1Component implements OnInit {
  email = new FormControlName(null, [Validators.required, Validators.email],null,null,null);
   x=window.innerWidth; //screen.width;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  constructor() { }
  
  imageUrls: (string | IImage)[] = ( [
    { url: 'assets/img/imgD4.PNG'},
    { url: 'assets/img/imgD3.PNG'},
    { url: 'assets/img/imgD2.PNG' },
    { url: 'assets/img/imgD1.PNG'}
  ]);

  imageUrlsXS: (string | IImage)[] = ( [
    { url: 'assets/img/imgM1.PNG'},
    { url: 'assets/img/imgM2.PNG'},
    { url: 'assets/img/imgM3.PNG' }, 
    { url: 'assets/img/imgM4.PNG'}
  ]);
 
  height: string = '350px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows:boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = false;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = "100%";
  fullscreen: boolean = false;

  ngOnInit() {
   
  }
}