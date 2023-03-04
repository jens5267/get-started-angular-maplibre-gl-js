import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent {
  apiKey: string = '8visfHeaExv87l7IYbF2';
  style: string = `https://api.maptiler.com/maps/streets/style.json?key=${this.apiKey}`;
}
