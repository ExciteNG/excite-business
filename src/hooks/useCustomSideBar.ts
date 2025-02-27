import { FaRegFileAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { PiSignOutThin } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";
import { TabLinkProps } from "@/types/dashboard";
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
        tabLink1: "/agent-category/mainagent",
        tabLink2: "/agent-category/subagent",
        tabLink3: "/agent-category/retailer",
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
        tabLink: "/super-agent",
      },
      {
        tab: "Agents",
        icon: IoPeople,
        tabLink: "/super-agent/agent",
        category: {
          tabLink1: "/agent-category/subagent",
          tabLink2: "/agent-category/retailer",
          tabLink3: "#",
        },
      },
      {
        tab: "Inventory Management",
        icon: GiNotebook,
        tabLink: "/super-agent",
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
        tabLink: "/super-agent",
      },
      {
        tab: "Agents",
        icon: IoPeople,
        tabLink: "/super-agent/agent",
        category: {
          tabLink1: "/agent-category/retailer",
          tabLink2: "#",
          tabLink3: "#",
        },
      },
      {
        tab: "Inventory Management",
        icon: GiNotebook,
        tabLink: "/super-agent",
      },
      {
        tab: "Sign Out",
        icon: PiSignOutThin,
        tabLink: "/super-agent",
      },
    ];
    const retailer = [
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
          tabLink1: "#",
          tabLink2: "#",
          tabLink3: "#",
        },
      },
      {
        tab: "Inventory Management",
        icon: GiNotebook,
        tabLink: "/super-agent",
      },
      {
        tab: "Sign Out",
        icon: PiSignOutThin,
        tabLink: "/super-agent",
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
