import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent {
  style: string = `https://api.maptiler.com/maps/streets/style.json?key=${environment.MAP_TILER_API_KEY}`;
}
