import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { formulaResult } from 'src/app/services/formula.service';

@Component({
  selector: 'app-camping-party-nights',
  templateUrl: './camping-party-nights.component.html',
  styleUrls: ['./camping-party-nights.component.scss']
})
export class CampingPartyNightsComponent implements OnInit {
  @Input() campingPartyNightsAttendanceStandardField = new FormControl;
  @Input() campingPartyNightsAttendanceSeniorField = new FormControl;
  @Input() campingPartyNightsAttendanceSocialField = new FormControl;
  @Input() campingPartyNightsAttendanceLongStayField = new FormControl;
  @Input() campingPartyNightsRevenueGrossField = new FormControl;
  @Input() attendanceTotal: formulaResult = {result: null, formula: ''};
  @Input() revenueTotal: formulaResult = {result: null, formula: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
