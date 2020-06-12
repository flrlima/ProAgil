import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Evento',
  templateUrl: './Evento.component.html',
  styleUrls: ['./Evento.component.css']
})
export class EventoComponent implements OnInit {
  
  _filtroLista: string;
  get filtroLista(){ return this._filtroLista; }
  set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? 
    this.filtrarEvento(this.filtroLista) : this.eventos;
  }

  eventosFiltrados: any = [];
  eventos: any = [];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;
  corVerdeCorVermelho = 'success';
  exibeOcultaText = 'Exibir';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  filtrarEvento(filtrarPor: string): any {
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
    this.exibeOcultaText = this.exibeOcultaText === 'Exibir' ?
      'Ocultar' : 'Exibir';
  }

  alteraCor() {
    this.corVerdeCorVermelho = this.corVerdeCorVermelho === 'success' ?
      'danger' : 'success';
  }

  getEventos() {
    this.http.get('http://127.0.0.1:5000/weatherForecast').subscribe(
      response => {
        this.eventos = response;
      }, error => {
        console.log(error, "Erro na requisição");
      }
    );
  }

}
