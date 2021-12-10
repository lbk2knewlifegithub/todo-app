import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoPreviewComponent } from './components';
import { TodoPageComponent } from './containers';
import { TodoRoutingModule } from './todo-routing.module';

const COMPONENTS = [TodoPreviewComponent];
const CONTAINERS = [TodoPageComponent];

@NgModule({
  imports: [CommonModule, TodoRoutingModule],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS]
}
)
export class TodoModule {}
