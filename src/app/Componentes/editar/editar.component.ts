import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Servicios/service.service';
import { Empresa } from '../Entidad/Empresa';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
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

  editar(){
    this.service.editarC(this.empresa).subscribe(data=>{
      alert("Se Edito La Empresa "+this.empresa.nombre);
      this.router.navigate(["listar"]);
    });
  }

}
