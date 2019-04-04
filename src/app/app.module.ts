import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchBarComponent } from './header-search-bar/header-search-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BookContainerComponent } from './books-container/books-container.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailsModalComponent } from './book-details-modal/book-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchBarComponent,
    MainContentComponent,
    BookContainerComponent,
    BookCardComponent,
    BookDetailsModalComponent
  ],
  entryComponents: [
    BookDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
