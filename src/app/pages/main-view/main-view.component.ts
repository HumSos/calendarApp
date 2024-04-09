import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent{
  monday = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  tuesday = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  wednesday = ['Get up'];
  thursday = ['Get up'];
  friday = ['Get up'];

  board: Board = new Board('Test board', [
    new Column('Monday', ["Some random task"]),
    new Column('Tuesday', ["Some random task"]),
    new Column('Wednesday', ["Some random task"]),
    new Column('Thursday', ["Some random task"]),
    new Column('Friday', ["Some random task"])
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

