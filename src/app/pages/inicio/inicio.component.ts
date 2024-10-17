import { Component,OnInit,ViewChild,viewChild } from '@angular/core';
import { AcursosComponent } from '../acursos/acursos.component';
import { ContactoComponent } from '../contacto/contacto.component'; 
import { CursosComponent } from '../cursos/cursos.component'; 
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,AcursosComponent,ContactoComponent,CursosComponent,CommonModule,RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  constructor() { }

  
  ngOnInit(): void {
    console.log('InicioComponent initialized');
  }
}


