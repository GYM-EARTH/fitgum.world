import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PassportService } from './passport.service';
import { ProfileService } from './profile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClubComponent } from './club/club.component';
import { HeaderWhiteComponent } from './header/header-white/header-white.component';
import { HeaderBlackComponent } from './header/header-black/header-black.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgetComponent,
    ProfileComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClubComponent,
    HeaderWhiteComponent,
    HeaderBlackComponent,
    HeaderLogoComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PassportService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
