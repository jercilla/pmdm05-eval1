import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-geoleaflet',
  templateUrl: './geoleaflet.page.html',
  styleUrls: ['./geoleaflet.page.scss'],
})
export class GeoleafletPage implements OnInit {
  private map;
  
  constructor() { }

  ngOnInit() {
  }
  
  // (Joseba) No se renderiza bien en ngOnInit
  // Ver: https://stackoverflow.com/questions/59790512/leaflet-map-rendering-problems-in-ionic-angular
  ionViewDidEnter(){
    // this.map = L.map("map").setView([46.879966, -121.726909], 7);

    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //   attribution:
    //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map);

    const posMadrid = L.latLng(40.4165, -3.70256);
    this.map = L.map('map', {
      center: posMadrid,
      zoom: 12
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
