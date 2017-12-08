import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AchievmentsComponent } from './pages/achievments/achievments.component';
import { Angular101Component } from './pages/angular101/angular101.component';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { AppRoutingModule } from './app-routing.module';

import { ApiUrl } from "./pages/resource/api-url-injection-token";
import { ResourceComponent } from "./pages/resource/app.component";
import { ResourceModule } from "./pages/resource/index";

import { environment } from "../environments/environment.prod";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatTabsModule, MatButtonToggleModule, MatExpansionModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule, MatSortModule } from '@angular/material';
import { MatIconModule, MatSidenavModule, MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';
import 'hammerjs';
import { BlogComponent } from './pages/blog/blog.component';


// Charts
import { ChartsModule } from "ng2-charts";
import { ChartsComponent } from './pages/charts/charts.component';
import { ChartBarComponent } from './pages/charts/chart-bar/chart-bar.component';
import { MineComponent } from './pages/mine/mine.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    ResourceComponent,
    AchievmentsComponent,
    Angular101Component,
    BlogComponent,
    ChartsComponent,
    ChartBarComponent,
    MineComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule, 
    
    MatSortModule,

    ChartsModule,
    
    FormsModule, 
    HttpModule,

    MatCheckboxModule, MatSlideToggleModule, MatCardModule, MatListModule, MatButtonModule, MatExpansionModule, MatFormFieldModule, MatInputModule,
    MatIconModule, MatToolbarModule, MatTabsModule, MatSidenavModule, MatButtonToggleModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule,
    
    ResourceModule.forRoot(environment.api),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
