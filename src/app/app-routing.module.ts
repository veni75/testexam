import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditorComponent } from './page/customer-editor/customer-editor.component';
import { CustomerComponent } from './page/customer/customer.component';
import { ProductEditorComponent } from './page/product-editor/product-editor.component';
import { ProductComponent } from './page/product/product.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },  
  { path: 'customer/:id', component: CustomerEditorComponent },
  { path: 'product', component: ProductComponent },  
  { path: 'product/:id', component: ProductEditorComponent },
  { path: '**', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
