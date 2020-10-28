import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

// services
import { AuthedGuard } from './shared/guards/authed.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'countries',pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivate:[AuthedGuard]},
  
  {path:'countries',component:HomeComponent,children:[
    {path:'',loadChildren:'./pages/dashboard/dashboard.module#DashboardModule',canActivate:[AuthGuard]},
  ]},
  {path:'**',component:NotFoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
