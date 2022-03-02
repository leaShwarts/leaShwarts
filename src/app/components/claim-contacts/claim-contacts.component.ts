import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Claim } from 'app/model/claim.model';
import { ContactPerson } from 'app/model/contact-person.model';
import { Insured } from 'app/model/insured.model';

@Component({
  selector: 'app-claim-contacts',
  templateUrl: './claim-contacts.component.html',
  styleUrls: ['./claim-contacts.component.scss']
})
export class ClaimContactsComponent implements OnInit {

  constructor() { }

  @Input()
  insured: Insured;

  @Output() contactsChange = new EventEmitter();

  _contacts:ContactPerson[];
  get contacts():ContactPerson[] { return this._contacts; }
  @Input()
  set contacts(val:ContactPerson[]) {
    this._contacts = val;
    this.contactsChange.emit(this._contacts);
  }

  lastDeliveryFlag = false;

  get contactsCount() { return this.contacts ? this.contacts.length : '' }

  ngOnInit(): void {
  }

  addInsuredToContacts() {
    if(this.contacts.filter(contact=>contact.identity===this.insured.identity).length>0){
      return;
    }

    this.contacts.push({
      id: this.contacts.length,
      deliveryFlag: !this.lastDeliveryFlag,
      type: {
        code: 5,
        value: "שאר"
      },

      firstName: this.insured.firstName,
      lastName: this.insured.lastName,
      identity: this.insured.identity,
      address: {
        cityName: this.insured.address.cityName,
        streetName: this.insured.address.streetName
      },
      cellPhone: this.insured.cellPhone,
      email: this.insured.email
    });

    this.lastDeliveryFlag = !this.lastDeliveryFlag;
  }

  deleteContacts() {
    this.contacts = [];
  }
  resetContacts() {
    if (this.contacts?.length > 0) {
      this.contacts = [this.contacts[0]]
    }
  }

}
