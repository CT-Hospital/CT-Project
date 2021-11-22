import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changepasswordForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.changepasswordForm = new FormGroup({
      oldPassword: new FormControl("Kuldeep",[]),
      newPassword: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }
  onSubmit(){
      console.log(this.changepasswordForm)
  }
}
