import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    ChatModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
