import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { NavbarService } from 'src/app/services/nav-bar-service';
import { UsersCoursesService } from 'src/app/services/users-courses-service';
import { UsuariosService } from 'src/app/services/usuarios-service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  
  model= []
  modelFilter=[]
  busquedaInput=""
  userCourses = []
  constructor(
    public NavBarService: NavbarService,
    public usuariosService: UsuariosService,
    public usersCourseService : UsersCoursesService,
    private router: Router,) { }

  ngOnInit(): void {
    this.NavBarService.show()
    if (localStorage.getItem("loggedIn")=="true"){
      
    this.usuariosService.getAllUsers().subscribe(
      data => this.registerUsers(data),
      error => console.error(error.statusText)
    );
    }
  }

  getCoursesUsuario(id){

  }
  addCourse(id){
    this.router.navigateByUrl('/clasesUsuario/Crear/'+id+'/0');
  }

  addUser(){
    this.router.navigateByUrl('/accionesUsuario/Crear/0');
  }

  addCurso(){
    this.router.navigateByUrl('/accionesCursos/Crear/0');
  }

  goToCurso(){
    this.router.navigateByUrl('/cursos');

  }

  editUser(id){
    this.router.navigateByUrl('/accionesUsuario/Editar/'+id);
  }
  registerUsers(data){
    if (data.users !== null && data.users !== undefined) {
      this.model=data.users
      this.model.forEach(element => {
        this.getCourses(element.id)
      });
    }
  }

  searchUsuarios(){
    let busqueda=''
    busqueda = this.busquedaInput
    this.modelFilter=[]
    this.modelFilter = this.model.filter(element => element.name.toUpperCase().includes(busqueda.toUpperCase()) || element.mail.toString().toUpperCase().includes(busqueda.toUpperCase()) || element.tel.toUpperCase().includes(busqueda.toUpperCase()));
  }

  getCourses(id){
    this.usersCourseService.getUserCourseByID(id).subscribe(
      data => this.registerCoursesUsers(data,id),
      error => console.error(error.statusText)
    );
  }

  registerCoursesUsers(data,id){
    console.log(data)
    if (data.classes !== null && data.classes !== undefined) {
      this.userCourses[id]=data.classes;
    }

  }
}
