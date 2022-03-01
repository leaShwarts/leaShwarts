export interface Insured {
    companyEmployer: boolean,
    position: string,
    identity: number,
    firstName: string,
    lastName: string,
    age: number,
    lastJobDescription: string,
    smokingCode: 0,
    email: string,
    cellPhone: number,
    address: {
        cityName: string,
        streetName: string,
        cellPhone: number
    }
}