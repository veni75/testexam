import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers$: Observable<Customer[]> = this.customerService.getAll();
  constructor(
    private customerService: CustomerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(customer: Customer): void {
    if (!confirm("Are you sure?")) {
      return;
    }
    this.customerService.remove(customer).subscribe(
      p => this.customers$ = this.customerService.getAll()
    );
  }

  onUpdate(customer: Customer) {
    
    this.customerService.update(customer).subscribe(
      p => this.customers$ = this.customerService.getAll()
    );
  }
}
