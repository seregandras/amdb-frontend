import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchMovieComponent } from './movies/search-movie/search-movie.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './utils/auth/signup/signup.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { SigninComponent } from './utils/auth/signin/signin.component';
import { AuthGuard } from './utils/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'fooldal', pathMatch: 'full' },
  { path: 'fooldal', component: FooldalComponent }, /*, canActivate: [AuthGuard] }, */
  { path: 'movie', component: MoviesComponent },
  { path: 'add', component: CreateMovieComponent },
  { path: 'findbyname', component: SearchMovieComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
