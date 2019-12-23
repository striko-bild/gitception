import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommitsComponent } from './components/commits/commits.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { CallbackComponent } from './components/callback/callback.component';
import { ConfigService } from './services/config/config.service';

@NgModule({
  declarations: [
    AppComponent,
    CommitsComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => () => config.loadAppConfig(),
      deps: [ ConfigService ],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
