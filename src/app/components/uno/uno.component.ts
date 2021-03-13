import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  nombre:string = "";

  constructor(private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.nombre =  this.rutaActiva.snapshot.params.nombre;

  }

}
