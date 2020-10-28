import { DashboardService } from './../dashboard/dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-xml',
    templateUrl: 'xml.component.html'
})

export class XMLComponent implements OnInit {
    xml:any=""
    constructor(
        private actr:ActivatedRoute,
        public dashServ:DashboardService
    ) { }

    ngOnInit() {
        this.dashServ.getXML()
        .subscribe(xml=>this.xml=xml)
    }
}