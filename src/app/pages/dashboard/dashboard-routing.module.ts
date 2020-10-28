import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { XMLComponent } from '../xml/xml.component';

const routes:Route[]=[
    {path:'',component:DashboardComponent},
    {path:'xml',component:XMLComponent},
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRoutingModule { }
