import { Component, Input, OnInit } from '@angular/core';
import { Insured } from 'app/model/insured.model';

@Component({
  selector: 'app-process-information',
  templateUrl: './process-information.component.html',
  styleUrls: ['./process-information.component.scss']
})
export class ProcessInformationComponent implements OnInit {
  @Input()
  insured:Insured
  constructor() { }

  ngOnInit(): void {
  }

}
