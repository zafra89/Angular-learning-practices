import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public user: any;

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("Formulario enviado!!!");
    console.log(this.user)
  }
}
