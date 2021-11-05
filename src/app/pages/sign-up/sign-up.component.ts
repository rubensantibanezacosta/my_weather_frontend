import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  backIcon = '../../../assets/icons/back-icon.png';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
navigateTo(url:string, element){
  element.style.animationDuration="0.8s" ;
  element.style.animation="rubberBand";
  setTimeout(() =>this.router.navigateByUrl(url), 800);
}
}
