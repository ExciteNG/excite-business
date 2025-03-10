import React from "react";

export interface ParamsLinkProp {
  distributorid: string |string[];
  subdistributor: string |string[];
  subdistributorid: string |string[];
  retailer: string |string[];
}
export interface DisList {
  name: string;
  lastModified: string;
  location: string;
  category: string;
  performance: string;
  id: string;
};
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
};

export interface InventoryProps {
  Product: string;
  EntryD: string;
  BatchID: string;
  QuantityS: number;
  UnitP: number;
  // AmountS: number;
  quantityS: number;
  // AmountSold: number;
  QuantityR: number;
  // remainingA: number;
}
