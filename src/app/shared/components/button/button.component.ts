import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonLoading:any=false

  @Input() formValidation:any=false

  @Input() buttonObj:any={
    nameButton:'SALVAR',
    nameButtonLoading:'SALVANDO',
    color:'success',
    type:'submit',
    icon:'save',
  }


  constructor() {}

  ngOnInit() {
  
  
  }

}
