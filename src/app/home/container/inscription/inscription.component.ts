import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
user : any = {"name":"","email":"","password":""}
myform : FormGroup;
  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup(
      {namef:new FormControl('',Validators.required),
      emailf:new FormControl('',[Validators.required,Validators.email]),
      passwordf:new FormControl('',[Validators.required,Validators.minLength(4)]),
      cpasswordf:new FormControl('',[Validators.required,Validators.minLength(4)]),
    })
  }

  saveUser(){
    localStorage.setItem('user',JSON.stringify(this.user))
  }
}
