import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderlistComponent } from './headerlist/headerlist.component';
import { TodayCardsComponent } from './today-cards/today-cards.component';
import { LeftContentComponent } from './left-content/left-content.component';
import { RightContentComponent } from './right-content/right-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderlistComponent,
    TodayCardsComponent,
    LeftContentComponent,
    RightContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
