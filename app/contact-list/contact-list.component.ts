import {Component} from '@angular/core';

import {UserHeader} from './user-header/user-header.component';

@Component({
  selector:'contact-list',
  templateUrl:'app/contact-list/contact-list.html',
  styleUrls:['app/contact-list/contact-list.css'],
  directives:[UserHeader]
})

export class ContactList{
  onEnterAddContact(newContact:HTMLInputElement){
    let value = newContact.value;
    if(value.trim() !== ''){
      // TODO add to store functionality
      console.log(value);
      newContact.value = '';
    }

  }
};
