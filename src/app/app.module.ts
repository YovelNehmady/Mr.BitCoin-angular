import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app-root/app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactDetailsComponent,
    StatisticComponent,
    ContactIndexComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
