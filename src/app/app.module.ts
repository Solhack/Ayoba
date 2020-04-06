import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePage } from './welcome/welcome.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { TabsPage } from './tabs/tabs.page';


@NgModule({
  declarations: [
  AppComponent,
  WelcomePage,
  LoginPage,
  RegisterPage,
  TabsPage
],
  entryComponents: [
    WelcomePage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent, WelcomePage]
})
export class AppModule {}
