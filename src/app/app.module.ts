/* Angular Modules Imports */
import { ErrorHandler, NgModule }                from '@angular/core'
import { BrowserModule }                         from '@angular/platform-browser'
import { AppRoutingModule }                      from './app-routing.module'
import { FormsModule, ReactiveFormsModule }      from '@angular/forms'

/* Bootstrap 5 Imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

/* Angular Material Imports */
import { MatTableModule }          from '@angular/material/table'
import { MatFormFieldModule }      from '@angular/material/form-field'
import { MatInputModule }          from '@angular/material/input'
import { MatCardModule }           from '@angular/material/card'
import { MatSortModule }           from '@angular/material/sort'
import { MatDialogModule }         from '@angular/material/dialog'

/* App Component Imports */
import { AppComponent }            from './app.component'
import { HomeComponent }           from './home/home.component'
import { SearchComponent }         from './search/search.component'
import { HistoryComponent }        from './history/history.component'
import { SearchHitComponent }      from './search/hacker-news-search-result/search-hit.component'
import { LoadingComponent }        from './utility/loading/loading.component'

/* Other Third Party Libraries */
import { FontAwesomeModule }      from '@fortawesome/angular-fontawesome'
import { HttpClientModule }       from '@angular/common/http'
import { createErrorHandler }     from '@sentry/angular';
import { ErrorHandlerComponent }  from './error-handler/error-handler/error-handler.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HistoryComponent,
    SearchHitComponent,
    LoadingComponent,
    ErrorHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatSortModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: createErrorHandler({
        showDialog: false,
      }),
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
