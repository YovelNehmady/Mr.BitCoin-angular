import { Component, OnInit, OnDestroy } from '@angular/core'
import { Contact } from 'src/app/models/contact.model'
import { Observable, Subscription } from 'rxjs'
import { ContactService } from 'src/app/services/contact/contact.service'

@Component({
  selector: 'contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit, OnDestroy {
  constructor(private contactService: ContactService) { }
  contacts!: Contact[]
  subscription!: Subscription


  ngOnInit(): void {
    this.contactService.loadContacts({ term: '' })
    this.subscription = this.contactService.contacts$.subscribe(contacts => this.contacts = contacts)
  }

  onRemove(contactId: string) {
    this.contactService.deleteContact(contactId)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
