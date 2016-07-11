import {Component,Input} from '@angular/core';
import {Contact as contactModel,ContactsStore} from '../contact-store';

@Component({
  selector:'contact',
  templateUrl:'app/contact-list/contact/contact.html',
  styleUrls:['app/contact-list/contact/contact.css']
})

export class Contact{
  @Input()
  contact:contactModel;
  constructor(private store:ContactsStore){}
  onToggleFavorate(contact:contactModel){
    this.store.toggleFavoriteContact(contact);
  }
  onRemove(contact:contactModel){
    this.store.removeContact(contact);
  }
};
