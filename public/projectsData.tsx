export const projects = [
  {
    name: "Task App",
    description:
      "Created this app to re-familiarize myself with React outside of Next.js. It was also my first time using the combination of Vite, Supabase, and Vercel Serverless Functions. I've used NextJS where Vercel serverless is built-in and had previously used Express for a project, but wanted to see how Serverless Functions compared. I used Supabase as the database as well as the Authenticator. The app utilizes Supabase's Anonymous Sign-in and saves the users session. This allows the user to only interact with their own tasks as long as their own the same device and don't clear their cache. As someone always looking for the ideal task/productivity app, this feels like a project I'll continue to build on and hopefully become my go-to task app.",
    tags: ["React", "Vite", "Supabase", "Vercel"],
    image: "/assets/task_app.png",
    github: "https://github.com/jwbw29/task-app-vite-react-js",
    live: "https://jwbw29-task-app.vercel.app/",
  },
  {
    name: "Small Group",
    description:
      "I created this project for our church small group. I wanted to have a centralized source of information instead of having to rely on Google Sheets, calendars, and emails. I built the project with NextJS, TailwindCSS, and Supabase for both the database and authentication. This project contains features such as: adding, editing, and deleting events; and, authentication logic that will show mock data for a user that is not authenticated. This last feature allows me to demo the site while still keeping our groups information secure.",
    tags: ["NextJS", "TailwindCSS", "Vercel", "Supabase"],
    image: "/assets/smallgroup.png",
    github: "https://github.com/jwbw29/smallgroup_v2",
    live: "https://smallgroup.vercel.app/",
  },
  {
    name: "APOD",
    description:
      "This was a project that was originally created with Webpack. I wanted to convert it to NextJS as it seemed simple enough to make the migration. I eventually decided the project was small enough to just create a new NextJS project and rebuild this from scratch instead of doing a direct migration. Creating the UI components was as easy as expected, but I started running into issues when trying to fetch the NASA API. Previously I was using Axios and I had read that Axios was not the ideal method if you wanted to optimize your NextJS application. After trying and failing several different routes, I ultimately decided to use the Client-Side Rendering to call the API. I'd still like to utilize and learn more about Server-Side Rendering in NextJS so that will be my next project on this application.",
    tags: ["NextJS", "TailwindCSS", "NASA API"],
    image: "/assets/nasa_pic.png",
    github: "https://github.com/jwbw29/nasa-pic-of-the-day",
    live: "https://nasa-pic-of-the-day.vercel.app/",
  },
];
