import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EgresoService } from 'src/app/servicios/egreso.service';
@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  formulario:any;
  registro_enviar ={
    descripcion:null,
    precio:null,
    id_usuario:null
  }
  constructor(private fb:FormBuilder, private serviceFormulario: EgresoService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
     descripcion:['',Validators.required],
     precio:['',Validators.pattern(/^([0-9])*$/)],
     id_usuario:['',Validators.required]


    });
  }
  
  get formularioReactivo(){
    return this.formulario.controls;
  }
  
  enviarDatos(){
    this.registro_enviar.descripcion = this.formularioReactivo.descripcion.value
    this.registro_enviar.precio = this.formularioReactivo.precio.value
    this.registro_enviar.id_usuario = this.formularioReactivo.id_usuario.value
    
    this.serviceFormulario.crear_datosFormulario(this.registro_enviar).subscribe(
      (response:any)=>{
        if(response.egreso){
          alert("Datos guardados exitosamente");
        }else{
          console.log(response);
          alert("Datos no registrados");
        }
      },error=>{
        alert("error al registrar")
      }
    )
    console.log(this.registro_enviar)
  }
}
