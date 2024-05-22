import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 4,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Our Mission",
        path: "/mission",
        newTab: false,
      },
      {
        id: 42,
        title: "Our Vision",
        path: "/vision",
        newTab: false,
      },
      {
        id: 44,
        title: "Board of Directors",
        path: "/board",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Our Work",
    path: "/whatwedo",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Health",
        path: "/health",
        newTab: false,
      },
      {
        id: 42,
        title: "Education",
        path: "/education",
        newTab: false,
      },
      {
        id: 43,
        title: "Agriculture",
        path: "/agriculture",
        newTab: false,
      },
      {
        id: 44,
        title: "Capacity Development",
        path: "/whatwedo",
        newTab: false,
      },
      {
        id: 45,
        title: "Volunteer Empowerment",
        path: "/whatwedo",
        newTab: false,
      },
      {
        id: 48,
        title: "Skill Empowerment",
        path: "/whatwedo",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Get Involved",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Participate in Program",
        path: "/getinvolved",
        newTab: false,
      },
      {
        id: 42,
        title: "Mission Outreach",
        path: "/blog",
        newTab: false,
      },
      {
        id: 43,
        title: "Drive Change in your Community",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Advocate",
        path: "/blog",
        newTab: false,
      },
      {
        id: 45,
        title: "Volunteer",
        path: "/blog",
        newTab: false,
      },
      {
        id: 46,
        title: "Become a Partner",
        path: "/signin",
        newTab: false,
      },
      // {
      //   id: 47,
      //   title: "Sign Up",
      //   path: "/signup",
      //   newTab: false,
      // },

      // {
      //   id: 48,
      //   title: "sign in ",
      //   path: "/course",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 4,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Impact News and Events",
        path: "/blog",
        newTab: false,
      },
      {
        id: 42,
        title: "Mission Outreach",
        path: "/blog",
        newTab: false,
      },
      {
        id: 43,
        title: "Impact Data ",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Newsletter",
        path: "/signup",
        newTab: false,
      },
      {
        id: 45,
        title: "Upcoming Events",
        path: "/blog",
        newTab: false,
      },
      {
        id: 46,
        title: "Gallery",
        path: "/blog",
        newTab: false,
      },
      {
        id: 47,
        title: "Volunteer Engagement",
        path: "/signup",
        newTab: false,
      },

      {
        id: 48,
        title: " Impact Mission Kits",
        path: "/blog",
        newTab: false,
      },
    ],
  },
];
export default menuData;
