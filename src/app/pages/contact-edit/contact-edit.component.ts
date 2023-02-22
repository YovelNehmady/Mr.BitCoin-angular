import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { lastValueFrom, Subscription } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact/contact.service'

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  contact!: Contact
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact() as Contact
    })
  }

  async onSubmit() {
    try {
      await lastValueFrom(this.contactService.saveContact(this.contact))
      this.router.navigateByUrl('/contact')
    } catch (error) {
      console.log('error', error)
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
