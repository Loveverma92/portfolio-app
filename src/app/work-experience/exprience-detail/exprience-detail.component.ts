import { Component, Input } from '@angular/core';
import { TExperienceData } from 'src/types/experience';

@Component({
  selector: 'app-exprience-detail',
  templateUrl: './exprience-detail.component.html',
  styleUrls: ['./exprience-detail.component.css']
})
export class ExprienceDetailComponent {
  @Input() detail: TExperienceData | null = null;
}
