import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first_page/first-page/first-page.component';
import { NinePageComponent } from './nine_page/nine-page/nine-page.component';
import { SecondPageComponent } from './second_page/second-page/second-page.component';
import { TenPageComponent } from './ten_page/ten-page/ten-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { ElevenpageComponent } from './elevenpage/elevenpage/elevenpage.component';
import { FooterComponent } from './footer/footer/footer.component';
import { WebProjectsComponent } from './projects/web_projectss/web-projects/web-projects.component';
import { FlutterProjectsComponent } from './projects/flutter_projects/flutter-projects/flutter-projects.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { FourthPageComponent } from './projects/flutter_projects/fourth_page/fourth-page/fourth-page.component';
import { SixPageComponent } from './projects/flutter_projects/six_page/six-page/six-page.component';
import { EightPageComponent } from './projects/web_projectss/eight_page/eight-page/eight-page.component';
import { SevenPageComponent } from './projects/web_projectss/seven_page/seven-page/seven-page.component';
import { HomeComponent } from './home/home.component';
import { MobilenavComponent } from './mobilenav/mobilenav.component';
import { LoneNumberPageComponent } from './projects/flutter_projects/lone_number/fourth-page/lone_number.component';
import { NgxLoadingModule } from 'ngx-loading';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { QuotesComponent } from './projects/web_projectss/quotes/quotes.component';
import { WhatsappComponent } from './projects/flutter_projects/whatsapp/whatsapp.component';
import { WebTenPageComponent } from './projects/web_projectss/ten_page/ten-page/ten-page.component';
import { WebNinePageComponent } from './projects/web_projectss/nine_page/nine-page/nine-page.component';
import { WebElevenPageComponent } from './projects/web_projectss/eleven_page/eleven-page/eleven-page.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    EightPageComponent,
    FourthPageComponent,
    NinePageComponent,
    SecondPageComponent,
    SevenPageComponent,
    SixPageComponent,
    TenPageComponent,
    ThirdPageComponent,
    ElevenpageComponent,
    FooterComponent,
    WebProjectsComponent,
    FlutterProjectsComponent,
    LoneNumberPageComponent,
    ProjectsSectionComponent,
    HomeComponent,
    MobilenavComponent,
    SplashScreenComponent,
    QuotesComponent,
    WhatsappComponent,
    WebTenPageComponent,
    WebNinePageComponent,
    WebElevenPageComponent


  ],
  imports: [
    NgxLoadingModule.forRoot({}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
