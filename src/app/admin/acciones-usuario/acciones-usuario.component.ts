import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { NavbarService } from 'src/app/services/nav-bar-service';
import { UsuariosService } from 'src/app/services/usuarios-service';

@Component({
  selector: 'app-acciones-usuario',
  templateUrl: './acciones-usuario.component.html',
  styleUrls: ['./acciones-usuario.component.css']
})
export class AccionesUsuarioComponent implements OnInit {

  model = new usuarioModel()
  idUser='';
  accion='';

  constructor(
    public usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    public NavBarService: NavbarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
    this.NavBarService.show()
    if (localStorage.getItem("loggedIn")=="true"){
    
    this.idUser = this.activatedRoute.snapshot.paramMap.get('id');
    this.accion = this.activatedRoute.snapshot.paramMap.get('accion');

    if (this.accion=='Editar')
      this.getUserById(this.idUser)
    }
  }

  onSubmit(){
    if (this.accion!=='Editar'){
    this.usuariosService.createUser(this.model).subscribe(
      data => console.log(data),
      error => console.error(error.statusText)
    );
    }
    else{
      this.usuariosService.editUser(this.model).subscribe(
        data => console.log(data),
        error => console.error(error.statusText)
      );
    }
    this.router.navigateByUrl('/usuarios');
  }

  numericOnly(event): boolean { // restrict e,+,-,E characters in  input type number
    // debugger
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      return false;
    }
    else
    return true;

  }

  getUserById(id){
    this.usuariosService.getUserByID(id).subscribe(
      data => this.userRegister(data),
      error => console.error(error.statusText)
    );
  }

  userRegister(data){
    if (data.user !== null && data.user !== undefined) {
      this.model=data.user
    }
  }
}
