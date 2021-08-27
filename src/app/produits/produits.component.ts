import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../Services/produit.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
   produit !:Produit[];
  constructor(private produitService : ProduitService ) {
    this.produit= produitService.listeProduits();
     }

  ngOnInit(): void {
  }


  supprimerProduit(produit:Produit){
   let conf  =confirm("Êtes vous sûr(e)s de vouloir supprimer le produit "+ produit.nomProduit +"?");
   if(conf){
     this.produitService.deleteproduit(produit);
   }

  }
}
