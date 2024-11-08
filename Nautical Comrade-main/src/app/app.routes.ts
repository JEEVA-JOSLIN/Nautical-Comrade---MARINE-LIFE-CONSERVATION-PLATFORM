import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EventviewComponent } from './eventview/eventview.component';
import { StartComponent } from './start/start.component';
import { AdminComponent } from './admin/admin.component';
import { AdminauthComponent } from './adminauth/adminauth.component';
import { ContactComponent } from './contact/contact.component';
import { SpeciesComponent } from './species/species.component';
import { QuizzComponent } from './quizz/quizz.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdeventComponent } from './adevent/adevent.component';
import { AlertComponent } from './alert/alert.component';
import { AlertviewComponent } from './alertview/alertview.component';
import { LeaderComponent } from './leader/leader.component';
import { RaiseComponent } from './raise/raise.component';
import { RespondComponent } from './respond/respond.component';
import { SearchmapComponent } from './searchmap/searchmap.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RemuserComponent } from './remuser/remuser.component';
import { RemeventComponent } from './remevent/remevent.component';


export const routes: Routes = [
        {path:'',component:HomeComponent},
        {path:'register',component:RegisterComponent},
        {path:'login',component:LoginComponent},
        {path: 'profile',component:ProfileComponent},
        {path: 'viewprofile',component:ViewprofileComponent},
        {path: 'userprofile',component:UserprofileComponent},
        {path: 'eventview',component:EventviewComponent},
        {path: 'start',component:StartComponent},
        {path: 'admin',component:AdminComponent},
        {path: 'adminauth',component:AdminauthComponent},
        {path: 'contact',component:ContactComponent},
        {path: 'species',component:SpeciesComponent},
        {path: 'quizz',component:QuizzComponent},
        {path: 'userlist',component:UserlistComponent},
        {path: 'adevent',component:AdeventComponent},
        {path: 'alert',component:AlertComponent},
        {path: 'alertview',component:AlertviewComponent},
        {path: 'leader',component:LeaderComponent},
        {path: 'raise',component:RaiseComponent},
        {path: 'respond',component:RespondComponent},
        {path: 'searchmap',component:SearchmapComponent},
        {path: 'changepassword',component:ChangePasswordComponent},
        {path: 'remuser',component:RemuserComponent},
        {path: 'remevent',component:RemeventComponent}
];
