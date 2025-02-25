import { FaRegFileAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { PiSignOutThin } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";





export const useCustomSideBar = ({ userType }: { userType: string }) => {
    
  const superAgent = [
    {
      tab: "Overview",
      icon: FaRegFileAlt,
      tabLink: "dashboard/super-agent",
    },
    {
      tab: "Agents",
      icon: IoPeople,
      tabLink: "dashboard/super-agent",
    },
    {
      tab: "Sign Out",
      icon: PiSignOutThin,
      tabLink: "dashboard/super-agent",
    },
  ];
    const mainAgent = [
      {
        tab: "Overview",
        icon: FaRegFileAlt,
        tabLink: "dashboard/super-agent",
      },
      {
        tab: "Agents",
        icon: IoPeople,
        tabLink: "dashboard/super-agent",
      },
      {
        tab: "Inventory Management",
        icon: GiNotebook,
        tabLink: "dashboard/super-agent",
      },
      {
        tab: "Sign Out",
        icon: PiSignOutThin,
        tabLink: "dashboard/super-agent",
      },
    ];
    const subAgent = [
      {
        tab: "Overview",
        icon: FaRegFileAlt,
        tabLink: "dashboard/super-agent",
      },
      {
        tab: "Agents",
        icon: IoPeople,
        tabLink: "dashboard/super-agent",
      },
      {
        tab: "Inventory Management",
        icon: GiNotebook,
        tabLink: "dashboard/super-agent",
      },
      {
        tab: "Sign Out",
        icon: PiSignOutThin,
        tabLink: "dashboard/super-agent",
      },
    ];
    const retailer = [
      {
        tab: "Overview",
        icon: FaRegFileAlt,
        tabLink: "dashboard/super-agent",
      },
      {
        tab: "Agents",
        icon: IoPeople,
        tabLink: "dashboard/super-agent",
      },
      {
        tab: "Inventory Management",
        icon: GiNotebook,
        tabLink: "dashboard/super-agent",
      },
      {
        tab: "Sign Out",
        icon: PiSignOutThin,
        tabLink: "dashboard/super-agent",
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
      default: return console.error('Unknown userType?')
    }
};
