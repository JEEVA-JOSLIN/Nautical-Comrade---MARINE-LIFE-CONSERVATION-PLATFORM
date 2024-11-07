import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent } from './home/home.component';
import { VoluteeringComponent } from './voluteering/voluteering.component';
import { SpeciesComponent } from './species/species.component';
import { DonateComponent } from './donate/donate.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile/profile.component';
import { AdminauthComponent } from './adminauth/adminauth.component';
import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { StartComponent } from './start/start.component';
import { ContactComponent } from './contact/contact.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventviewComponent } from './eventview/eventview.component';
import { WeaComponent } from './wea/wea.component';
import { MapComponent } from './map/map.component';
import { SearchmapComponent } from './searchmap/searchmap.component';
import { ReportComponent } from './report/report.component';

import { QuizComponent } from './quiz/quiz.component';
import { QuizzComponent } from './quizz/quizz.component';
import { AdeventComponent } from './adevent/adevent.component';

//import { ReportComponent } from './report/report.component';
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'voluteering',component:VoluteeringComponent},
    {path:'species',component:SpeciesComponent},
    {path:'donate',component:DonateComponent},
    {path:'register',component:RegisterComponent},
    {path: 'profile',component:ProfileComponent},
    {path: 'adminauth',component:AdminauthComponent},
    {path: 'admin',component:AdminComponent},
    {path: 'report',component:ReportComponent},
    {path: 'change',component:ChangePasswordComponent},
    {path: 'userprofile',component:UserprofileComponent},
    {path: 'create-event',component:CreateEventComponent},
    {path: 'start',component:StartComponent},
    {path: 'contact',component:ContactComponent},
    //{path: 'try',component:TryComponent},
    {path: 'map',component:MapComponent},
    {path: 'eventlist',component:EventlistComponent},
    {path: 'eventview',component:EventviewComponent},
    {path: 'wea',component:WeaComponent},
    {path: 'searchmap',component:SearchmapComponent},
    {path: 'quiz',component:QuizComponent},
    {path: 'quizz',component:QuizzComponent},
    {path: 'adevent',component:AdeventComponent},
    {path : 'rep',component:ReportComponent}
   // {path: 'report',component:ReportComponent}
    

];
@NgModule({
imports: [RouterModule.forRoot(routes),FormsModule,HttpClientModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }