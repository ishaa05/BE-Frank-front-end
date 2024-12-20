import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { authGuard } from './auth.guard'; // Import the auth guard function

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'events',component:EventsComponent
  },
  {
    path:'about-us',component:AboutUsComponent
  },{
    path:'contact_us',component:ContactUsComponent
  },
  {
    path: 'users',
    component: UsersPageComponent,
    canActivate: [authGuard], // Protect the 'dashboard' route with the authGuard
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
