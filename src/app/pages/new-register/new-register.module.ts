import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRegisterRoutingModule } from './new-register-routing.module';
import { NewRegisterComponent } from './new-register.component';


@NgModule({
  declarations: [
    NewRegisterComponent
  ],
  imports: [
    CommonModule,
    NewRegisterRoutingModule
  ]
})
export class NewRegisterModule { }
