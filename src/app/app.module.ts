import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './page/customer/customer.component';
import { CustomerEditorComponent } from './page/customer-editor/customer-editor.component';
import { ProductComponent } from './page/product/product.component';
import { ProductEditorComponent } from './page/product-editor/product-editor.component';
import { NavComponent } from './page/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerEditorComponent,
    ProductComponent,
    ProductEditorComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
