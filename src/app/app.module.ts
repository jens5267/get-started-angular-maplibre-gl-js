import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MapsModule } from './modules/maps/maps.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, NgxMapLibreGLModule, MapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
