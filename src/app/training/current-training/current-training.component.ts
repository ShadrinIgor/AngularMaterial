import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StopTrainingComponent} from "./stop-training.component";

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit: EventEmitter<void> = new EventEmitter<void>();
  public progress: number = 0;
  public timer: number | undefined;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
   this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5
      if(this.progress>=100){
        clearInterval(this.timer);
      }
    },1000)
  }

  onStop(): void {
    clearInterval(this.timer);
     const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: this.progress
    });

     dialogRef.afterClosed().subscribe(result => {
       if(result) {
         this.trainingExit.emit()
       }else {
         this.startOrResumeTimer();
       }
     })
  }


}
