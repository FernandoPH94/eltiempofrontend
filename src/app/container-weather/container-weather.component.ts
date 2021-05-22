import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faTemperatureHigh, faTemperatureLow} from '@fortawesome/free-solid-svg-icons';
import {map}  from 'rxjs/operators';
@Component({
  selector: 'app-container-weather',
  templateUrl: './container-weather.component.html',
  styleUrls: ['./container-weather.component.sass']
})

export class ContainerWeatherComponent implements OnInit {

  // datos del tiempo de estos 7 días
  weather: any = []
  // Array con todos los códigos de lista provincias y lista municipios
  codigos: any = []
  //Array municipios activos
  municipios: any = [];
  max: any
  min: any
  page=1;
  pageSize = 2;
  codemunicipio = "";
  codeprovincia = "";
  faTHigh = faTemperatureHigh;
  faTLow = faTemperatureLow;

  constructor(private http: HttpClient) {
    
   }

  ngOnInit(){
    this.http.get('https://mycloud-313514.ew.r.appspot.com/municipio/38023', {responseType: "json"}).subscribe(data => {
      this.weather = data
    });
    this.http.get('https://mycloud-313514.ew.r.appspot.com/municipio/cod', {responseType: "json"}).subscribe(data => {
      this.codigos.push(data)
      console.log(data)
    });
  }

  valorMunicipio(item: any) {
    if(item.cod.toString().length == 1){
      this.codemunicipio = "00"+item.cod.toString()
    }
    else if(item.cod.toString().length == 2){
      this.codemunicipio = "0"+item.cod.toString()
    }
    if(item.codProvincia.toString().length == 1){
      this.codeprovincia = "0"+item.codProvincia.toString()
    }
    this.codeprovincia = item.codProvincia.toString()
    this.http.get('https://mycloud-313514.ew.r.appspot.com/municipio/'+this.codeprovincia+this.codemunicipio, {responseType: "json"}).subscribe(data => {
      this.weather = data
    });
  }

  creacionMunicipios(item: any){
    this.municipios = []
    this.codigos[0].listamunicipios.forEach((element: any) => {
      if(element.codProvincia == item.cod)
        this.municipios.push(element)
    });
  }
}
