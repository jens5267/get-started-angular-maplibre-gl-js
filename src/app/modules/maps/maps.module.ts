import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps/maps.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { MarkerInfoComponent } from './marker-info/marker-info.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
const routes: Routes = [{ path: 'map', component: MapsComponent }];

@NgModule({
  declarations: [MapsComponent, MarkerInfoComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    NgbModule,
    NgxMapLibreGLModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [MapsComponent],
})
export class MapsModule {}
