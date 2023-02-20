import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactIndexComponent } from './pages/contact-index/contact-index.component'
import { HomeComponent } from './pages/home/home.component'
import { StatisticComponent } from './pages/statistic/statistic.component'

const routes: Routes = [
{path: '' , component : HomeComponent},
{path: 'contact' , component : ContactIndexComponent},
{path: 'statistic' , component : StatisticComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
