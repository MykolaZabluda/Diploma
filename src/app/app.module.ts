import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'angular2-chartjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { Subject1Component } from './pages/subject1/subject1.component';
import { Subject2Component } from './pages/subject2/subject2.component';
import { Subject3Component } from './pages/subject3/subject3.component';
import { QuestionService } from './services/questions.service';
import { CondorsetComponent } from './pages/condorset/condorset.component';
import { BordaComponent } from './borda/borda.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'subject1',
    component: Subject1Component
  },
  {
    path: 'subject2',
    component: Subject2Component
  },
  {
    path: 'subject3',
    component: Subject3Component
  },
  {
    path: 'condorset',
    component: CondorsetComponent
  },
  {
    path: 'borda',
    component: BordaComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ChartModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    Subject1Component,
    Subject2Component,
    Subject3Component,
    CondorsetComponent,
    BordaComponent,
    ResultsComponent,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
