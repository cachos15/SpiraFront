import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuarioCursoModel } from 'src/app/models/usuarioCursoModel';
import { CursosService } from 'src/app/services/cursos-service';
import { NavbarService } from 'src/app/services/nav-bar-service';
import { UsersCoursesService } from 'src/app/services/users-courses-service';

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.css']
})
export class UserCourseComponent implements OnInit {

  model = new usuarioCursoModel()
  cursos = []
  idUser='';
  idCourse=';'
  accion='';

  constructor(
    public cursosService: CursosService,
    public usersCoursesService: UsersCoursesService,
    public NavBarService: NavbarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {

    this.NavBarService.show()
    this.idUser = this.activatedRoute.snapshot.paramMap.get('idUser');
    this.idCourse = this.activatedRoute.snapshot.paramMap.get('idCourse');
    this.accion = this.activatedRoute.snapshot.paramMap.get('accion');

    this.cursosService.getAllCourses().subscribe(
      data => this.registerCursos(data),
      error => console.error(error.statusText)
    );
  }

  registerCursos(data){
    console.log(data)
    if (data.classes !== null && data.classes !== undefined) {
      this.cursos=data.classes
    }
  }


  onSubmit(){
    this.model.id_user=+this.idUser;
    this.model.id_class=+this.model.id_class;
    if (this.accion!=='Editar'){
      console.log(this.model)
    this.usersCoursesService.createUserCourse(this.model).subscribe(
      data => console.log(data),
      error => console.error(error.statusText)
    );
    }
    else{
      this.model.id=+this.idCourse;
      this.usersCoursesService.editUserCourse(this.model).subscribe(
        data => console.log(data),
        error => console.error(error.statusText)
      );
    }
    this.router.navigateByUrl('/usuarios');
  }
}
