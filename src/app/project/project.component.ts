import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() reverse: boolean | undefined;
  @Input() project =
    {
      name: "Join",
      tools: "JavaScript|HTML|CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      img: "join.png",
      github: "https://github.com/simonbrost/JOIN",
      demo: "",
    };
}
