import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css'
})
export class Encabezado {
menu = [
  { label: 'Login', path: '/login' },
    { label: 'Inicio', path: '/inicio' },
    { label: 'Citas', path: '/citas' },
    { label: 'Bitacora', path: '/bitacora' },
    { label: 'Perfil', path: '/perfil' }
  ];
}
