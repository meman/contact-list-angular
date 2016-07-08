import {Component} from '@angular/core';

@Component({
  selector:'user-header',
  templateUrl:'app/contact-list/user-header/user-header.html',
  styleUrls:['app/contact-list/user-header/user-header.css']
})

export class UserHeader{
  public user;
  constructor(){
    this.user = {
      img:'public/img/user-placeholder.png',
      name:'Dan',
      twHandle:"@dan"
    }
  }
}
