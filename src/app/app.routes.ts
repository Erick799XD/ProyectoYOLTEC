import { Routes } from '@angular/router';
import { Bitacora } from './componentes/bitacora/bitacora';
import { Citas } from './componentes/citas/citas';
import { Encabezado } from './componentes/encabezado/encabezado.component';
import { Inicio } from './componentes/inicio/inicio';
import { Perfil } from './componentes/perfil/perfil';
import { Login } from './componentes/login/login';

export const routes: Routes = [

    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // redirección inicial
    { path: 'inicio', component: Inicio },
    { path: 'bitacora', component: Bitacora },
    { path: 'encabezado', component: Encabezado },
    { path: 'citas', component: Citas },
    { path: 'perfil', component: Perfil },
    { path: 'login', component: Login },
    { path: '**', redirectTo: '/inicio' } // ruta por defecto si no existe

];
