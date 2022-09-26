import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  sectionHeader!: string;

  constructor() { 
    this.sectionHeader = "Work Experience"
  }

  ngOnInit(): void {
  }

}
