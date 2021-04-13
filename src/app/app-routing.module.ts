import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditorComponent } from './page/customer-editor/customer-editor.component';
import { CustomerComponent } from './page/customer/customer.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'customer/:id', component: CustomerEditorComponent },
  { path: '**', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
