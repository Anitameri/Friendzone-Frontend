import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomepageComponent } from './components/pages/homepage/homepage.component';

import { FooterComponent } from './components/layout/footer/footer.component';

import { LandingComponent } from './components/pages/landing/landing.component' ;
import { EquipoComponent } from './components/pages/equipo/equipo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HeaderLandingComponent } from './components/layout/header-landing/header-landing.component';
import { RouterModule } from '@angular/router';
import { OneEventComponent } from './components/pages/one-event/one-event.component';
import { CreateEventComponent } from './components/pages/create-event/create-event.component';
import { FormsModule } from '@angular/forms';
import { UpdateEventComponent } from './components/pages/update-event/update-event.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { ModalModule } from 'ngx-bootstrap/modal'; // a plugin!


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    LandingComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    LandingComponent,
    HeaderComponent,
    HeaderLandingComponent,
    OneEventComponent,
    CreateEventComponent,
    UpdateEventComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    FormsModule,
    FullCalendarModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
