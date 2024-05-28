interface INameAndDescriptionObject {
  name: string;
  description: string;
}

interface ICourseDetails {
  details_1: INameAndDescriptionObject;
  details_2: INameAndDescriptionObject;
  details_3: INameAndDescriptionObject;
}

interface ICourseProgram {
  program_1: INameAndDescriptionObject;
  program_2: INameAndDescriptionObject;
  program_3: INameAndDescriptionObject;
}

export type TCourse = {
  id: string;
  type: 'courses' | 'master_classes';
  category: string;
  previewText: string;
  totalPlaces: number;
  courseDuration: string;
  description: string;
  images: [string];
  details: ICourseDetails;
  program: ICourseProgram;
  groups: [any];
};
