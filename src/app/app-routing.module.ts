import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './modules/maps/maps/maps.component';

const routes: Routes = [
  { path: '', redirectTo: 'task', pathMatch: 'full' },
  { path: 'map/', component: MapsComponent },
  // { path: '**', redirectTo: 'task' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
