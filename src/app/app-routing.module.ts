import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/clientes' },
  {
    path: 'clientes',
    component: ListaClientesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'clientes/new',
    component: FormClientesComponent,
    canActivate: [LoginGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '/clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/**
 * 
 * RUTA: /perfil -> Componente: PerfilComponent
 * - Muestra el perfil del usuario logado
 * - en ngOnInit lanza una petición contra el back para recuperar el perfil del usuario logado 
 * - En el menú, colocar un botón perfil que solo se visualice cuando estemos logados
 * 
 */