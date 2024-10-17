import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AcursosComponent } from './pages/acursos/acursos.component'; 
import { InicioComponent } from './pages/inicio/inicio.component'; 
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CursosComponent } from './pages/cursos/cursos.component';

export const routes: Routes = [
    { path: 'pages/inicio', component: InicioComponent },
    { path: 'pages/cursos', component: CursosComponent },
    { path: 'pages/acursos', component: AcursosComponent },
    { path: 'pages/contacto', component: ContactoComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio' }
  ];
  
  export const routeComponents = [
    InicioComponent,
    CursosComponent,
    AcursosComponent,
    ContactoComponent
  ];