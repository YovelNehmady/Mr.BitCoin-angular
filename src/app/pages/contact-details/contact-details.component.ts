import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { lastValueFrom, Subscription } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact/contact.service'

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  subscription!: Subscription
  contact!: Contact

  ngOnInit(): void {
    console.log('lolo');
    
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
  }

  onNewTransfer() {

  }

  async onRemove() {
    try {
      await lastValueFrom(this.contactService.deleteContact(this.contact._id!))
      this.router.navigateByUrl('/contact')
    } catch (error) {
      console.log('error', error)
    }
  }

}
