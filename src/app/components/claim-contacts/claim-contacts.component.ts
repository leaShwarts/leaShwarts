import { Component, Input, OnInit } from '@angular/core';
import { Claim } from 'app/model/claim.model';
import { ContactPerson } from 'app/model/contact-person.model';

@Component({
  selector: 'app-claim-contacts',
  templateUrl: './claim-contacts.component.html',
  styleUrls: ['./claim-contacts.component.scss']
})
export class ClaimContactsComponent implements OnInit {

  constructor() { }

  @Input()
  claim: Claim;

  get contacts(): ContactPerson[] { return this.claim?.contacts; }

  lastDeliveryFlag = false;

  get contactsCount() { return this.contacts ? this.contacts.length : '' }

  ngOnInit(): void {
  }

  addInsuredToContacts() {
    const insured = this.claim.process.insured;
    if(this.contacts.filter(contact=>contact.identity===insured.identity).length>0){
      return;
    }

    this.contacts.push({
      id: this.contacts.length,
      deliveryFlag: !this.lastDeliveryFlag,
      type: {
        code: 5,
        value: "שאר"
      },

      firstName: insured.firstName,
      lastName: insured.lastName,
      identity: insured.identity,
      address: {
        cityName: insured.address.cityName,
        streetName: insured.address.streetName
      },
      cellPhone: insured.cellPhone,
      email: insured.email
    });

    this.lastDeliveryFlag = !this.lastDeliveryFlag;
  }

  deleteContacts() {
    this.claim.contacts = [];
  }
  resetContacts() {
    if (this.contacts?.length > 0) {
      this.claim.contacts = [this.claim.contacts[0]]
    }
  }

}
