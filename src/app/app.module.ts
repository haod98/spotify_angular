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

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'logged-in', component: LoggedInComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoggedInComponent,
    TopArtistsComponent,
    TopTracksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
