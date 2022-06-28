import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedTab: string = "Assignments";

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToAddAssignment() {
    this._router.navigate(['add']);
    this.selectedTab = "Add Assignment";
  }

  navigateToAllAssignments() {
    this._router.navigate(['']);
    this.selectedTab = "Assignments";
  }
}
