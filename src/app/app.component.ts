import { DOCUMENT } from '@angular/common';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostListener, Inject } from '@angular/core';
import { LocalizationService } from 'app/shared/localization/localization.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  constructor(localizationService: LocalizationService) {
    localizationService.InitializeLanguage();
  }

  @HostListener('window:beforeunload', ['$event'])
  public beforeunloadHandler($event) {
    //this behavior avoid refresh site (F5) and stay logged in.
    //this.authService.logout();
  }
}
