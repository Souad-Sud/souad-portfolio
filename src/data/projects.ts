import { Project } from "@/types/type";

export const projects: Project[] = [
  {
    id: 1,
    image: "/projectImages/maiden.jpeg", 
    title: "Blood Mainden",
    description: "Blood maiden is a game website uncover the filthy secrets of a twisted version of Victorian London — a city ruled by an undead king, driven mad by Masonic knowledge of eternal life. There, your reflexes will be tested thousands of times, and you’ll lose most of those battles. But when death comes, don’t despair — it’s the key to your power. And to yourself.",
    link: "https://blood-maiden.vercel.app/",
  },
  {
    id: 2,
    image: "/projectImages/recipe-project.jpeg",
    title: "Recipe App",
    description: "Recipe App is a project focused on fetching data from a recipe API and displaying it. The app allows users to log in, add their own recipes to their profiles, and like recipes.",
    link: "https://my-recipe-five.vercel.app/",
  },
  {
    id: 3,
    image: "/projectImages/thrall-project.jpeg",
    title: "WThrallproject",
    description:
       "This website is about a game called Thral, a forgotten ghost of a fallen tyrant, awakened by a failed ritual beneath ancient ruins. To reclaim your power and uncover the truth of your downfall, you must possess the living and piece together your past through stolen memories.",
    link: "https://thrall-jfpd0sz9f-tobisakjernells-projects.vercel.app/",
  },
  {
    id: 4,
    image: "/projectImages/context-app.jpeg",
    title: "Recipe Finder with Authentication",
    description: "Developed a recipe application using nextJs Context API and a REST API. Users can authenticate, browse recipes by category, save recipes to their profile, remove saved recipes, and securely log out.",
    link: "https://context-recipe-app.vercel.app/profile",
  },
    {
    id: 5,
    image: "/projectImages/crud-project.jpeg",
    title: "Recipe Finder with Authentication",
    description: "Developed a full-stack CRUD application using Next.js, TypeScript, shadcn/ui, Drizzle ORM, and Neon PostgreSQL. Users can create, edit, and delete records containing a username and email, with all data stored securely in the database.",
    link: "https://crud-project-ochre-eta.vercel.app/",
  }
  
];
