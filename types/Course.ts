interface INameAndDescriptionObject {
  name: string;
  description: string;
}

export interface ICourseFeatures {
  feature_1: INameAndDescriptionObject;
  feature_2: INameAndDescriptionObject;
  feature_3: INameAndDescriptionObject;
}

export interface ICourseProgram {
  program_1: INameAndDescriptionObject;
  program_2: INameAndDescriptionObject;
  program_3: INameAndDescriptionObject;
}

export type TCourse = {
  id: number;
  type: 'courses' | 'master_classes';
  category: string;
  previewText: string;
  totalPlaces: number;
  courseDuration: string;
  description: string;
  images: string[];
  features: ICourseFeatures;
  program: ICourseProgram;
  groups: any[];
};
