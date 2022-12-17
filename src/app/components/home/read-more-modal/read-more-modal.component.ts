import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more-modal',
  templateUrl: './read-more-modal.component.html',
  styleUrls: ['./read-more-modal.component.css']
})
export class ReadMoreModalComponent implements OnInit {
  technologies: any = []
  constructor(
  ) {
    this.technologies = ['Angular','Material Angular', 'Bootstrap', 'Typescript', 'PostgreSQL', 'Springboot']
   }

  ngOnInit(): void {
  }

}
