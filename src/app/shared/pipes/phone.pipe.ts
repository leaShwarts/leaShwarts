import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "phone"
})
export class PhonePipe implements PipeTransform {
    transform(phoneNumber) {
        if (!phoneNumber)
            return '';
        phoneNumber = phoneNumber.toString();
        phoneNumber = phoneNumber.charAt(0) != 0 ? `0${phoneNumber}`:phoneNumber;
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
}
