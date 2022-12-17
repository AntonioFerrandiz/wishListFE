import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReadMoreModalComponent } from './read-more-modal/read-more-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openReadMoreDialog(){
    let dialogRef = this.dialog.open(ReadMoreModalComponent)
    
  }
}
