import { FaRegFileAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { PiSignOutThin } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";
import { TabLinkProps } from "@/types/dashboard";
import { LuNotebookPen } from "react-icons/lu";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



export const useCustomSideBar = ({ userType }: { userType: string }) => {
    
  const superAgent:TabLinkProps[] = [
    {
      tab: "Overview",
      icon: FaRegFileAlt,
      tabLink: "/super-agent",
    },
    {
      tab: "Agents",
      icon: IoPeople,
      tabLink: "/super-agent/agent",
      category: {
        tabLink1: "/super-agent/agent-category/mainagent",
        tabLink2: "/super-agent/agent-category/subagent",
        tabLink3: "/super-agent/agent-category/retailer",
      },
    },
    {
      tab: "Sign Out",
      icon: PiSignOutThin,
      tabLink: "/",
    },
  ];
    const mainAgent = [
      {
        tab: "Overview",
        icon: FaRegFileAlt,
        tabLink: "/main-agent",
      },
      {
        tab: "Agents",
        icon: IoPeople,
        tabLink: "/main-agent/agent",
        category: {
          tabLink1: "#",
          tabLink2: "/main-agent/agent-category/subagent",
          tabLink3: "/main-agent/agent-category/retailer",
        },
      },
      {
        tab: "Inventory Management",
        icon: GiNotebook,
        tabLink: "/main-agent/inventory",
      },
      {
        tab:"Book Keeping",
        icon:LuNotebookPen,
        tabLink:'/main-agent/book-keep'
      },
      {
        tab: "Sign Out",
        icon: PiSignOutThin,
        tabLink: "/",
      },
    ];
    const subAgent = [
      {
        tab: "Overview",
        icon: FaRegFileAlt,
        tabLink: "/sub-agent",
      },
      {
        tab: "Agents",
        icon: IoPeople,
        tabLink: "/sub-agent/agent",
        category: {
          tabLink1: "#",
          tabLink2: "#",
          tabLink3: "/subagent/agent-category/retailer",
        },
      },
      {
        tab: "Inventory Management",
        icon: GiNotebook,
        tabLink: "/sub-agent/inventory",
      },
      {
        tab:"Book Keeping",
        icon:LuNotebookPen,
        tabLink:'/book-keeping'
      },
      {
        tab: "Sign Out",
        icon: PiSignOutThin,
        tabLink: "/",
      },
    ];
    const retailer = [
      {
        tab: "Overview",
        icon: FaRegFileAlt,
        tabLink: "/retailer",
      },
      {
        tab: "Agents",
        icon: IoPeople,
        tabLink: "/retailer/agent",
        category: {
          tabLink1: "#",
          tabLink2: "#",
          tabLink3: "#",
        },
      },
      {
        tab: "Inventory Management",
        icon: GiNotebook,
        tabLink: "/retailer/inventory",
      },
      {
        tab:"Book Keeping",
        icon:LuNotebookPen,
        tabLink:'/book-keeping'
      },
      {
        tab: "Sign Out",
        icon: PiSignOutThin,
        tabLink: "/",
      },
    ];
    
    switch (userType) {
      case "SUPERAGENT": return superAgent;
        break;
      case "MAINAGENT": return mainAgent;
        break;
      case "SUBAGENT": return subAgent;
        break;
      case "RETAILER": return retailer;
        break;
      default: return console.log('Unknown userType?')
  };
  
};
