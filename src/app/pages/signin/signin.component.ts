import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],

})
export class SigninComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateTo(url:string, element){
    console.log(element);
    element.style.animation="rubberBand";
    element.style.animationDuration="0.8s" ;
    setTimeout(() =>this.router.navigateByUrl(url), 800);
  }
}
