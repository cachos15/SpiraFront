import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListarUsuariosComponent } from './admin/listar-usuarios/listar-usuarios.component';
import { AccionesUsuarioComponent } from './admin/acciones-usuario/acciones-usuario.component';
import { AccionesCursosComponent } from './admin/acciones-cursos/acciones-cursos.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserCourseComponent } from './admin/user-course/user-course.component';
import { AccionesMisCursosComponent } from './acciones-mis-cursos/acciones-mis-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListarUsuariosComponent,
    AccionesUsuarioComponent,
    AccionesCursosComponent,
    ListarCursosComponent,
    NavBarComponent,
    FooterComponent,
    UserCourseComponent,
    AccionesMisCursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
