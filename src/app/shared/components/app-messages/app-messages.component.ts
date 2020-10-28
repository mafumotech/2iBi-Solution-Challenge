import { Component, OnInit } from '@angular/core';

// models
import { Message } from '../../models/message.model';

// services
import { NotificationService } from './../../services/notifications.service';

@Component({
  selector: 'app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.css']
})

export class AppMessagesComponent implements OnInit {

  public message:Message=new Message('','',false)

  constructor(public notificationServ:NotificationService){}

  ngOnInit() {
    this.notificationServ.getMessages
    .subscribe((message: Message)=>{
      
      this.message=message

    })

  }

}
