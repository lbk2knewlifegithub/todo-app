import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CheckboxComponent,
  TodoFilterComponent,
  TodoInputComponent,
  TodoPreviewComponent,
  TodoPreviewListComponent
} from './components';
import { TodoPageComponent } from './containers';
import { TodoRoutingModule } from './todo-routing.module';

const COMPONENTS = [
  TodoPreviewComponent,
  TodoInputComponent,
  TodoPreviewListComponent,
  TodoFilterComponent,
  CheckboxComponent,
];

const CONTAINERS = [TodoPageComponent];

@NgModule({
  imports: [CommonModule, TodoRoutingModule, ReactiveFormsModule],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS],
})
export class TodoModule {}
