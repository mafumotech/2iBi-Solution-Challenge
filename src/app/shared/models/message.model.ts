export class Message{
    constructor(
        public type:string,
        public message:string,
        public showAlert:boolean=false
    ){}
}