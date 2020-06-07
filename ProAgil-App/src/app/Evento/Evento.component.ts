import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Evento',
  templateUrl: './Evento.component.html',
  styleUrls: ['./Evento.component.css']
})
export class EventoComponent implements OnInit {

  eventos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos(){
    this.http.get('http://127.0.0.1:5000/weatherForecast').subscribe(
      response =>  {
        this.eventos = response;
      }, error => {
        console.log(error, "Erro na requisição");
      }
    );
  }

}
