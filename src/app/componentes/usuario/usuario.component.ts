import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  formulario:any;
  registro_enviar ={
    nombre:null,
    apellido:null,
    rut:null,
    correo:null,
    password:null
  }
  constructor(private fb:FormBuilder, private serviceFormulario:UsuarioService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      rut:['',Validators.required],
      correo:['',Validators.required],
      password:['',Validators.required],
      
   
    });
  }

  get formularioReactivo(){
    return this.formulario.controls;   
  }

  enviarDatos(){
    this.registro_enviar.nombre = this.formularioReactivo.nombre.value
    this.registro_enviar.apellido = this.formularioReactivo.apellido.value
    this.registro_enviar.correo = this.formularioReactivo.correo.value
    this.registro_enviar.password = this.formularioReactivo.password.value
   
    
    this.serviceFormulario.crear_datosFormulario(this.registro_enviar).subscribe(
      (response:any)=>{
        if(response.usuario){
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
