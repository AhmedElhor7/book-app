import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { BookModule } from './book-list/book.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BookModule,
    AppComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
