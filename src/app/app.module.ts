import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

// Material Angular
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoggedInComponent} from './logged-in/logged-in.component';
import {TopArtistsComponent} from './top-artists/top-artists.component';
import {TopTracksComponent} from './top-tracks/top-tracks.component';
import {LoggedRedirectComponent} from './logged-redirect/logged-redirect.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'logged-in', component: LoggedInComponent},
  {path: 'logged-redirect', component: LoggedRedirectComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoggedInComponent,
    TopArtistsComponent,
    TopTracksComponent,
    LoggedRedirectComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
