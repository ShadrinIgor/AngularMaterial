import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  public onGoingTraining: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
