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
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      phoneNo: [''],
    });
  }

  onCustomerSignup() {
    this.CustomerModelObj.FirstName = this.formValue.value.firstName;
    this.CustomerModelObj.LastName = this.formValue.value.lastName;
    this.CustomerModelObj.Email = this.formValue.value.email;
    this.CustomerModelObj.Password = this.formValue.value.password;
    this.CustomerModelObj.Phone = this.formValue.value.phoneNo;

    this.api.customerSignup(this.CustomerModelObj).subscribe((res) => {
      console.log(res);
    });
  }
}
