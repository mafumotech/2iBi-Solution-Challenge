import { Injectable, EventEmitter } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({providedIn: 'root'})

export class NotificationService {

    private messages:EventEmitter<Message> =new EventEmitter<Message>()

    constructor(){}

    notify(type:string,message:string,show:boolean){

        this.messages.emit(new Message(type,message,show))

        setTimeout(() => {
            this.messages.emit(new Message('','',false))
        }, 10000);

    }

    get getMessages(): EventEmitter<Message>{
        return this.messages
    }
    
}