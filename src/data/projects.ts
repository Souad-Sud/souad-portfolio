import { Project } from "@/types/type";

export const projects: Project[] = [
  {
    id: 1,
    image: "/projectImages/maiden.jpeg", 
    title: "Blood Maiden",
    description: "Blood maiden is a game website uncover the filthy secrets of a twisted version of Victorian London — a city ruled by an undead king, driven mad by Masonic knowledge of eternal life. There, your reflexes will be tested thousands of times, and you’ll lose most of those battles. But when death comes, don’t despair — it’s the key to your power. And to yourself. ",
    challengesAndLessons:"While working on this project as a front-end developer, I faced several challenges that helped me grow both technically and professionally.One of the main challenges was working with tickets from the backlog and turning them into complete pages while respecting the existing design concept and meeting the expected deadlines. It was sometimes challenging to balance the requirements, the design, and the limited time available. Another challenge was working with Git and multiple branches. I often had to switch between my feature branch, the develop branch, and the main branch in order to test my work, integrate changes, and make sure everything was working correctly. This required me to become more comfortable with Git workflows, merging, and resolving conflicts.The project was also a great example of teamwork. When someone needed help with merging branches or solving a conflict, we worked together to find a solution. This taught me that development is not only about writing code individually, but also about communicating, helping each other, and making sure the whole team can move forward. Working alone on different projects has helped me develop my skills in creating interesting and beautiful user interfaces. However, working as part of a team has made me even more confident and has taught me more about how a professional development process works step by step. Another important improvement was my communication skills. Every day, we had a short stand-up where we spent around five to ten minutes explaining what we had been working on, what we had accomplished, and what we planned to do next. We also had the opportunity to show the results of our work. This helped me become more comfortable explaining my work clearly and communicating with other developers and team members.Overall, this project was challenging, but it was also a valuable learning experience. It helped me improve my front-end development skills, Git knowledge, teamwork, problem-solving abilities, and communication skills. Most importantly, I learned that building a successful project is not only about creating a good interface, but also about working effectively with a team and following a structured development process.",
    link: "https://blood-maiden.vercel.app/",
  },
  {
    id: 2,
    image: "/projectImages/recipe.project.png",
    title: "Recipe App",
    description: "Recipe App is a project focused on fetching data from a recipe API and displaying it. The app allows users to log in, add their own recipes to their profiles, and like recipes.",
    challengesAndLessons:"",
    link: "https://my-recipe-five.vercel.app/",
  },
  {
    id: 3,
    image: "/projectImages/thrall-project.jpeg",
    title: "Thrall Project",
    description:
       "This website is about a game called Thral, a forgotten ghost of a fallen tyrant, awakened by a failed ritual beneath ancient ruins. To reclaim your power and uncover the truth of your downfall, you must possess the living and piece together your past through stolen memories.",
     challengesAndLessons:"Thrall was one of the most challenging projects I worked on because the design went through many changes, including images, typography, colors, layouts, and overall visual style. We spent almost a week discussing how the project should look and work. As developers, we also had to propose design ideas to the designers when we felt that something could be improved or made more coherent, especially regarding image sizes and responsive behavior. The project was also challenging from a teamwork perspective because one of our classmates had to drop out, which meant that we had to take over some of their tickets and continue their work. This required us to adapt quickly and take responsibility for parts of the project that we had not originally planned to work on. Another important challenge was working with someone else's code. Starting your own project and organizing your own code can feel easy because you already know where everything is and why you made certain decisions. However, working on a colleague's code can be much more challenging, especially when you are used to organizing your code in a specific way and adding comments to understand what each part does. This taught me the importance of writing clean, readable, and maintainable code that other developers can understand and continue working on. At the beginning of the project, I also had some difficulties with Git and understanding how to work with different branches such as develop and main, as well as how to merge changes correctly. However, by using commands such as git push, git pull, merging, and resolving conflicts, I became much more comfortable with Git. By the end of the project, I felt that I had really mastered the Git workflow, which gave me much more confidence in working on larger team projects. Overall, Thrall taught me that working in a team is not always about writing your own code. It is also about adapting to changes, understanding other people's code, communicating with designers and developers, taking responsibility when unexpected situations happen, and making sure everyone can contribute to the same project. It made me feel much more confident about working as part of a larger development team.",
       link: "https://thrall-jfpd0sz9f-tobisakjernells-projects.vercel.app/",
  },
  {
    id: 4,
    image: "/projectImages/context-app.jpeg",
    title: "Recipe Finder with Authentication",
    description: "Developed a recipe application using nextJs Context API and a REST API. Users can authenticate, browse recipes by category, save recipes to their profile, remove saved recipes, and securely log out.",
    challengesAndLessons:"",
    link: "https://context-recipe-app.vercel.app/profile",
  },
    {
    id: 5,
    image: "/projectImages/crud-project.jpeg",
    title: "Recipe Finder with Authentication",
    description: "Developed a full-stack CRUD application using Next.js, TypeScript, shadcn/ui, Drizzle ORM, and Neon PostgreSQL. Users can create, edit, and delete records containing a username and email, with all data stored securely in the database.",
     challengesAndLessons:"",
    link: "https://crud-project-ochre-eta.vercel.app/",
  },
  {
    id: 6,
    image: "/projectImages/jsgame.jpeg",
    title: "JavaScript Game",
    description: "Created and developed a JavaScript game using HTML, CSS, and Vanilla JavaScript.",
    challengesAndLessons:"Riddle Quiz Game is a simple and interactive browser game built with HTML, CSS, and Vanilla JavaScript. Players answer a series of randomly selected riddles, with a maximum of three wrong answers allowed. The game keeps track of the player's score, provides feedback after each answer, and allows the player to start a new game after finishing. The project focuses on practicing JavaScript fundamentals, including arrays and objects, functions, loops, conditional logic, user input, DOM manipulation, random question selection, and basic game-state management. ",
    link: "https://assignment-2-js-game.vercel.app/",
  }
  
];
