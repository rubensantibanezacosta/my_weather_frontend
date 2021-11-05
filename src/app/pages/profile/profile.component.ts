import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router) { }
  avatar="../../../assets/images/avatar.jpeg";
  photoEditIcon="../../../assets/icons/photoEdit-Icon.png";
  pencilIcon="../../../assets/icons/pencil-icon.png";
  logoutIcon="../../../assets/icons/logout-icon.png";
  trashIcon="../../../assets/icons/trash-icon.png";
  ngOnInit(): void {
  }

  navigateTo(url:string){
    setTimeout(() =>this.router.navigateByUrl(url), 800);
  }
}
