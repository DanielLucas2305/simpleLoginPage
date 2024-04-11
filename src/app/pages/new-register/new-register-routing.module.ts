import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRegisterComponent } from './new-register.component';

const routes: Routes = [{ path: '', component: NewRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRegisterRoutingModule { }
