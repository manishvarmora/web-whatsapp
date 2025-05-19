import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  encapsulation: ViewEncapsulation.None

})
export class SidebarComponent {
  sidebarShowOptions = false;
  sidebarOptions = ['New group', 'Starred Messages', 'Profile', 'Settings', 'Log out']; // Replace with your options
  position = 'left'; // or 'right

  onOptionClick(option: string) {
    console.log('Selected:', option);
    this.sidebarShowOptions = false;
  }
}
