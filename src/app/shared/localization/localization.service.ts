import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class LocalizationService {
    OnChangeLanguage = new EventEmitter();

    constructor(private translate: TranslateService)//, private _enumService: EnumService) {
        {
    }
    // getEnumValuesTranslation(key: any, customEnumName: any = null, selectedValues: any = null) {
    //     const list = selectedValues && selectedValues.length ? selectedValues : this._enumService.getEnumValues(key);
    //     return list.map(element => { return { label: this.TranslateEnum(element, key, customEnumName), value: element }; });
    // }
    TranslateEnum(value: number, enumType: any, customEnumName: string = null): Observable<string> {
        const enumName = customEnumName ? customEnumName : 'enumName'//this._enumService.getEnumName(enumType);
        return this.translate.get(`ENUMS.${enumName}.${enumType[value]}`); //translate.instant dont work with nested values more then 2 levels, so should use async trnslate.get method
    }
    Translate(value: string, params: any = {}) {
        return this.translate.instant(value, params);
    }

    InitializeLanguage() {
        this.translate.setDefaultLang('he');
        this.translate.use('he');
        this.OnChangeLanguage.emit();
    }
}
