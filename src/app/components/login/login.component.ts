import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formValue!: FormGroup;
  CustomerModelObj: customer = new customer();

  constructor(private formBuilder: FormBuilder, private api: CustomerService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onCustomerLogin() {
    this.CustomerModelObj.Email = this.formValue.value.email;
    this.CustomerModelObj.Password = this.formValue.value.password;

    this.api.customerLogin(this.CustomerModelObj).subscribe((res) => {
      console.log(res);
    });
  }
}
