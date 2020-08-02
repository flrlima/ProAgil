import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ToastrModule } from 'ngx-toastr';
import { EventoService } from './_services/evento.service';

import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { EventoComponent } from './Evento/Evento.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { ContatosComponent } from './contatos/contatos.component';
import { TituloComponent } from './_shared/titulo/titulo.component';

import { DateTimeFormatPipePipe } from './_helps/DateTimeFormatPipe.pipe';


@NgModule({
   declarations: [
      AppComponent,
      EventoComponent,
      NavegacaoComponent,
      DateTimeFormatPipePipe,
      PalestrantesComponent,
      DashboardsComponent,
      ContatosComponent,
      TituloComponent
   ],
   imports: [
      BrowserAnimationsModule,
      BrowserModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      ToastrModule.forRoot({
         timeOut: 10000,
         positionClass: 'toast-bottom-right',
         preventDuplicates: true,
      }),
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      //Opcional
       EventoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
