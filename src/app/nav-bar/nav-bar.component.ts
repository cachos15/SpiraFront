import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NavbarService } from '../services/nav-bar-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAdministrator=localStorage.getItem("isAdministrator")
  isStudent=localStorage.getItem("isStudent")
  constructor(
    public NavBarService: NavbarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.setItem("loggedIn","false")
    localStorage.setItem("isAdministrator","false")
    localStorage.setItem("isStudent","false")
    this.router.navigateByUrl('/login');
  }
}
