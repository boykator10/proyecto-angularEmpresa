import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Servicios/service.service';
import { Empresa } from '../Entidad/Empresa';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit{
  constructor(private router : Router, private service : ServiceService ){}


  ngOnInit(): void {
    this.buscar();
  }

  empresa : Empresa = new Empresa();

  buscar(){
    let idEmpresa = localStorage.getItem("id");
    this.empresa.idEmpresa = Number(idEmpresa);
    this.service.buscarC(this.empresa).subscribe(data=>{
      this.empresa = data;
    });

  }

  eliminar(){
    this.service.eliminarC(this.empresa).subscribe(data=>{
      alert("Se Elimino La Empresa "+this.empresa.nombre);
      this.router.navigate(["listar"]);
    });
  }
}
