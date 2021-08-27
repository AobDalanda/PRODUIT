import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../Services/produit.service";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
   newProduit= new Produit();
   message!:string;
  constructor(private serviceProduit: ProduitService) {

  }

  ngOnInit(): void {
  }

  addProduit(){
    this.serviceProduit.ajoutproduit(this.newProduit);
    this.message="Produit   "+this.newProduit.nomProduit +" ajouté avec succès";
  }

}
