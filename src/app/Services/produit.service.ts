import { Injectable } from '@angular/core';
import {Produit} from "../model/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits !: Produit[]; //un tableau de produits


    constructor() {
          this.produits = [
            { idProduit : 1, nomProduit : "PC Asus d'occasion", prixProduit : 3000.600, dateCreation  : new Date("01/14/2011")},
            { idProduit : 2, nomProduit : "Imprimante Epson d'occasion", prixProduit : 450, dateCreation : new Date("12/17/2010")},
            { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
          ];
    }

    listeProduits():Produit[]{
       return this.produits;
    }

   ajoutproduit(produit: Produit){
       this.produits.push(produit);
    }

    deleteproduit(produit: Produit){
        let index=this.produits.indexOf(produit);
        if(index>-1){
          this.produits.splice(index,1);
        }
    }



}
