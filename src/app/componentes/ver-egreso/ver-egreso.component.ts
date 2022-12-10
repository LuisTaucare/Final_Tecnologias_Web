import { Component, OnInit } from '@angular/core';
import { EgresoService } from 'src/app/servicios/egreso.service';

@Component({
  selector: 'app-ver-egreso',
  templateUrl: './ver-egreso.component.html',
  styleUrls: ['./ver-egreso.component.css']
})
export class VerEgresoComponent implements OnInit {
    egreso:any;

  constructor(private usuarioSrv:EgresoService) { }

  ngOnInit(): void {
    this.obtener_egresos()
  }
  obtener_egresos(){
    this.usuarioSrv.obtener_registros().subscribe(
      (response:any)=>{
        this.egreso = response.egresos;
        console.log(this.egreso)

      },error =>{
        console.log(error)
      } 
    )

  }
}
