import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit {
  public nombre: String;
  public metros: Number;
  public vegetacion: String;
  public abierto: Boolean;

  constructor() {
    this.nombre = 'Parque natural de caballos';
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
  }

  ngOnInit() {
  }

}
