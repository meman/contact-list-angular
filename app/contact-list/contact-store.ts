
export interface Contact{
  id:Number;
  name:String;
  favorite:Boolean;
}

export class ContactsStore{
  contacts:Contact[];
  constructor(){
    this.contacts = [];
  }
  addContact(newContact:String){
    let newContactObj = {
      id:this.contacts.length + 1,
      name:newContact,
      favorite:false
    }
    this.contacts.push(newContactObj);
  }
  removeContact(contact:Contact){
    let pos = this.contacts.indexOf(contact);
    this.contacts.splice(pos,1);
  }
  toggleFavoriteContact(contact:Contact){
    let pos = this.contacts.indexOf(contact);
    this.contacts[pos].favorite = !this.contacts[pos].favorite; 
  }
}
