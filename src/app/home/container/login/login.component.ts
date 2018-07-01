import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel : any = JSON.parse(localStorage.getItem('user')) || "";
  constructor(private route : Router) { }

  ngOnInit() {
  }

  login(email,password){
    if(this.userModel.email == email && this.userModel.password == password){
      this.route.navigate(['/'])
    }
    else{
      swal('Email or password invalid !!!');
    }
  }

}
