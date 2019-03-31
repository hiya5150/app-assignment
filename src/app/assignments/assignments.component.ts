import { Component, OnInit } from '@angular/core';
import { Assignment} from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  title = 'My Assignments Application';
  enabled = false;
  name: string;
  dueDate: Date;
  formVisible = false;

  selectedAssignment: Assignment;
  assignments: Assignment[] = [{
    name: 'One',
    dueDate: new Date('2018-01-01'),
    submitted: true
  },
    {
      name: 'Two',
      dueDate: new Date('2019-01-01'),
      submitted: false
    }];
  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      this.enabled = true;
    }, 2000);
  }


  setSelected(assignment: Assignment) {
    this.selectedAssignment = assignment;
  }

  onAddBtnClick() {
    this.formVisible = true;
  }

}
