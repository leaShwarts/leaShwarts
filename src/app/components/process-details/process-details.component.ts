import { Component, Input, OnInit } from '@angular/core';
import { Claim } from 'app/model/claim.model';
import { ClaimStatus } from 'app/model/enums';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss']
})
export class ProcessDetailsComponent implements OnInit {

  constructor() { }

  @Input()
  claim: Claim;

  get supperClaim() { return this.claim?.process.superClaim }

  getClaims() {
    if (!this.supperClaim?.operativeClaims) { return ''; }
    const isClaimParticipating = this.supperClaim.operativeClaims.filter(o => o.coverages.filter(coverage => coverage.claimParticipating).length > 0)

    const participatingClaims = this.supperClaim.operativeClaims.filter(op => op.claimStatus !== ClaimStatus.canceled && isClaimParticipating)
    return participatingClaims ? participatingClaims.map((claim) => {
      return claim.company + "-" + claim.operativeClaimNum;
    }).join(",") : "אין תביעות משתתפות";
  }

  refresh(){
    this.supperClaim.inquiryPorcessFlag=false;
    this.supperClaim.irregularSuperClaimFlag=true;
  }

  ngOnInit(): void {
  }

}
