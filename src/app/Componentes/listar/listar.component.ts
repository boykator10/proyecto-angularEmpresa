import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Servicios/service.service';
import { Empresa } from '../Entidad/Empresa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  constructor(private router : Router, private service : ServiceService ){}
  empresa !: Empresa[];

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.listarC().subscribe(data=>{
      this.empresa = data;
      console.log("Listar Empresa "+JSON.stringify(data));
    });
  } //Cierra listar

  editar(empresa : Empresa){
    localStorage.setItem("id", empresa.idEmpresa.toString());
    this.router.navigate(["editar"]);
  }

  eliminar(empresa : Empresa){
    localStorage.setItem("id", empresa.idEmpresa.toString());
    this.router.navigate(["eliminar"]);
  }

}
