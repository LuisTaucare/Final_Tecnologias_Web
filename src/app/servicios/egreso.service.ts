import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  url_backend = environment.url_backend+"/egreso";
  
  constructor(private http:HttpClient) { }

  crear_datosFormulario(datosFormulario:any){
    return this.http.post(`${this.url_backend}/crear-egreso`,datosFormulario);


    console.log(datosFormulario);

  }
  obtener_registros(){
    return this.http.get(`${this.url_backend + '/obtener-egresos'}`);
    
  }
}
