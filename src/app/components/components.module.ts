import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [NavbarComponent, HijoComponent, FormComponent],
  exports: [
    NavbarComponent,
    HijoComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ComponentsModule { }
