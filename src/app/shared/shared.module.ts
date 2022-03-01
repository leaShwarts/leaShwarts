import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';

import { HttpClient } from "@angular/common/http";

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { EnumTranslatePipe } from './localization/enum-translate.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
   
  ],
  exports: [EnumTranslatePipe, 
    FormsModule, ReactiveFormsModule, TranslateModule,
    EnumTranslatePipe,
  ],
  declarations: [EnumTranslatePipe, 
    EnumTranslatePipe,
  ]
})
export class SharedModule {
  static forRootOrChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,

      // the singletone providers - one instance for all modules
      providers: [HttpClient,
      ]
    };
  }
}
