import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  public marca: string;
  public modelo: string;
  public anio: number;
  public marcas : Array<string>;
  public esVisible: boolean;

  constructor() { 
    this.marca = "Nissan"
    this.modelo = "Skyline"
    this.anio = 2012
    this.marcas = ['Honda', 'Toyota', 'Mazda', 'Nissan']
  }

  ngOnInit() {
  }

  public muestraMarcas() {
    this.esVisible = true;
  }

  public ocultaMarcas() {
    this.esVisible = false;
  }

}
