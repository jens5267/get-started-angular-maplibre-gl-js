import { Component, OnInit } from '@angular/core';
import { Map, Marker, Popup } from 'maplibre-gl';
import { PolygonService } from 'src/app/services/polygon/polygon.service';
import { environment } from 'src/environments/environment';
import { PolygonInstance, MarkerInstance } from 'src/app/interfaces';
import { MarkerService } from 'src/app/services/marker/marker.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  lngLat: [number, number] = [4.89707, 52.377956];
  zoom: number = 14;
  map!: Map;
  polygons: PolygonInstance[] = [];
  style: string = `${environment.MAP_TILER_URL}/maps/basic/style.json?key=${environment.MAP_TILER_API_KEY}`;

  constructor(
    private polygonsService: PolygonService,
    private markersService: MarkerService
  ) {}

  ngOnInit() {
    this.createMap();
    this.getPolygons();
    this.getMarkers();
  }

  getPolygons() {
    this.polygonsService.getPolygons().subscribe((polygons: any) => {
      polygons.forEach((polygon: PolygonInstance) => {
        this.createPolygon(this.map, polygon);
      });
    });
  }

  getMarkers() {
    this.markersService.getMarkers().subscribe((markers: any) => {
      markers.forEach((marker: MarkerInstance) => {
        this.createMarker(marker);
      });
    });
  }

  createMap() {
    this.map = new Map({
      container: 'map',
      style: this.style,
      center: this.lngLat,
      zoom: 14.0,
    });
  }

  createMarker(marker: MarkerInstance) {
    new Marker()
      .setLngLat([marker.longitude, marker.latitude])
      .setPopup(new Popup().setHTML(marker.description))
      .addTo(this.map);
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

  createPolygon(map: Map, polygon: PolygonInstance): void {
    map.on('load', () => {
      this.addSource(map, polygon);
      this.addLayer(map, polygon);
      this.addBoundary(map, polygon);
    });
  }
}
