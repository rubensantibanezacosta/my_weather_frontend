import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  userCircleIcon = "../../../assets/icons/user-circle-icon.png"
  ngOnInit(): void {
  }
  navigateTo(url: string) {
    setTimeout(() => this.router.navigateByUrl(url), 800);
  }
}
