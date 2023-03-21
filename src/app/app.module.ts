import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SneakersComponent } from './sneakers/sneakers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SneakersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule, RouterModule.forRoot([
      { path: '', redirectTo: '/sneakers', pathMatch: 'full' },
      { path: 'sneakers', component: SneakersComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
