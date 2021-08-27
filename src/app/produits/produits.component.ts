import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit.model";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits : Produit[];
  constructor() {
      // produits=new Produit(1,"PC Asus", 1500,new Date('01/01/2021')
       this.produits = [
            {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
            {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
            {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
       ];

     }

  ngOnInit(): void {
  }

}
