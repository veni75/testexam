import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.scss']
})
export class CustomerEditorComponent implements OnInit {

 
  updating: boolean = false;
  
  customer$: Observable<Customer> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (Number(params.id) === 0) {
        return of(new Customer());
      }

      return this.customerService.get(Number(params.id));
    })
  );

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, customer: Customer): void {
    if (customer.id === 0) {
      this.customerService.create(customer).subscribe(
        () => this.router.navigate([''])
      );
    } else {
      this.updating = true;
      this.customerService.update(customer).subscribe(
        () => this.router.navigate([''])
      );
    }    
  }
}