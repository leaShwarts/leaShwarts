import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Injector, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { LocalizationService } from "app/shared/localization/localization.service";

// @Pipe({
//     name: 'enumTranslate'
// })
// export class EnumTranslatePipe implements PipeTransform {
//     constructor(private localizationService: LocalizationService) { }
//     transform(value: number, enumType: any, enumName = null): any {
//         if (!value) {
//             return "";
//         }
//         return this.localizationService.TranslateEnum(value, enumType, enumName);
//     }
// }

// @Pipe({
//     name: 'enumTranslate'
// })
// export class EnumTranslatePipe implements PipeTransform {
//     private asyncPipe: AsyncPipe;

//     constructor(private localizationService: LocalizationService, private injector: Injector) {
//         this.asyncPipe = new AsyncPipe(injector.get(ChangeDetectorRef));
//     }

//     transform(value: number, enumType: any, enumName = null): any {
//         if (!value) {
//             return "";
//         }
//         return this.asyncPipe.transform(this.localizationService.TranslateEnum(value, enumType, enumName));
//     }
// }


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

