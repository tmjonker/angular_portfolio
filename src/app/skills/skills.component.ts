import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  sectionHeader!: string;

  constructor() {
    this.sectionHeader = "Skills";
   }

  ngOnInit(): void {
  }

}
