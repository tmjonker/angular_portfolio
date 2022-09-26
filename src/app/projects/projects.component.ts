import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  sectionHeader!: string;

  constructor() {
    this.sectionHeader = "Projects";
  }

  ngOnInit(): void {}

  images = [
    '../../assets/images/password_manager.png',
    '../../assets/images/pong.png',
    '../../assets/images/food2u.png',
    '../../assets/images/bb1.png',
  ];
}
