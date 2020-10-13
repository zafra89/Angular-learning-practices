import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {FormComponent} from "./components/form/form.component";

const routes: Routes = [
  /*{ path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }*/
  { path: 'form', component: FormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
