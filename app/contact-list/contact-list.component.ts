import {Component} from '@angular/core';

import {UserHeader} from './user-header/user-header.component';

import {Contact} from './contact/contact.component';

import {ContactsStore} from './contact-store';

@Component({
  selector:'contact-list',
  templateUrl:'app/contact-list/contact-list.html',
  styleUrls:['app/contact-list/contact-list.css'],
  directives:[UserHeader,Contact]
})

export class ContactList{
  constructor(private store:ContactsStore){
  }
  onEnterAddContact(newContact:HTMLInputElement){
    let value = newContact.value;
    if(value.trim() !== ''){
      this.store.addContact(value);
      newContact.value = '';
    }

  }
};
