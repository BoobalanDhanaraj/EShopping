import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formValue!: FormGroup;
  CustomerModelObj: customer = new customer();

  constructor(
    private formBuilder: FormBuilder,
    private api: CustomerService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      customerName: [''],
      email: [''],
      password: [''],
      phoneNo: [''],
    });
  }

  onCustomerSignup() {
    this.CustomerModelObj.customerName = this.formValue.value.customerName;
    this.CustomerModelObj.email = this.formValue.value.email;
    this.CustomerModelObj.password = this.formValue.value.password;
    this.CustomerModelObj.phoneNumber = this.formValue.value.phoneNo;

    this.api.customerSignup(this.CustomerModelObj).subscribe((res) => {
      console.log(res);
    });
  }
}
