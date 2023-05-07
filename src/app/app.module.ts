import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first_page/first-page/first-page.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FifthPageComponent } from './fifth_page/fifth-page/fifth-page.component';
import { NinePageComponent } from './nine_page/nine-page/nine-page.component';
import { SecondPageComponent } from './second_page/second-page/second-page.component';
import { TenPageComponent } from './ten_page/ten-page/ten-page.component';
import { ThirdPageComponent } from './sections/about/third_page/third-page/third-page.component';
import { ElevenpageComponent } from './elevenpage/elevenpage/elevenpage.component';
import { FooterComponent } from './footer/footer/footer.component';
import { WebProjectsComponent } from './projects/web_projectss/web-projects/web-projects.component';
import { FlutterProjectsComponent } from './projects/flutter_projects/flutter-projects/flutter-projects.component';
import { ProjectsSectionComponent } from './sections/projects/projects-section/projects-section.component';
import { FourthPageComponent } from './projects/flutter_projects/fourth_page/fourth-page/fourth-page.component';
import { SixPageComponent } from './projects/flutter_projects/six_page/six-page/six-page.component';
import { EightPageComponent } from './projects/web_projectss/eight_page/eight-page/eight-page.component';
import { SevenPageComponent } from './projects/web_projectss/seven_page/seven-page/seven-page.component';
import { HomeComponent } from './home/home.component';
import { MobilenavComponent } from './mobilenav/mobilenav.component';
import { LoaderComponent } from './loader/loader.component';
import { LoadingScreenDirective } from './loader/loadingscreendirective.directive';
import { NgxLoadingModule } from 'ngx-loading';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    NavbarComponent,
    EightPageComponent,
    FifthPageComponent,
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
    ProjectsSectionComponent,
    HomeComponent,
    MobilenavComponent,
    LoaderComponent,
    LoadingScreenDirective,
    SplashScreenComponent
    
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
