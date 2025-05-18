import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './sidebar/contact/contact.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    ChatComponent,
    SidebarComponent,
    HomeComponent,
    ContactComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    AngularSvgIconModule.forRoot(),
  ]
})
export class ChatModule { }
