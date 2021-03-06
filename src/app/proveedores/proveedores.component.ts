import { Component, OnInit } from '@angular/core';
import {Proveedor} from '../proveedor'
import { FormsModule } from '@angular/forms';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-Proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedor:Proveedor={
  id:1,
  name:'Ernesto'
  };

  selectedProveedor?:Proveedor;
  proveedores:Proveedor[];

  constructor(private datosProveedor:ProveedorService)
   {

   }

  ngOnInit(): void {

  this.datosProveedor.getProveedores().subscribe((data:any[])=>{

  console.log(data);
  this.proveedores=data;

  })
 }

 onSelect (proveedor:Proveedor): void {
 this.selectedProveedor=proveedor;
 }

}
