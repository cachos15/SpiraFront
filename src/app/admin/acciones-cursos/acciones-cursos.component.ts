import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cursosModel } from 'src/app/models/cursosModel';
import { CursosService } from 'src/app/services/cursos-service';
import { NavbarService } from 'src/app/services/nav-bar-service';

@Component({
  selector: 'app-acciones-cursos',
  templateUrl: './acciones-cursos.component.html',
  styleUrls: ['./acciones-cursos.component.css']
})
export class AccionesCursosComponent implements OnInit {

  model = new cursosModel()
  idCurso='';
  accion='';

  constructor(
    public cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public NavBarService: NavbarService,
  ) { }

  ngOnInit(): void {
      this.NavBarService.show()
      if (localStorage.getItem("loggedIn")=="true"){
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id');
    this.accion = this.activatedRoute.snapshot.paramMap.get('accion');

    
    if (this.accion=='Editar')
      this.getCursoById(this.idCurso)
    }
    else
    this.router.navigateByUrl('/login');
  }

  onSubmit(){
    this.cursosService.createCourse(this.model).subscribe(
      data => console.log(data),
      error => console.error(error.statusText)
    );
    this.router.navigateByUrl('/cursos');
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

  getCursoById(id){
    this.cursosService.getCursoByID(id).subscribe(
      data => this.cursoRegister(data),
      error => console.error(error.statusText)
    );
  }

  cursoRegister(data){
    console.log(data)
    if (data.class !== null && data.class !== undefined) {
      this.model=data.class
    }
  }

}
