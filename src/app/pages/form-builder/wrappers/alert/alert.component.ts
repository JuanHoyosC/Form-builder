import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, MessagesModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent extends FieldWrapper implements OnInit  {
  messages: Message[] = [];

  ngOnInit(){
      this.messages = [
          { severity: 'warn',  detail: this.props.label },
      ];
  }
}
