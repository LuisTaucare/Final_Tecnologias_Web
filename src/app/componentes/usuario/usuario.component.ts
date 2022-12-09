import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  formulario:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      rut:['',Validators.required],
      correo:['',Validators.required],
      password:['',Validators.required]
    });
  }

  get formularioReactivo(){
    return this.formulario.controls;   
  }

  botonEnviar(){
    console.log(this.formulario.value)
  }

}
