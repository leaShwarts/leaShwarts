import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, LocationStrategy, PathLocationStrategy, registerLocaleData } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LocalizationService } from "app/shared/localization/localization.service";
import { SharedModule, HttpLoaderFactory } from './shared/shared.module';

import { MessageService } from 'primeng/api';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app-state.index';
import localeHe from '@angular/common/locales/he';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomerClaimComponent } from './components/customer-claim/customer-claim.component';
import { ProcessDetailsComponent } from './components/process-details/process-details.component';
import { ClaimContactsComponent } from './components/claim-contacts/claim-contacts.component';
import { ProcessInformationComponent } from './components/process-information/process-information.component';
import { ErrorHandling } from './shared/handlers/error-handling.handler';

registerLocaleData(localeHe);



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    CustomerClaimComponent,
    ProcessDetailsComponent,
    ClaimContactsComponent,
    ProcessInformationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule, // should be only in app module
    // SimpleNotificationsModule.forRoot(), // should be only in app module
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    ,
    SharedModule.forRootOrChild(),
    StoreModule.forRoot(reducers)

  ],
  providers: [
    LocalizationService,
    MessageService,
    { provide: LOCALE_ID, useValue: 'he' },
    { provide: ErrorHandler, useClass: ErrorHandling },
    { provide: LocationStrategy, useClass: PathLocationStrategy }//PathLocationStrategy avoid # in url
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
