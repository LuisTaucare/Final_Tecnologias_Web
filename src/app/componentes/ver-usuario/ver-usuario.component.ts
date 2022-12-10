import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit {
  usuario:any;

  constructor(private usuarioSrv:UsuarioService) { }

  ngOnInit(): void {
    this.obtener_usuarios()
  }
  obtener_usuarios(){
    this.usuarioSrv.obtener_registros().subscribe(
      (response:any)=>{
        this.usuario = response.usuarios;
        console.log(this.usuario)

      },error =>{
        console.log(error)
      } 
    )

  }
}
