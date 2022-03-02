import { Component, OnInit } from '@angular/core';
import { Claim } from 'app/model/claim.model';
import { ClaimStatus, ProcessStatus, SuperClaimStatus } from 'app/model/enums';

@Component({
  selector: 'app-customer-claim',
  templateUrl: './customer-claim.component.html',
  styleUrls: ['./customer-claim.component.scss']
})
export class CustomerClaimComponent implements OnInit {

  isInsuredInHealthClaimp
  constructor() { }

  claim: Claim;


  get process() { return this.claim?.process; }
  get insured() { return this.claim?.process.insured; }
  get contacts() { return this.claim?.contacts; }

  ngOnInit(): void {
    this.loadData();

  }
  loadData() {
    this.claim = {
      process: {
        processType: "AMBULATORY_HEALTH_CLAIM",
        processStatus: ProcessStatus.AMBULATORY_HEALTH_CLAIM,
        superClaim: {
          inquiryPorcessFlag: true,
          irregularSuperClaimFlag: false,
          pensionFollowUpForInsuredType: 0,
          superClaimStatus:SuperClaimStatus.open,
          deathAfterDisabilityFlag: false,
          operativeClaims: [
            {
              operativeClaimNum: 123,
              company: 2,
              claimStatus: ClaimStatus.open,
              coverages: [
                {
                  coverageNum: 1,
                  claimParticipating: false
                },
                {
                  coverageNum: 2,
                  claimParticipating: false
                }
              ]
            }, {
              operativeClaimNum: 24531,
              company: 1,
              claimStatus: ClaimStatus.canceled,
              coverages: [
                {
                  coverageNum: 1,
                  claimParticipating: true
                },
                {
                  coverageNum: 2,
                  claimParticipating: false
                }
              ]
            }
          ]
        },
        insured: {
          companyEmployer: true,
          position: "פקיד",
          identity: 27854122145,
          firstName: "מריה",
          lastName: "ג'יין",
          age: 35,
          lastJobDescription: "כללי - מקפת",
          smokingCode: 0,
          email: "NIKITA_JAIN@AMAT.COM",
          cellPhone: 548455675,
          address: {
            cityName: "רעננה",
            streetName: "אחוזה",
            cellPhone: 544485236
          }
        }
      },
      contacts: [
        {
          id: 1,
          deliveryFlag: true,
          type: {
            code: 1,
            value: "מבוטח"
          },
          firstName: "ניקיטה",
          lastName: "ג'יין",
          identity: 278545412,
          address: {
            homeNumber: 9,
            cityName: "רחובות",
            streetName: "אופנהיימר"
          },
          cellPhone: 525816206,
          email: "NIKITA_JAIN@AMAT.COM"
        },
        {
          id: 2,
          deliveryFlag: false,
          type: {
            code: 21,
            value: "סוכן"
          },
          firstName: "טוביה",
          lastName: "בצקי",
          identity: 433974846,
          address: {
            cityName: "מחנה תל נוף",
          },
          cellPhone: 525452206,
          email: 'adam@gmail.com'
        }]
    }

  }







  //   isAmbulatoryProcess() {
  //     return processType === "AMBULATORY_HEALTH_CLAIM" || vm.processType === "AMBULATORY_HEALTH_CLAIM_CONT";
  //   }

  //   contactIsInsured(contactPerson) {
  //     return contactPerson.type.code === contactPersonType.INSURED;
  //   }

  //   isInsuredInHealthClaim(contactPerson) {
  //     return isAmbulatoryProcess() && contactIsInsured(contactPerson);
  //   };
}
