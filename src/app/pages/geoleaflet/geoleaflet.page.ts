import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-geoleaflet',
  templateUrl: './geoleaflet.page.html',
  styleUrls: ['./geoleaflet.page.scss'],
})
export class GeoleafletPage implements OnInit {
  private map;
  
  constructor() { 
    // (Joseba) Solucionar problema de iconos en Leaflet
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }

  ngOnInit() {
  }
  
  // (Joseba) El mapa no se renderiza bien en ngOnInit
  // Ver: https://stackoverflow.com/questions/59790512/leaflet-map-rendering-problems-in-ionic-angular
  ionViewDidEnter(){
    const posMadrid = L.latLng(40.4165, -3.70256);
    this.map = L.map('map', {
      center: posMadrid,
      zoom: 10
    });
    
    L.marker(posMadrid).addTo(this.map)
    .bindPopup('Madrid, Spain')
    .openPopup();

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }
}
