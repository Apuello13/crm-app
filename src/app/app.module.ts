import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

import { CookieService } from 'ngx-cookie-service';

import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppComponent } from './app.component';

import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { errorInterceptor } from './core/services/error.service';
import { spinnerInterceptor } from './core/services/spinner.service';
import { tokenInterceptor } from './core/services/token.interceptor';

import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { CUSTOM_DATE_FORMAT } from './core/utils/custom-date-format';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule,
    MatNativeDateModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideHttpClient(
      withFetch(),
      withInterceptors([errorInterceptor, tokenInterceptor, spinnerInterceptor])
    ),
    CookieService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMAT },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
