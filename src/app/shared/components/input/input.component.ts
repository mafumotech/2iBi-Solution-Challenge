import { Component, Input, ContentChild,AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterContentInit {
 
  @Input() public label:string
  @Input() public errorMessage:string

  input:any 

  @ContentChild(NgModel) model:NgModel
  @ContentChild(FormControlName) control:FormControlName

  ngAfterContentInit(): void {
    this.input=this.model || this.control
    if(this.input===undefined)
    throw new Error('Esse component precisa ser usado com uma diretiva ngModel')
  }

  constructor(){}

  hasSuccess():boolean{
    return  this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError():boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }


}
