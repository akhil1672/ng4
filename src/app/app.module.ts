import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './common/pipes/search.pipe';
import { MoviedetailsComponent } from './movies/moviedetails/moviedetails.component';
import { AddmovieComponent } from './movies/addmovie/addmovie.component';
import { UpdatemovieComponent } from './movies/updatemovie/updatemovie.component';
import { MovieactivatorService } from './movies/moviedetails/movieactivator.service';
import { MovieresolverService } from './movies/movieresolver.service';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SearchPipe,
    MoviedetailsComponent,
    AddmovieComponent,
    UpdatemovieComponent
  ],
  imports: [
    FormsModule,ToastrModule.forRoot(),BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'movies',component:MoviesComponent,resolve:[MovieresolverService]},
      {path:'movies/:name',component:MoviedetailsComponent,canActivate:[MovieactivatorService]},
      {path:'updatemovie/:name',component:UpdatemovieComponent},
      {path:'addmovie',component:AddmovieComponent,canDeactivate:['moviedeactivator']},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]),
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService,MovieresolverService,{provide:'moviedeactivator',useValue:isNotSaved},MovieactivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

function isNotSaved(component:AddmovieComponent){
  if(component.isNotSaved){
    return window.confirm("Not Saved.Continue?");
  }
  else
    return true;
}
