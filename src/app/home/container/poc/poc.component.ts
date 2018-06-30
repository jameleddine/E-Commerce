import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {
  title : string = "hello";
  logo : string = "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
  name : string;
  counter:number = 0;
  email:string;
  phone:number;
  about:string;
  varb : boolean = false;
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
 posts:any = [];
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(resultat=>{
      this.posts = resultat;
    })
  }
  callfunction(){
    alert(this.name);
  }
  increment(){
    this.counter ++;
  }
  decrement(){
    this.counter -- ;
  }
  submit(){
    let data={
      Name:this.name,
      Email:this.email,
      Phone:this.phone,
      About:this.about,
    }
    console.log(data);
    alert(JSON.stringify(data));
    localStorage.setItem('user',JSON.stringify(data));

    this.varb = true;
  }
  annuler(){
    this.name = "";
    this.email = "";
    this.phone = null;
    this.about = "";
  }


}
