import experienceData from '../data/experience';

export type TExperienceData = (typeof experienceData)[number];

export type TSkill = TExperienceData['skills'][number];