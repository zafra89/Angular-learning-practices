import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: string = 'sin nombre';
  @Output() cambioNombreHijo = new EventEmitter<string>();

  /*constructor( private dataService: DataService ) { }*/

  ngOnInit(): void {
  }

  cambiarNombre() {
    this.nombreHijo = 'Sara cosilla ratilla';
    this.cambioNombreHijo.emit( this.nombreHijo );
    /*this.dataService.nombreUsuario = this.nombreHijo;*/
  }
}
