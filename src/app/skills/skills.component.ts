import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  
  sectionHeader!: string;

  constructor() {
    this.sectionHeader = 'Skills';
  }

  ngOnInit(): void {}

  public doughnutChartLabels: string[] = [
    'Java',
    'Spring Boot',
    'Javascript',
    'HTML/CSS',
    'React',
    'Angular',
    'Spring',
    'AWS',
  ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      {
        data: [3, 2, 2, 2, 1, 1, 1, 1],
        label: 'Years',
        backgroundColor: [
          'blue',
          'cyan',
          'green',
          'purple',
          'yellow',
          'orange',
          'coral',
          'red',
        ],
      },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white"
        }
      }
    }
  };
}
