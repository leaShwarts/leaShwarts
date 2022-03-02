import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EnumService } from 'app/model/services/enum.service';
import { Observable } from 'rxjs';

@Injectable()
export class LocalizationService {
    OnChangeLanguage = new EventEmitter();

    constructor(private translate: TranslateService, private _enumService: EnumService) {
        
    }
    getEnumValuesTranslation(enumType: any, customEnumName: any = null, selectedValues: any = null): string[] {
        const list = selectedValues && selectedValues.length ? selectedValues : this._enumService.getEnumValues(enumType);
        return list.map(element => { return { label: this.TranslateEnum(element, enumType, customEnumName), value: element }; });
    }
    TranslateEnum(value: number, enumType: any, customEnumName: string = null) {
        const enumName = customEnumName ? customEnumName : this._enumService.getEnumName(enumType);
        return this.TranslateAsync('ENUMS.' + enumName + '.' + enumType[value]);
    }
    Translate(value: string, params: any = {}) {
        return this.translate.instant(value, params);
    }
    TranslateAsync(value: string, params: any = {}) {
        return this.translate.get(value, params);
    }
    InitializeLanguage() {
        this.translate.setDefaultLang('he');
        this.translate.use('he');
        this.OnChangeLanguage.emit();
    }
}
