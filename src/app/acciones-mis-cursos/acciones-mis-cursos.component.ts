import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../services/cursos-service';
import { NavbarService } from '../services/nav-bar-service';
import { UsersCoursesService } from '../services/users-courses-service';

@Component({
  selector: 'app-acciones-mis-cursos',
  templateUrl: './acciones-mis-cursos.component.html',
  styleUrls: ['./acciones-mis-cursos.component.css']
})
export class AccionesMisCursosComponent implements OnInit {

  model= []
  modelFilter=[]
  busquedaInput=""
  idUser='';
  constructor(
    public NavBarService: NavbarService,
    public cursosService: CursosService,
    public userCoursesService: UsersCoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.NavBarService.show()
    if (localStorage.getItem("loggedIn")=="true"){
      this.idUser = this.activatedRoute.snapshot.paramMap.get('id');
      
    this.userCoursesService.getUserCourseByID(this.idUser).subscribe(
      data => this.registerCursos(data),
      error => console.error(error.statusText)
    );
    }
  }

  
  addCourse(){
    this.router.navigateByUrl('/clasesUsuario/Crear/'+this.idUser+'/0');
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
