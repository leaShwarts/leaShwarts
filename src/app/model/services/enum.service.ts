import { Injectable } from '@angular/core';
import { SuperClaimStatus } from '../enums';

@Injectable()
export class EnumService {
  private enumNames: Map<any, any>;
  constructor() {
    this.enumNames = new Map();

    this.enumNames.set(SuperClaimStatus, { name: "SuperClaimStatus", values: this.enumValuesToList(SuperClaimStatus) })
  }

  getEnumName(enumType) {
    return this.enumNames.get(enumType).name;
  }
  getEnumValues(enumType) {
    return this.enumNames.get(enumType).values;
  }
  //return the names of enum values
  enumValuesToList(enumType) {
    return Object.keys(enumType)
      .filter(isNotNumeric)
      .map(key => enumType[key]);
  }
  enumNamesToList(enumType) {
    return Object.keys(enumType)
      .filter(isNumeric)
      .map(key => enumType[key]);
  }
}
const isNumeric = (num) => {
  return !isNaN(num)
}
const isNotNumeric = (str) => {
  return !isNumeric(str);
}

// function isNotNumeric(isNotNumeric: any) {
//   throw new Error('Function not implemented.');
// }

// function isNumeric(isNumeric: any) {
//   throw new Error('Function not implemented.');
// }

