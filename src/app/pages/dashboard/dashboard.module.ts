import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { XMLComponent } from '../xml/xml.component';


@NgModule({
    declarations: [DashboardComponent,XMLComponent],

    imports: [
        SharedModule,
        DashboardRoutingModule
    ],
    exports: [],
    providers: [],
})
export class DashboardModule { }
