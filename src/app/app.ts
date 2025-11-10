import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './componentes/encabezado/encabezado.component';
import { Inicio } from './componentes/inicio/inicio';
import { Citas } from './componentes/citas/citas';
import { Bitacora } from './componentes/bitacora/bitacora';
import { Perfil } from './componentes/perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, Inicio, Citas, Bitacora, Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('YOLTEC');
}
