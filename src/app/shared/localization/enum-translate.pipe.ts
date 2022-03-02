import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Injector, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { LocalizationService } from "app/shared/localization/localization.service";



@Pipe({ name: 'enumTranslate', pure: false })
export class EnumTranslatePipe implements PipeTransform, OnDestroy {
    private asyncPipe: AsyncPipe;

    constructor(private localizationService: LocalizationService, injector: Injector) {
        this.asyncPipe = new AsyncPipe(injector.get(ChangeDetectorRef));
    }

    ngOnDestroy() {
        this.asyncPipe.ngOnDestroy();
    }

    transform(value: number, enumType: any, enumName = null): string {
        return this.asyncPipe.transform(this.localizationService.TranslateEnum(value, enumType, enumName));
    }
}

