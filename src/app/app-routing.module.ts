import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component'
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component'
import { ContactIndexComponent } from './pages/contact-index/contact-index.component'
import { HomeComponent } from './pages/home/home.component'
import { StatisticComponent } from './pages/statistic/statistic.component'
import { ContactResolveResolver } from './services/contact-resolve.resolver'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactIndexComponent, pathMatch: 'full' },
  {
    path: 'contact/edit/:id',
    component: ContactEditComponent,
    resolve: { contact: ContactResolveResolver }
  },
  {
    path: 'contact/edit', component: ContactEditComponent, pathMatch: 'full'
  },

  {
    pathMatch: 'full',
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolveResolver },

  },
  { path: 'statistic', component: StatisticComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
