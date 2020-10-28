import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $: any
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countries: any[] = []
  isLoading: boolean = false

  @ViewChild('tabela') tabela: ElementRef
  constructor(
    private dashServ: DashboardService,
    private nav: Router,
  ) { }

  ngOnInit() {
    this.isLoading = true
    this.dashServ.getCountries()
      .subscribe(countries => {
        this.isLoading = false
        this.countries = countries
        // console.log(countries)
      }, () => this.isLoading = false)
  }

  generateXML() {

      let xml = "";
      $("#tabela_test_1 tr").each(function() {
          let cells = $("td", this);
          if (cells.length > 0) {
              xml += "<schedule name='" + cells.eq(0).text() + "'>\n";
              for (let i = 1; i < cells.length; ++i) {
                  xml += "\t<data>" + cells.eq(i).text() + "</data>\n";
              }
              xml += "</schedule>\n";
          }
        });
        // window.alert(xml);
        this.nav.navigate(['/countries/xml']).then(()=>this.dashServ.setXML(xml))

  }

}
