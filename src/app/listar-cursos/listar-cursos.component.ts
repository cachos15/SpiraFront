import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from '../services/cursos-service';
import { NavbarService } from '../services/nav-bar-service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  model= []
  modelFilter=[]
  busquedaInput=""
  constructor(
    public NavBarService: NavbarService,
    public cursosService: CursosService,
    private router: Router,) { }

  ngOnInit(): void {
    this.NavBarService.show()
    if (localStorage.getItem("loggedIn")=="true"){
      
    this.cursosService.getAllCourses().subscribe(
      data => this.registerCursos(data),
      error => console.error(error.statusText)
    );
    }
  }

  
  addCourse(){
    this.router.navigateByUrl('/clasesUsuario/Crear/0');
  }
  goToUser(){
    this.router.navigateByUrl('/usuarios');
  }
  addUser(){
    this.router.navigateByUrl('/accionesUsuario/Crear/0');
  }

  editCourse(id){
    this.router.navigateByUrl('/accionesCursos/Editar/'+id);
  }
  registerCursos(data){
    console.log(data)
    if (data.classes !== null && data.classes !== undefined) {
      this.model=data.classes
    }
  }

  searchCursos(){
    let busqueda=''
    busqueda = this.busquedaInput
    this.modelFilter=[]
    this.modelFilter = this.model.filter(element => element.name.toUpperCase().includes(busqueda.toUpperCase()) || element.intensity.toString().toUpperCase().includes(busqueda.toUpperCase()));

  }

}