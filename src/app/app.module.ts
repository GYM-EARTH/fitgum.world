import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';
import localeJa from '@angular/common/locales/ja';
import localeJaExtra from '@angular/common/locales/extra/ja';

registerLocaleData(localeRu, 'ru', localeRuExtra);
registerLocaleData(localeEn, 'en', localeEnExtra);
registerLocaleData(localeJa, 'ja', localeJaExtra);

import { PassportService } from './passport.service';
import { ProfileService } from './profile.service';
import { ClubsService } from './clubs.service';
import { NewsService } from './news.service';
import { CookieService } from './cookie.service';
import { SocketService } from './socket.service';
import { EchoService } from './echo.service';
import { VacanciesService } from './vacancies.service';
import { VideosService } from './videos.service';

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
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExploreComponent } from './explore/explore.component';
import { BoardComponent } from './board/board.component';
import { BoardOneComponent } from './board/board-one/board-one.component';
import { BoardRowComponent } from './board/board-row/board-row.component';
import { ClubsComponent } from './clubs/clubs.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { TrainerComponent } from './trainer/trainer.component';
import { IntroComponent } from './blog/intro/intro.component';
import { ListComponent } from './blog/list/list.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainersListComponent } from './trainers/trainers-list/trainers-list.component';
import { SStartComponent } from './search/s-start/s-start.component';
import { ASingleComponent } from './article/a-single/a-single.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileChatComponent } from './profile/profile-chat/profile-chat.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { JoinComponent } from './join/join.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProfileCalendarComponent } from './profile/profile-calendar/profile-calendar.component';
import { CalendarDetailComponent } from './profile/calendar-detail/calendar-detail.component';
import { VideosComponent } from './videos/videos.component';
import { ProfileAsideComponent } from './profile/profile-aside/profile-aside.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { ServicesComponent } from './services/services.component';
import { JobsComponent } from './jobs/jobs.component';
import { ShowJobsComponent } from './jobs/show-jobs/show-jobs.component';

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
    ExperienceComponent,
    ProductsComponent,
    WelcomeComponent,
    ExploreComponent,
    BoardComponent,
    BoardOneComponent,
    BoardRowComponent,
    ClubsComponent,
    NewsComponent,
    SearchComponent,
    BlogComponent,
    ArticleComponent,
    TrainerComponent,
    IntroComponent,
    ListComponent,
    TrainersComponent,
    TrainersListComponent,
    SStartComponent,
    ASingleComponent,
    ProfileEditComponent,
    ProfileChatComponent,
    AboutComponent,
    ContactsComponent,
    JoinComponent,
    PaginationComponent,
    ProfileCalendarComponent,
    CalendarDetailComponent,
    VideosComponent,
    ProfileAsideComponent,
    PageNotFoundComponent,
    ProductsListComponent,
    RecomendationComponent,
    ServicesComponent,
    JobsComponent,
    ShowJobsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    PassportService,
    ProfileService,
    ClubsService,
    NewsService,
    CookieService,
    SocketService,
    EchoService,
    VacanciesService,
    VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
