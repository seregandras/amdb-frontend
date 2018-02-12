import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { SearchMovieComponent } from './movies/search-movie/search-movie.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiModuleModule } from './api-module/api-module.module';
import { MovieService } from './api-module/service/movie.service';
import { SigninComponent } from './utils/auth/signin/signin.component';
import { SignupComponent } from './utils/auth/signup/signup.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { AuthenticationService } from './utils/auth/auth.service';
import { UserService } from './api-module/service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    SearchMovieComponent,
    CreateMovieComponent,
    SigninComponent,
    SignupComponent,
    FooldalComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    ApiModuleModule,
    NgbModule.forRoot()
  ],
  providers: [MovieService, AuthenticationService, AuthGuard, UserService] ,
  bootstrap: [AppComponent]
})
export class AppModule {}
