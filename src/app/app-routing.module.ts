import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsModule } from './modules/maps/maps.module';
import { TasksModule } from './modules/tasks/tasks.module';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'map/', component: MapsModule },
  { path: 'tasks/', component: TasksModule },
  // { path: '**', redirectTo: 'task' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
