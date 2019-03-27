import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PassportService } from './passport.service';
import { ProfileService } from './profile.service';
import { ClubsService } from './clubs.service';
import { NewsService } from './news.service';
import { CookieService } from './cookie.service';

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
import { ChatComponent } from './chat/chat.component';

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
    ChatComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PassportService, ProfileService, ClubsService, NewsService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
