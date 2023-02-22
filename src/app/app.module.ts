import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first_page/first-page/first-page.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { EightPageComponent } from './eight_page/eight-page/eight-page.component';
import { FifthPageComponent } from './fifth_page/fifth-page/fifth-page.component';
import { FourthPageComponent } from './fourth_page/fourth-page/fourth-page.component';
import { NinePageComponent } from './nine_page/nine-page/nine-page.component';
import { SecondPageComponent } from './second_page/second-page/second-page.component';
import { SevenPageComponent } from './seven_page/seven-page/seven-page.component';
import { SixPageComponent } from './six_page/six-page/six-page.component';
import { TenPageComponent } from './ten_page/ten-page/ten-page.component';
import { ThirdPageComponent } from './third_page/third-page/third-page.component';
import { ElevenpageComponent } from './elevenpage/elevenpage/elevenpage.component';
import { FooterComponent } from './footer/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
