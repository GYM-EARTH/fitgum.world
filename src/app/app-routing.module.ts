import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { JobsComponent } from './jobs/jobs.component';
import { TrainerComponent } from './trainer/trainer.component';
import { BlogComponent } from './blog/blog.component';
import { TrainersComponent } from './trainers/trainers.component';
import { SearchComponent } from './search/search.component';
import { ArticleComponent } from './article/article.component';
import { ClubComponent } from './club/club.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileChatComponent } from './profile/profile-chat/profile-chat.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileCalendarComponent } from './profile/profile-calendar/profile-calendar.component';
import { CalendarDetailComponent } from './profile/calendar-detail/calendar-detail.component';
import { VideosComponent } from './videos/videos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ShowJobsComponent } from './jobs/show-jobs/show-jobs.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'signin', component: SigninComponent, data: {animation: 'SignInPage'} },
  { path: 'signup', component: SignupComponent, data: {animation: 'SignUpPage'} },
  { path: 'forget-password', component: ForgetComponent },
  { path: 'profile', redirectTo: 'profile/edit', },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'profile/chat', component: ProfileChatComponent },
  { path: 'profile/calendar', component: ProfileCalendarComponent },
  { path: 'profile/calendar/detail', component: CalendarDetailComponent },
  { path: 'trainers', component: TrainersComponent, data: {animation: 'TrainersPage'} },
  { path: 'trainers/:id', component: TrainerComponent },
  { path: 'clubs', component: ClubsComponent, data: {animation: 'Clubsage'} },
  { path: 'clubs/:id', component: ClubComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'jobs/:id', component: ShowJobsComponent },
  { path: 'news', component: BlogComponent, data: {animation: 'BlogPage'} },
  { path: 'news/:id', component: ArticleComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
  { path: 'contacts', component: ContactsComponent, data: {animation: 'ContactsPage'} },
  { path: 'videos', component: VideosComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
