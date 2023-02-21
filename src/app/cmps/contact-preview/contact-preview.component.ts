import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  constructor(private router: Router) { }
  @Input() contact!: Contact
  @Input() idx!: number
  @Output() remove = new EventEmitter

  onEdit(ev: MouseEvent, contactId: string | undefined) {
    ev.stopPropagation()
    this.router.navigate(['/contact/edit', contactId])
  }

  onRemove(ev: MouseEvent, contactId: string | undefined) {
    ev.stopPropagation()
    this.remove.emit(contactId)
  }

}
