import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  email!: string;
  password!: string;

  constructor(
    private formBuilder: FormBuilder,
    private api: CustomerService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onCustomerLogin() {
    this.CustomerModelObj.email = this.formValue.value.email;
    this.CustomerModelObj.password = this.formValue.value.password;

    this.api.customerLogin(this.CustomerModelObj).subscribe((res) => {
      console.log(res);
      if (res.isSuccess) {
        this.route.navigate(['/home']);
      } else {
        alert(res.message);
      }
    });
  }

  onNavigateSignup() {
    this.route.navigate(['signup']);
  }
}
