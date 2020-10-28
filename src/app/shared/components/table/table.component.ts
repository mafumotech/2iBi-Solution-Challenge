import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

declare var  $:any

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

 @Input() paging: boolean=false;
 @Input() ordering: boolean=false;
 @Input() searching: boolean=true;
 @Input() showNEntries: boolean=true;
 @Input() id_table:any;

 constructor(){}

  ngOnInit(){
    this.initTable()
  }

  initTable(){

    setTimeout(() => {

      $('#'+this.id_table).DataTable({

        dom: 'Bfrtip',
        ordering:this.ordering,
        paging:this.paging,
        searching:this.searching,
        info : this.showNEntries,
        autoWidth: false,
        buttons: [
          'excel','csv'
        ]

      });

    },50);

  }

}
