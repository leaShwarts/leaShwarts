export interface ContactPerson {
    id: number,
    deliveryFlag: boolean,
    type: {
        code: number,
        value: string
    },
    firstName: string,
    lastName: string,
    identity: number,
    address: {
        homeNumber?: number,
        cityName: string,
        streetName?: string
    },
    cellPhone: number,
    email?: string
}