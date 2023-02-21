import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute,) { }

  subscription!: Subscription
  contact!: Contact

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
  }
  onNewTransfer(){

  }
  onDelete(){}

}
