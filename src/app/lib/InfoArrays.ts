export interface TeamMember {
    id: string;
    name: string;
    title: string;
    image: string; // URL for the team member's portrait
  }
  
  // Array of team members
  export const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Pallav Regmi",
      title: "Co-Founder / Executive Director",
      image: "Pallav_Regmi.jpeg"
    },
    {
      id: "2",
      name: "Aakash Paneru",
      title: "Co-Founder / Operations Director",
      image: "Aakash_Paneru.jpeg"
    },
    {
      id: "3",
      name: "Pranab Adhikari",
        title: "Co-Founder / Technology Director",
      image: "/Pranab_Adhikari.jpeg"
      },
          {
      id: "4",
      name: "Amita Gaire",
      title: "Secretary",
      image: "/Amita_Gaire.jpeg"
    },
    {
      id: "5",
      name: "Sahaj Dahal",
      title: "Co-Founder / Innovation Director",
      image: "/Sahaj_Dahal.jpeg"
    },
    {
      id: "6",
      name: "Parwat Regmi",
      title: "Treasurer",
      image: "/Parwat_Regmi.jpeg"
    },
  ];



//   PROJECT POSTS 

export interface ProjectPost {
    id: string
    title: string
    excerpt: string
    category: "Tech" | "Research" | "Community" | "Partnership"
    image: string
    href: string
  }
  
 export const projectPosts: ProjectPost[] = [
    {
      id: "1",
      title: "Energy Tracker",
      excerpt:
        `The PlanetPatch energy tracker is a tool to inform residents about energy, renewables, and how they can take action.`,
      category: "Tech",
      image: "/project_assets/e_tracker_dark.png",
      href: '/projects/energy-tracker',
    },
   
    {
   id: "2",
    title: "Indigenous Flora Rain Garden",
    excerpt: `Our Indigenous Flora Rain Garden project is a community oriented project where we build rain gardens around the city of Madison. Rain gardens serve as an attractors for pollinators that keep our ecosystem healthy and to reduce flooding by being an absorbing power for our city.`,
    category: "Community",
    // Correctly assigned as a string
    image: '/rain-garden.jpg',
    href: '/projects/rain-garden',
    },
    
  ]

  


export type Project = {
  createdAt: Date | undefined ;
  updatedAt: Date | null | undefined;
  ProjectID: number | undefined;
  Status: string | undefined;
}
