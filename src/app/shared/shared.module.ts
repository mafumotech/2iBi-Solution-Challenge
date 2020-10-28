import { NgModule, ModuleWithProviders } from '@angular/core';
import { ToastrModule } from 'ng6-toastr-notifications';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// services
import { RefreshTokenInterceptor } from './interceptors/refresh-token-interceptor';
import { ErrorsInterceptor } from './interceptors/error-interceptor';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { AuthedGuard } from './guards/authed.guard';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NotificationService } from './services/notifications.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { ButtonComponent } from './components/button/button.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';
import { AppMessagesComponent } from './components/app-messages/app-messages.component';
import { BoxLoadingComponent } from './components/table-loading/box-loading.component';



@NgModule({
    
    declarations:[
        InputComponent,
        BreadCrumbComponent, 
        ButtonComponent,
        AppMessagesComponent,
        TableComponent,
        BoxLoadingComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot()
    ],

    exports: [

        // module
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule,

        // components
        InputComponent,
        BreadCrumbComponent,
        ButtonComponent,
        AppMessagesComponent,
        TableComponent,
        BoxLoadingComponent
    ],
    
})

export class SharedModule{

    static forRoot():ModuleWithProviders{
        return {
            ngModule:SharedModule,
            providers: [
                AuthService,
                NotificationService,
                AuthGuard,
                AuthedGuard,
                {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
                {provide:HTTP_INTERCEPTORS,useClass:RefreshTokenInterceptor,multi:true},
                {provide:HTTP_INTERCEPTORS,useClass:ErrorsInterceptor,multi:true},
                {provide:LocationStrategy,useClass:HashLocationStrategy}
            ]
        }
    }

}
