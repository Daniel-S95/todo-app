import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAssignment } from '../models/IAssignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private _http: HttpClient) { }

  public getAllAssignments() {
    return this._http.get<IAssignment[]>('http://localhost:3001/assignments');
  }

  public addAssignment(assignmentData: { customerId: number, description: string }) {
    return this._http.post<IAssignment>('http://localhost:3001/assignments', assignmentData);
  }

  public deleteAssignment(assignmentId: number) {
    return this._http.delete<IAssignment>(`http://localhost:3001/assignments/${assignmentId}`);
  }

  public updateAssignmentStatus(assignmentId: number) {
    return this._http.put<IAssignment>(`http://localhost:3001/assignments/${assignmentId}`, {});
  }
}
