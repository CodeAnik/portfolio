export interface Education {
  id: string;
  degree: string;
  shortDegree: string;
  field: string;
  institution: string;
  period: string;
  completed: string;
  result: string;
}

export const education: Education[] = [
  {
    id: 'bsc',
    degree: 'Bachelor of Science',
    shortDegree: 'B.Sc.',
    field: 'Computer Science & Engineering',
    institution: 'University of Asia Pacific',
    period: '2017 – 2021',
    completed: '2021',
    result: 'CGPA 3.02 / 4.00',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate',
    shortDegree: 'HSC',
    field: 'Science',
    institution: 'Sirajganj Police Lines School & College',
    period: '2014 – 2016',
    completed: '2016',
    result: 'GPA 4.00 / 5.00',
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate',
    shortDegree: 'SSC',
    field: 'Science',
    institution: 'Dashuria M. M. High School',
    period: '2009 – 2014',
    completed: '2014',
    result: 'GPA 4.81 / 5.00',
  },
];
