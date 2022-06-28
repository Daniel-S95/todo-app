import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';
import { AssignmentsContainerComponent } from './components/assignments-container/assignments-container.component';

const routes: Routes = [
  { path: "add", component: AddAssignmentComponent },
  { path: "", component: AssignmentsContainerComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
