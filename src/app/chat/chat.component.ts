import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  constructor(private route: ActivatedRoute){}
  chatId: string | null = null;

  ngOnInit(): void {
    this.chatId = this.route.snapshot.paramMap.get('id');
  }

}
