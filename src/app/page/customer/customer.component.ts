import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers$ = this.customerService.getAll();
  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }

  onDelete(customer: Customer) {
    this.customerService.delete(customer);
  }
}
