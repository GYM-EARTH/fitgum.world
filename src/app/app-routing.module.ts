import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ChatComponent } from './chat/chat.component';
import { TrainerComponent } from './trainer/trainer.component';
import { BlogComponent } from './blog/blog.component';
import { TrainersComponent } from './trainers/trainers.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forget-password', component: ForgetComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'trainers/:id', component: TrainerComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
