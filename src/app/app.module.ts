import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoemListComponent } from './components/poems/poem-list/poem-list.component';
import { PoemDetailComponent } from './components/poems/poem-detail/poem-detail.component';
import { LoginComponent } from './components/admin/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PoemListComponent,
    PoemDetailComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
