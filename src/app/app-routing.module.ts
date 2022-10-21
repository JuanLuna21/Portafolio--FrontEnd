import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { EditeducacionComponent } from './components/education/editeducacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HysComponent } from './components/hys/hys.component';
import { EditHysComponent } from './components/hys/edit-hys/edit-hys.component';
import { EditProyectComponent } from './components/projects/edit-proyect/edit-proyect.component';
import { NewProyectsComponent } from './components/projects/new-proyects/new-proyects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevo', component: RegistroComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaeducacion', component: NeweducacionComponent },
  { path: 'editeducacion/:id', component: EditeducacionComponent },
  { path: 'nuevoHys', component: HysComponent },
  { path: 'editHys/:id', component: EditHysComponent },
  { path: 'newproyects', component: NewProyectsComponent },
  { path: 'editproyect/:id', component: EditProyectComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
