import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps/maps.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
@NgModule({
  declarations: [MapsComponent],
  imports: [CommonModule, NgbModule, NgxMapLibreGLModule],
  exports: [MapsComponent],
})
export class MapsModule {}
