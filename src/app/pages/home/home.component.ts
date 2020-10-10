import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nombre: string = 'Nombre Usuario';

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }

  cambiarNombre() {
    this.nombre = "José Luis";
    this.dataService.nombreUsuario = this.nombre;
  }

  hijoCambioNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
    this.dataService.nombreUsuario = nuevoNombre;
  }
}
