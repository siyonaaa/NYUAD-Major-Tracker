export const majors = [
  { name: "Arab Crossroads Studies", type: "Multidisciplinary" },
  { name: "Art and Art History", type: "Arts and Humanities" },
  { name: "Bioengineering", type: "Engineering" },
  { name: "Biology", type: "Science" },
  { name: "Business, Organizations and Society", type: "Social Science" },
  { name: "Chemistry", type: "Science" },
  { name: "Civil Engineering", type: "Engineering" },
  { name: "Computer Engineering", type: "Engineering" },
  { name: "Computer Science", type: "Science" },
  { name: "Economics", type: "Social Science" },
  { name: "Electrical Engineering", type: "Engineering" },
  { name: "Film and New Media", type: "Arts and Humanities" },
  { name: "General Engineering", type: "Engineering" },
  { name: "History", type: "Arts and Humanities" },
  { name: "Interactive Media", type: "Arts and Humanities" },
  { name: "Legal Studies", type: "Multidisciplinary" },
  { name: "Literature and Creative Writing", type: "Arts and Humanities" },
  { name: "Mathematics", type: "Science" },
  { name: "Mechanical Engineering", type: "Engineering" },
  { name: "Music", type: "Arts and Humanities" },
  { name: "Philosophy", type: "Arts and Humanities" },
  { name: "Physics", type: "Science" },
  { name: "Political Science", type: "Social Science" },
  { name: "Psychology", type: "Science" },
  { name: "Social Research and Public Policy", type: "Social Science" },
  { name: "Theater", type: "Arts and Humanities" },
];

export const minors = [
    { name: "African Studies", type: "Multidisciplinary" },
    { name: "Ancient World", type: "Multidisciplinary" },
    { name: "Anthropology", type: "Arts and Humanities" },
    { name: "Applied Mathematics", type: "Science" },
    { name: "Arab Crossroads Studies", type: "Multidisciplinary" },
    { name: "Arab Music Studies", type: "Multidisciplinary" },
    { name: "Arabic", type: "Arts and Humanities" },
    { name: "Art History", type: "Arts and Humanities" },
    { name: "Art Practice", type: "Arts and Humanities" },
    { name: "Chinese", type: "Arts and Humanities" },
    { name: "Computer Science", type: "Science" },
    { name: "Creative Writing", type: "Arts and Humanities" },
    { name: "Design", type: "Arts and Humanities" },
    { name: "Economics", type: "Social Science" },
    { name: "Engineering", type: "Engineering" },
    { name: "Environmental Studies", type: "Multidisciplinary" },
    { name: "Film and New Media", type: "Arts and Humanities" },
    { name: "Gender Studies", type: "Arts and Humanities" },
    { name: "Heritage Studies", type: "Multidisciplinary" },
    { name: "History", type: "Arts and Humanities" },
    { name: "Interactive Media", type: "Multidisciplinary" },
    { name: "Legal Studies", type: "Multidisciplinary" },
    { name: "Literature", type: "Arts and Humanities" },
    { name: "Music", type: "Arts and Humanities" },
    { name: "Natural Science", type: "Science" },
    { name: "Peace Studies", type: "Multidisciplinary" },
    { name: "Philosophy", type: "Arts and Humanities" },
    { name: "Political Science", type: "Social Science" },
    { name: "Psychology", type: "Science" },
    { name: "Social Research and Public Policy", type: "Social Science" },
    { name: "Sound and Music Computing", type: "Multidisciplinary" },
    { name: "Theater", type: "Arts and Humanities" },
    { name: "Urbanization", type: "Multidisciplinary"},
];

export interface Course {
  
  name: string;
  credits: number;  
  prerequisites?: string[];  
  major?: string;
  minor?: string;
  'major req'?: boolean;
  'minor req'?: boolean;
  'maj elec'?: boolean;
  'min elec'?: boolean;
}

export const courses = [
  // Computer Science Major Courses
  {
    name: 'Introduction to Computer Science',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': true,
    'minor req': true,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Discrete Mathematics',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': true,
    'minor req': true,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Data Structures',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': true,
    'minor req': true,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Computer Systems Organization',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': true,
    'minor req': true,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Algorithms',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': true,
    'minor req': true,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Software Engineering',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': true,
    'minor req': true,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Computer Networks',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': false,
    'minor req': false,
    'maj elec': false,
    'min elec': false
  },  
  {
    name: 'Operating Systems',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': true,
    'minor req': false,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Research Seminar in Computer Science',
    credits: 2,
    major: 'Computer Science',
    minor: null,
    'major req': true,
    'minor req': false,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Database Systems',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Natural Language Processing',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Algorithmic Foundations of Data Science',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Computational Social Science',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Machine Learning',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Arabic Computational Linguistics',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Computer Security',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Quantum Computing',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Advanced Topics in AI and Machine Learning',
    credits: 4,
    major: 'Computer Science',
    minor: 'Computer Science',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },



  
  {
    name: 'Principles of Microeconomics',
    credits: 4,
    major: 'Economics',
    minor: null,
    'major req': true,
    'minor req': false,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Principles of Macroeconomics',
    credits: 4,
    major: 'Economics',
    minor: null,
    'major req': true,
    'minor req': false,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Intermediate Microeconomics',
    credits: 4,
    major: 'Economics',
    minor: null,
    'major req': true,
    'minor req': false,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Intermediate Macroeconomics',
    credits: 4,
    major: 'Economics',
    minor: null,
    'major req': true,
    'minor req': false,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Econometrics',
    credits: 4,
    major: 'Economics',
    minor: null,
    'major req': true,
    'minor req': false,
    'maj elec': false,
    'min elec': false
  },
  


  {
    name: 'Introduction to Interactive Media',
    credits: 4,
    major: 'Interactive Media',
    minor: 'Interactive Media',
    'major req': true,
    'minor req': true,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Interaction Design Studio',
    credits: 4,
    major: 'Interactive Media',
    minor: 'Interactive Media',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Communications Lab',
    credits: 4,
    major: 'Interactive Media',
    minor: 'Interactive Media',
    'major req': true,
    'minor req': true,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Application Development',
    credits: 4,
    major: 'Interactive Media',
    minor: 'Interactive Media',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Digital Sound Design',
    credits: 4,
    major: 'Interactive Media',
    minor: 'Interactive Media',
    'major req': false,
    'minor req': false,
    'maj elec': true,
    'min elec': true
  },
  {
    name: 'Desert Media Art',
    credits: 4,
    major: 'Interactive Media',
    minor: 'Interactive Media',
    'major req': false,
    'minor req': false,
    'maj elec': false,
    'min elec': true
  },



  // Psychology Minor Courses
  {
    name: 'Introduction to Psychology',
    credits: 4,
    major: 'Psychology',
    minor: 'Psychology',
    'major req': false,
    'minor req': true,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Research Methods in Psychology',
    credits: 4,
    major: null,
    minor: 'Psychology',
    'major req': false,
    'minor req': true,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Cognitive Psychology',
    credits: 4,
    major: 'Psychology',
    minor: 'Psychology',
    'major req': true,
    'minor req': false,
    'maj elec': false,
    'min elec': false
  },
  {
    name: 'Social Psychology',
    credits: 4,
    major: null,
    minor: 'Psychology',
    'major req': false,
    'minor req': false,
    'maj elec': false,
    'min elec': false
  }
]; 