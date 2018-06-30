import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module"


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContainerComponent } from './home/container/container.component';
import { MydirectiveDirective } from './directives/mydirective.directive';
import { MypipePipe } from './pipes/mypipe.pipe';
import { DashboardComponent } from './home/container/dashboard/dashboard.component';
import { AjoutComponent } from './home/container/ajout/ajout.component';
import { DetailComponent } from './home/container/detail/detail.component';
import { PocComponent } from './home/container/poc/poc.component';
import { LoginComponent } from './home/container/login/login.component';
import { InscriptionComponent } from './home/container/inscription/inscription.component';
const AppRoute : Routes = [
  {path:"",component:DashboardComponent},
  {path:"ajout",component:AjoutComponent},
  {path:"detail/:id",component:DetailComponent},
  {path:"poc",component:PocComponent},
  {path:"login",component:LoginComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"**",component:DashboardComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    MydirectiveDirective,
    MypipePipe,
    DashboardComponent,
    AjoutComponent,
    DetailComponent,
    PocComponent,
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoute),
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
