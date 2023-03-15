import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Map, Marker, Popup } from 'maplibre-gl';
import { MatDialog } from '@angular/material/dialog';
import { MarkerInfoComponent } from '../marker-info/marker-info.component';
import { PolygonInstance } from 'src/app/interfaces';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}
  map!: Map;
  lngLat: [number, number] = [4.89707, 52.377956];
  lngLat2: [number, number] = [4.89758, 52.377912];
  zoom: number = 14;
  poly1: PolygonInstance = {
    id: 1,
    name: 'Amsterdam',
    source: '2430cba4-dfeb-4422-90e3-add6fff66aeb',
    color: 'blue',
  };
  style: string = `https://api.maptiler.com/maps/basic/style.json?key=${environment.MAP_TILER_API_KEY}`;
  ngOnInit() {
    const map = this.createMap();
    this.createMarker(this.lngLat);
    this.createMarker(this.lngLat2);

    this.createPolygon(this.map, this.poly1);
  }

  // getPolygons() {
  //   this.polygonService.getPolygons().subscribe((polygons: any) => {
  //     polygons.forEach((polygon: PolygonInstance) => {
  //       console.log('POLYGON');
  //       // this.createPolygon(this.map, polygon);
  //     });
  //   });
  // }

  createMap() {
    this.map = new Map({
      container: 'map',
      style: this.style,
      center: this.lngLat,
      zoom: this.zoom,
    });
  }

  addSource(map: Map, polygon: PolygonInstance): void {
    map.addSource(polygon.name, {
      type: 'geojson',
      data: `${environment.MAP_TILER_URL}/data/${polygon.source}/features.json?key=${environment.MAP_TILER_API_KEY}`,
    });
  }

  addLayer(map: Map, polygon: PolygonInstance): void {
    map.addLayer({
      id: polygon.name,
      type: 'fill',
      source: polygon.name,
      paint: {
        'fill-color': polygon.color,
        'fill-opacity': 0.5,
      },
    });
  }

  addBoundary(map: Map, polygon: PolygonInstance): void {
    map.addLayer({
      id: `${polygon.name}_boundary`,
      type: 'line',
      source: polygon.name,
      paint: {
        'line-color': 'red',
        'line-width': 2,
      },
    });
  }

  createMarker(coordinates: [number, number]) {
    const marker = new Marker()
      .setLngLat(coordinates)
      .setPopup(new Popup().setHTML('<h1>Hello world</h1>'))
      .addTo(this.map);
  }

  createPolygon(map: Map, polygon: PolygonInstance): void {
    map.on('load', () => {
      this.addSource(map, polygon);
      this.addLayer(map, polygon);
      this.addBoundary(map, polygon);
    });
  }

  // createPolygon(map: Map, source: string, source_name: string) {
  //   map.on('load', function () {
  //     map.addSource(`${source_name}`, {
  //       type: 'geojson',
  //       data: `https://api.maptiler.com/data/${source}/features.json?key=${environment.MAP_TILER_API_KEY}`,
  //     });

  //     map.addLayer({
  //       id: `${source_name}`,
  //       type: 'fill',
  //       source: `${source_name}`, // reference the data source
  //       layout: {},
  //       paint: {
  //         'fill-color': '#FFAA01', // orange color fill
  //         'fill-opacity': 0.5,
  //       },
  //     });
  //   });
  // }
}
