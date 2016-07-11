import {bootstrap} from '@angular/platform-browser-dynamic';

import {ContactList} from './contact-list/contact-list.component';

import {ContactsStore} from './contact-list/contact-store';

bootstrap(ContactList,[ContactsStore]);
