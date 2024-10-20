import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AcursosComponent } from '../acursos/acursos.component';
import { ContactoComponent } from '../contacto/contacto.component'; 
import { CursosComponent } from '../cursos/cursos.component'; 
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface CatFact {
  fact: string;
  length: number;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule, 
    AcursosComponent, 
    ContactoComponent, 
    CursosComponent, 
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  catFact: string = 'Loading...';

  constructor(private http: HttpClient,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('InicioComponent initialized');
    this.fetchCatFact();
  }

  fetchCatFact(): void {
    console.log('Fetching cat fact...');
    this.http.get<CatFact>('https://cat-fact.herokuapp.com/facts/random')
      .subscribe({
        next: (response) => {
          console.log('Received response:', response);
          this.catFact = response.fact;
        },
        error: (error) => {
          console.error('Error fetching cat fact:', error);
          this.catFact = 'Unable to fetch cat fact at the moment.';
        },
        complete: () => {
          console.log('HTTP request completed');
        }
      });
  }
}