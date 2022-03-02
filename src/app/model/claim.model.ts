import { ContactPerson } from "./contact-person.model";
import { ClaimStatus, ProcessStatus, SuperClaimStatus } from "./enums";
import { Insured } from "./insured.model";

export interface Claim{
    process :{
        processType: "AMBULATORY_HEALTH_CLAIM",
        processStatus: ProcessStatus,
        superClaim: {
            inquiryPorcessFlag: boolean,
            irregularSuperClaimFlag: boolean,
            pensionFollowUpForInsuredType: number,
            superClaimStatus : SuperClaimStatus,
            deathAfterDisabilityFlag: false,
            operativeClaims:
                {
                    operativeClaimNum: number,
                    company : number,
                    claimStatus :ClaimStatus,
                    coverages: 
                        {
                            coverageNum: number,
                            claimParticipating: boolean
                        }[]
                   
                }[]
            
        },
        insured : Insured

    },

    contacts:ContactPerson[]
}