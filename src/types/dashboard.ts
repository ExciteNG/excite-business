import React from "react";
export interface DisList {
  name: string;
  lastModified: string;
  location: string;
  category: string;
  performance: string;
  id: string;
}
export interface DashProps {
  width: number;
  title: string;
  matrix: number;
};

export interface TabLinkProps {
  tab: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tabLink: string;
  category?: {
    tabLink1?: string;
    tabLink2?: string;
    tabLink3?: string;
  }
}
