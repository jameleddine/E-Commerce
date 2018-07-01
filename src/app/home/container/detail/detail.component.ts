import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {CrudService} from "./../../../services/crud.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [CrudService]
})
export class DetailComponent implements OnInit {
 idProduit : any;
 objectProduit : any = {};
  constructor(private ac : ActivatedRoute, private http : HttpClient,private route : Router,private crud: CrudService) {
    this.ac.params.subscribe(data => {
      this.idProduit = data['id'];
      console.log(this.idProduit)
  })
   }

  ngOnInit() {
    this.crud.getProductById(this.idProduit).subscribe(response =>{
      this.objectProduit = response;
    })
    /*this.http.get("http://localhost:3000/produits/"+this.idProduit).subscribe(response =>{
      this.objectProduit = response;
    })*/
  }

  updateProduct(){
    this.crud.updateProduct(this.idProduit,this.objectProduit).subscribe(data =>{
      this.route.navigate(['/'])
    })
    /*this.http.put("http://localhost:3000/produits/"+this.idProduit,this.objectProduit).subscribe(data =>{
      this.route.navigate(['/'])
    })*/
  }

}
