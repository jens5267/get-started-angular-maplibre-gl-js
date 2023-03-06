import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps/maps.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

const routes: Routes = [{ path: 'map', component: MapsComponent }];

@NgModule({
  declarations: [MapsComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    NgbModule,
    NgxMapLibreGLModule,
  ],
  exports: [MapsComponent],
})
export class MapsModule {}
