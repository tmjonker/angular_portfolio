import { DownloadService } from './../services/download.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  sectionHeader!: string;
  downloadService!: DownloadService;

  constructor(downloadService:DownloadService) { 
    this.sectionHeader = "Work Experience"
    this.downloadService = downloadService;
  }

  ngOnInit(): void {
  }

  async downloadResume() {
    let url: string = await this.downloadService.downloadResume();

    window.open(url, "_blank");
  }
}
