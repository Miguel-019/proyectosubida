import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {


  apellido:string = "";


  constructor(private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.apellido =  this.rutaActiva.snapshot.params.apellido;

  }



}
