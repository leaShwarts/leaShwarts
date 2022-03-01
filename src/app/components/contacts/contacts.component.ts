import { Component, Input, OnInit } from '@angular/core';
import { ContactPerson } from 'app/model/contact-person.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  @Input()
  contacts: ContactPerson[];
  lastDeliveryFlag=false;

  newContact(){
    this.contacts.push({
      id: this.contacts.length,
      deliveryFlag : !this.lastDeliveryFlag,
      type : {
          code : 5,
          value : "שאר"
      },
      firstName : "ישראל",
      lastName : "ישראלי",
      identity : 278545412,
      address : {
          homeNumber : 9,
          cityName : "רחובות",
          streetName : "אופנהיימר"
      },
      cellPhone : 525816206,
      email : "NIKITA_JAIN@AMAT.COM"
  });
  
  this.lastDeliveryFlag=!this.lastDeliveryFlag;
  }

  ngOnInit(): void {
  }

}
