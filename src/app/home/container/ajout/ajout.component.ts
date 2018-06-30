import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
 name:string;
 categorie:string;
 reference:string;
 prix:string;
 user:string;
  constructor(private http: HttpClient,private route : Router) { }

  ngOnInit() {
  }

  addProduct(){
    let data ={
      name:this.name,
      categorie: this.categorie,
      reference:this.reference,
      prix:this.prix,
      proprietaire:this.user
    }
    this.http.post('http://localhost:3000/produits',data).subscribe(response=>{
      console.log(response);
      this.route.navigate(['/'])
    })
  }
}
