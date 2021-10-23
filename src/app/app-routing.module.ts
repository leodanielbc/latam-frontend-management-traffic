import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CarFormComponent } from './components/car-form/car-form.component';
import { NavComponent } from './components/nav/nav.component';
import { TrafficFormComponent } from './components/traffic-form/traffic-form.component';

const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: 'traffic',
        pathMatch: 'full',
      },
      {
        path: 'traffic',
        component: TrafficFormComponent
      },
      {
        path: 'car',
        component: CarFormComponent
      },
      
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
