import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AchievmentsComponent } from "./pages/achievments/achievments.component";
import { Angular101Component } from "./pages/angular101/angular101.component";
import { ResourceComponent  } from "./pages/resource/app.component";
import { BlogComponent } from "./pages/blog/blog.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    children: [],
    component: HomeComponent
  },  
  {
    path: 'note',
    children: [],
    component: ResourceComponent
  },  
  {
    path: 'lock',
    children: [],
    component: AchievmentsComponent
  },
  {
    path: 'help',
    children: [],
    component: Angular101Component
  },
  {
    path: 'blog',
    children: [],
    component: BlogComponent
  },
  {
    path: "**",
    component: HomeComponent
    /* to Do: Fancy PageNotFound 8) */
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
