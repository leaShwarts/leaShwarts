import { ContactPerson } from "./contact-person.model";
import { ClaimStatus } from "./enums";
import { Insured } from "./insured.model";

export interface Claim{
    process :{
        processType: "AMBULATORY_HEALTH_CLAIM",
        processStatus: number,
        superClaim: {
            inquiryPorcessFlag: boolean,
            irregularSuperClaimFlag: boolean,
            pensionFollowUpForInsuredType: number,
            superClaimStatus : {
                code : 1,
                value : "פתוחה"
            },
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