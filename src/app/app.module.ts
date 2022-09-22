import { ContactService } from './services/contact.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    JumbotronComponent,
    GreetingComponent,
    ProjectsComponent,
    FooterComponent,
    ContactFormComponent,
    SkillsComponent,
    ResumeComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
