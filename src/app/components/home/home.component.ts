import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rutas:Router) { }

  ngOnInit(): void {
  }
  parametroUnoCUno(param:string) {
    this.rutas.navigate(['uno',param])
  }

  parametroDosCDos(param : string) {
    this.rutas.navigate(['dos',param])

  }

  parametro(param:string, param2:string) {
      this.rutas.navigate([param2,param])
  }

}
