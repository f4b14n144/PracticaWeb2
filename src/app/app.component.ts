import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterModule } from '@angular/router';
import { AcursosComponent } from './pages/acursos/acursos.component'; 
import { InicioComponent } from './pages/inicio/inicio.component'; 
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CommonModule } from '@angular/common';
import { routeComponents } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AcursosComponent,InicioComponent,ContactoComponent,CursosComponent,RouterLink,RouterModule,CommonModule,routeComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticaWeb2';
}
