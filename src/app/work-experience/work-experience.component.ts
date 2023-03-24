import { Component, OnInit } from '@angular/core';
import { TExperienceData } from 'src/types/experience';
import experienceData from '../../data/experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  experiences: TExperienceData[] = [];

  ngOnInit() {
    this.experiences = experienceData.map(exp => {
      return {
        ...exp,
        skills: exp.skills.sort((a, b) => {
          if (a.is_primary) {
            return -1;
          } else if (b.is_primary) {
            return 1;
          }
  
          return 0;
        }),
      };
    });
      
  }
}
