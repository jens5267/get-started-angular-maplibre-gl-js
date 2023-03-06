import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'tasks/', component: TaskListComponent }];

@NgModule({
  declarations: [TaskListComponent],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [TaskListComponent],
})
export class TasksModule {}
