export interface ProjectMember {
  name: string;
  role: string;
  photo: string;
  classLevel?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;           // Broad area (e.g. Science & Technology, Commerce, Humanities)
  subjects: string[];         // Exact CBSE subjects this project covers
  year: string;
  classLevel: string;
  overview: string;
  howItWorks: string;
  hardware: string[];
  techStack: string[];
  badges: string[];
  students: ProjectMember[];
  mentors: ProjectMember[];
  url?: string;                    // ← NEW: Optional showcase link
}
