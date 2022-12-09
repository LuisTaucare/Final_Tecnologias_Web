import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  formulario:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
     descripcion:['',Validators.required],
     precio:['',Validators.pattern('/^[1-9]\d{6,10}$/')],
     id_usuario:['',Validators.required]


    });
  }
  
  get formularioReactivo(){
    return this.formulario.controls;
  }
  botonenviar(){
    console.log(this.formulario.value)
  }
}
