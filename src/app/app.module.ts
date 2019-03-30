import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchBarComponent } from './header-search-bar/header-search-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BookContainerComponent } from './books-container/books-container.component';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchBarComponent,
    MainContentComponent,
    BookContainerComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
