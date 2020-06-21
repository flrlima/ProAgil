import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../_services/evento.service';
import { Evento } from '../_models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-Evento',
  templateUrl: './Evento.component.html',
  styleUrls: ['./Evento.component.css']
})
export class EventoComponent implements OnInit {

  eventosFiltrados: Evento[];
  eventos: Evento[];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;
  corVerdeCorVermelho = 'info';
  exibeOcultaText = 'Exibir';  
  modalRef: BsModalRef;  
  
  _filtroLista: string;

  constructor(
    private eventoService: EventoService
    , private modalService: BsModalService
  ) { }

  get filtroLista(){ return this._filtroLista; }
  set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? 
    this.filtrarEvento(this.filtroLista) : this.eventos;
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.getAllEventos();
  }

  filtrarEvento(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  exibeOcultaImagem() {
    this.mostrarImagem = !this.mostrarImagem;
    this.alteraCor();
    this.alterarTextMostrarOcultar();
  }

  alterarTextMostrarOcultar() {
    this.exibeOcultaText = this.exibeOcultaText === 'fa fa-eye-slash' ?
      'fa fa-eye' : 'fa fa-eye-slash';
  }

  alteraCor() {
    this.corVerdeCorVermelho = this.corVerdeCorVermelho === 'info' ?
      'outline-info' : 'info';
  }

  getAllEventos() {
    this.eventoService.getAllEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = this.eventos;
      }, error => {
        console.log(error, "Erro na requisição");
      }
    );
  }


}
