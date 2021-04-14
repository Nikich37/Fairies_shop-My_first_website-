import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FairiesListComponent } from './fairies-list/fairies-list.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { FairiesPageComponent } from './fairies-page/fairies-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FairiesListComponent,
    PersonalAccountComponent,
    FairiesPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FairiesListComponent },
      { path: 'personal-account', component: PersonalAccountComponent },
      { path: 'fairies/:fairyId', component: FairiesPageComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
