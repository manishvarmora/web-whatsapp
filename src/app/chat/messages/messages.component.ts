import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  chatShowOptions = false;
  chatOptions = ['Contact Info', 'Select Messages', 'Mute Notifications', 'Disappearing messages', 'Close Chat', 'Report', 'Block', 'Clear chat', 'Delete Chat']; // Replace with your options
  sidebarShowOptions = false;
  sidebarOptions = ['New group', 'Starred Messages', 'Profile', 'Settings', 'Log out']; // Replace with your options
  position = 'left'; // or 'right'

  onOptionClick(option: string) {
    console.log('Selected:', option);
    this.chatShowOptions = false;
  }
}
