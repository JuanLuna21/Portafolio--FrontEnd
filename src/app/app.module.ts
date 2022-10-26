import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { BackgroundComponent } from './components/background/background.component';
import { AboutComponent } from './components/about/about.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';

//Experiencia
import { ExperienceComponent } from './components/experience/experience.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';

//Educacion
import { EducationComponent } from './components/education/education.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { EditeducacionComponent } from './components/education/editeducacion.component';

//Login
import { RegistroComponent } from './components/registro/registro.component';

//HysComponent
import { HysComponent } from './components/hys/hys.component';
import { NuevoHysComponent } from './components/hys/nuevo-hys/nuevo-hys.component';
import { EditHysComponent } from './components/hys/edit-hys/edit-hys.component';
import { NewProyectsComponent } from './components/projects/new-proyects/new-proyects.component';
import { EditProyectComponent } from './components/projects/edit-proyect/edit-proyect.component';
import { AboutEditComponent } from './components/about/about-edit/about-edit.component';
import { AboutNewComponent } from './components/about/about-new/about-new.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    BackgroundComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    RegistroComponent,
    HysComponent,
    NuevoHysComponent,
    EditHysComponent,
    NewProyectsComponent,
    EditProyectComponent,
    AboutEditComponent,
    AboutNewComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AlifeFileToBase64Module,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
