import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 idProduit : any;
 objectProduit : any = {};
  constructor(private ac : ActivatedRoute, private http : HttpClient,private route : Router) {
    this.ac.params.subscribe(data => {
      this.idProduit = data['id'];
      console.log(this.idProduit)
  })
   }

  ngOnInit() {
    this.http.get("http://localhost:3000/produits/"+this.idProduit).subscribe(response =>{
      this.objectProduit = response;
    })
  }

  updateProduct(){
    this.http.put("http://localhost:3000/produits/"+this.idProduit,this.objectProduit).subscribe(data =>{
      this.route.navigate(['/'])
    })
  }

}
