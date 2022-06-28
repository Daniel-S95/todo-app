import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAssignment } from 'src/app/models/IAssignment';

@Component({
  selector: 'app-assignment-card',
  templateUrl: './assignment-card.component.html',
  styleUrls: ['./assignment-card.component.css']
})
export class AssignmentCardComponent implements OnInit {

  @Input()
  assignment: IAssignment;

  @Output()
  deleteAssignmentId = new EventEmitter<number>();

  @Output()
  updateAssignmentStatusId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteAssignment() {
    this.deleteAssignmentId.emit(this.assignment.id);
  }

  updateAssignmentStatus() {
    this.updateAssignmentStatusId.emit(this.assignment.id);
  }
}
