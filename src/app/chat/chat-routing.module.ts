import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: "chat/:id",component:ChatComponent},
  {path: "chat",component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
