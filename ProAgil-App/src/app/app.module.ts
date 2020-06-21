import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip' ;
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal' ;
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EventoComponent } from './Evento/Evento.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { DateTimeFormatPipePipe } from './_helps/DateTimeFormatPipe.pipe';

import { EventoService } from './_services/evento.service';

@NgModule({
   declarations: [
      AppComponent,
      EventoComponent,
      NavegacaoComponent,
      DateTimeFormatPipePipe
   ],
   imports: [
      BrowserAnimationsModule,
      BrowserModule,
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      FormsModule
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
