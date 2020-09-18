import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './dashboard/content/content.component';


const routes: Routes = [
  { path: '' , component : ContentComponent},
  { path : 'filter-by-year', component : ContentComponent},
  { path : 'filter-by-year-and-launch',  component : ContentComponent},
  { path : 'filter-by-year-and-land',  component : ContentComponent},
  { path : 'filter-by-all',  component : ContentComponent},
  { path : 'filter-by-launch-and-land',  component : ContentComponent},
  { path : 'filter-by-launch',  component : ContentComponent},
  { path : 'filter-by-land',  component : ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
