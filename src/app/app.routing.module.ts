import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-list/book-detail/book-detail.component';

// Define the routes for the application
export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book-details/:id', component: BookDetailComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
