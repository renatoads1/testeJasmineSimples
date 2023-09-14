import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicumComponent } from './basicum/basicum.component';

const routes: Routes = [
 { path: 'basicum', component: BasicumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
