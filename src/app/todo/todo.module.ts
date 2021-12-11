import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DragDropModule } from '@angular/cdk/drag-drop';
import * as fromTodos from 'src/app/todo/reducers';
import {
  CheckboxComponent,
  TodoFilterComponent,
  TodoInputComponent,
  TodoPreviewComponent,
  TodoPreviewListComponent,
  TodoStatsComponent
} from './components';
import { TodoPageComponent } from './containers';
import { TodoEffects } from './effects/todo.effects';
import { TodoRoutingModule } from './todo-routing.module';

const COMPONENTS = [
  TodoPreviewComponent,
  TodoInputComponent,
  TodoPreviewListComponent,
  TodoFilterComponent,
  TodoStatsComponent,
  CheckboxComponent,
];

const CONTAINERS = [TodoPageComponent];

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    StoreModule.forFeature(fromTodos.todosFeatureKey, fromTodos.reducers),
    EffectsModule.forFeature([TodoEffects]),
  ],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS],
})
export class TodoModule {}
