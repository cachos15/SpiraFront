import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionesMisCursosComponent } from './acciones-mis-cursos/acciones-mis-cursos.component';
import { AccionesCursosComponent } from './admin/acciones-cursos/acciones-cursos.component';
import { AccionesUsuarioComponent } from './admin/acciones-usuario/acciones-usuario.component';
import { ListarUsuariosComponent } from './admin/listar-usuarios/listar-usuarios.component';
import { UserCourseComponent } from './admin/user-course/user-course.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'accionesCursos/:accion/:id', component: AccionesCursosComponent },
  { path: 'accionesUsuario/:accion/:id', component: AccionesUsuarioComponent },
  { path: 'clasesUsuario/:accion/:idUser/:isCourse', component: UserCourseComponent },
  { path: 'usuarios', component: ListarUsuariosComponent },
  { path: 'cursos', component: ListarCursosComponent },
  { path: 'misCursos/:id', component: AccionesMisCursosComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
