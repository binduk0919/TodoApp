import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const TaskRoutes: Routes = [
  {
    path: '',
    component:TaskComponent
  }
];
@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TaskRoutes)
  ]
})
export class TaskModule { }
