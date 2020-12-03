import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service';
import { NavbarService } from '../services/nav-bar-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public show: boolean;
  public mostrar = "Mostrar";
  public email = ""
  public password = ""
  constructor(
    public NavBarService: NavbarService,
    public loginService: LoginService,
    private router: Router,) { }

  ngOnInit(): void {
    this.NavBarService.hide()
  }

  onSubmit(){
    this.loginService.login(this.email,this.password).subscribe(
      data => this.goToApp(data),
      error => console.error(error.statusText)
    );
  }

  goToApp(data){
    console.log(data)
    if (data.user !== null && data.user !== undefined) {
      if (data.success==true){
        localStorage.setItem("loggedIn","true")
        if (data.user.id_type==1){
        localStorage.setItem("isAdministrator","true")
        localStorage.setItem("isStudent","false")
        this.router.navigateByUrl('/misCursos/'+data.user.id);
        }
        else{
        localStorage.setItem("isStudent","true")
        localStorage.setItem("isAdministrator","false")
        this.router.navigateByUrl('/usuarios');
        }
      }
    }
  }

}
