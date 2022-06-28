import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ICustomer } from 'src/app/models/ICustomer';
import { AssignmentService } from 'src/app/services/assignment.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  allCustomers: ICustomer[];
  selectedCustomer: ICustomer;

  constructor(private _customerService: CustomerService, private _assignmentService: AssignmentService,
    private _snackBar: MatSnackBar, private _router: Router) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  descriptionFormControl = new FormControl('', [Validators.required]);

  getAllCustomers() {
    const allCustomers = this._customerService.getAllCustomers();
    allCustomers.subscribe((customers) => {
      this.allCustomers = customers;
    },
      (error) => {
        this.openSnackBar(error.error, '', 'error-snackbar');
      }
    );
  }

  addNewAssignment() {
    if (!this.descriptionFormControl.value) {
      this.openSnackBar('Please enter a description', '', 'error-snackbar');
      return;
    }

    if (this.descriptionFormControl.value.length > 500) {
      this.openSnackBar('Description is too long', '', 'error-snackbar');
      return;
    }

    if (!this.selectedCustomer) {
      this.openSnackBar('Please select a customer', '', 'error-snackbar');
      return;
    }

    let assignmentData = { customerId: this.selectedCustomer.id, description: this.descriptionFormControl.value };

    const addAssignment = this._assignmentService.addAssignment(assignmentData);
    addAssignment.subscribe(() => {
      this.openSnackBar('Assignment was added successfully!', '', 'success-snackbar');

      setTimeout(() => {
        this._router.navigate(['']);
      }, 2000);
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
