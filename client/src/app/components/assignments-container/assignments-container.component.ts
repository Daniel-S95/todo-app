import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAssignment } from 'src/app/models/IAssignment';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-assignments-container',
  templateUrl: './assignments-container.component.html',
  styleUrls: ['./assignments-container.component.css']
})
export class AssignmentsContainerComponent implements OnInit {

  public allAssignments: IAssignment[];
  public assignment: IAssignment;

  constructor(private _assignmentService: AssignmentService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllAssignments();
  }

  getAllAssignments() {
    const allAssignments = this._assignmentService.getAllAssignments();
    allAssignments.subscribe((assignments) => {
      this.allAssignments = assignments;
    },
      (error) => {
        this.openSnackBar(error.error, '', 'error-snackbar');
      }
    );
  }

  deleteAssignment(id: number) {
    const deleteAssignment = this._assignmentService.deleteAssignment(id);
    deleteAssignment.subscribe(() => {
      this.getAllAssignments();
    },
      (error) => {
        this.openSnackBar(error.error, '', 'error-snackbar');
      }
    );
  }

  updateAssignmentStatus(id: number) {
    const updateAssignmentStatus = this._assignmentService.updateAssignmentStatus(id);
    updateAssignmentStatus.subscribe(() => {
      this.getAllAssignments();
    },
      (error) => {
        this.openSnackBar(error.error, '', 'error-snackbar');
      }
    );
  }

  openSnackBar(message: string, action: string, cssClass: string) {
    this._snackBar.open(message, action, {
      duration: 1500,
      panelClass: [cssClass]
    });
  }
}
