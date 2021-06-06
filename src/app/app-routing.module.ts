import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HistoryComponent } from './history/history.component'
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'

const routes: Routes = [

  { path: 'home',    component: HomeComponent    },
  { path: 'search/:query',  component: SearchComponent  },
  { path: 'search',  component: SearchComponent  },
  { path: 'history', component: HistoryComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
