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
        title: "Co-Founder / Innovation and Technology Director",
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
      title: "Technical Director",
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
      image: "/youthClimateAction.png",
      href: 'https://www.cityofmadison.com/news/2025-04-24/new-round-of-youth-climate-fund-projects',
    },
   
    {
      id: "2",
      title: "Indigenous Flora Rain Garden",
      excerpt:
        `Our Indigenous Flora Rain Garden project is a community oriented project where we build rain gardens around the city of Madison.
        Rain gardens serve as an attractors for pollinators that keep our ecosystem healthy and to reduce flooding by being an absorbing
        power for our city.`,
      category: "Community",
      image: "/youthClimateAction.png",
      href: 'https://www.cityofmadison.com/news/2025-04-24/new-round-of-youth-climate-fund-projects',
    },
    
  ]

  


export type Project = {
  createdAt: Date | undefined ;
  updatedAt: Date | null | undefined;
  ProjectID: number | undefined;
  Status: string | undefined;
}



export type ClientType = {
    createdAt: Date  | undefined ;
    updatedAt: Date  | null | undefined;
    AgentID: number | undefined;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string | null;
    ClientID: number | undefined;
    DateOfBirth: string;
    CompleteAddressLine: string;
    Status: string | undefined;
    LastInteractionDate: Date | null | undefined;
    FollowUpDate: string | null | undefined;
    LastFourSSN: string | null | undefined;
    LastViewedDate: Date  | null | undefined;

};
