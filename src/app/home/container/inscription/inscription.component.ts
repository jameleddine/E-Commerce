import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
user : any = {"name":"","email":"","password":""}
  constructor() { }

  ngOnInit() {
  }

  saveUser(){
    localStorage.setItem('user',JSON.stringify(this.user))
  }
}
