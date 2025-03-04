import { DisList } from "@/types/dashboard";
import { InventoryProps } from "@/types/dashboard";

const distributorList: DisList[] = [
  {
    name: "David Wilson",
    lastModified: "22 Jan 2022",
    location: "Lagos",
    category: "Main distributor",
    performance: "5%",
    id:'1'
  },
  {
    name: "John Smith",
    lastModified: "15 Feb 2023",
    location: "Benue",
    category: "Main distributor",
    performance: "8%",
    id:'2'
  },
  {
    name: "Mary Johnson",
    lastModified: "10 Mar 2021",
    location: "Enugu",
    category: "Main distributor",
    performance: "12%",
    id:'3'
  },
  {
    name: "James Brown",
    lastModified: "05 Dec 2022",
    location: "Abia",
    category: "Main distributor",
    performance: "7%",
    id:'4'
  },
  {
    name: "Emily Davis",
    lastModified: "18 Jul 2022",
    location: "Osun",
    category: "Main distributor",
    performance: "10%",
    id:'5'
  },
  {
    name: "Michael Wilson",
    lastModified: "25 Aug 2021",
    location: "Ondo",
    category: "Main distributor",
    performance: "6%",
    id:'6'
  },
  {
    name: "Linda Miller",
    lastModified: "03 Feb 2023",
    location: "Delta",
    category: "Main distributor",
    performance: "15%",
    id:'7'
  },
  {
    name: "Robert Taylor",
    lastModified: "11 Nov 2022",
    location: "Benin",
    category: "Main distributor",
    performance: "9%",
    id:'8'
  },
  {
    name: "Patricia Anderson",
    lastModified: "28 Jan 2022",
    location: "Lagos",
    category: "Main distributor",
    performance: "14%",
    id:'9'
  },
  {
    name: "William Martinez",
    lastModified: "06 Apr 2023",
    location: "Port-harcourt",
    category: "Main distributor",
    performance: "11%",
    id:'10'
  },
  {
    name: "Jessica Thomas",
    lastModified: "20 Sep 2021",
    location: "Ibadan",
    category: "Main distributor",
    performance: "4%",
    id:'11'
  },
];

const subDistributorList: DisList[] = [
  {
    name: "Amina Bello",
    lastModified: "22 Jan 2022",
    location: "Kano",
    category: "Subdistributor",
    performance: "6%",
    id: "1",
  },
  {
    name: "Chijioke Okafor",
    lastModified: "12 Feb 2023",
    location: "Abuja",
    category: "Subdistributor",
    performance: "8%",
    id: "2",
  },
  {
    name: "Ngozi Eze",
    lastModified: "18 Mar 2022",
    location: "Enugu",
    category: "Subdistributor",
    performance: "10%",
    id: "3",
  },
  {
    name: "Bola Adebayo",
    lastModified: "05 Dec 2022",
    location: "Ogun",
    category: "Subdistributor",
    performance: "7%",
    id: "4",
  },
  {
    name: "Ifeoma Nwachukwu",
    lastModified: "28 Jun 2021",
    location: "Imo",
    category: "Subdistributor",
    performance: "5%",
    id: "5",
  },
  {
    name: "Tunde Adeyemi",
    lastModified: "30 Jul 2022",
    location: "Ekiti",
    category: "Subdistributor",
    performance: "12%",
    id: "6",
  },
  {
    name: "Chuka Obi",
    lastModified: "15 Aug 2022",
    location: "Anambra",
    category: "Subdistributor",
    performance: "9%",
    id: "7",
  },
  {
    name: "Sarah Olayemi",
    lastModified: "03 Jan 2023",
    location: "Lagos",
    category: "Subdistributor",
    performance: "13%",
    id: "8",
  },
  {
    name: "Umar Sani",
    lastModified: "10 Sep 2021",
    location: "Kaduna",
    category: "Subdistributor",
    performance: "8%",
    id: "9",
  },
  {
    name: "Oluwaseun Akinyemi",
    lastModified: "18 Mar 2023",
    location: "Port-Harcourt",
    category: "Subdistributor",
    performance: "11%",
    id: "10",
  },
  {
    name: "Rashida Mustapha",
    lastModified: "22 Oct 2022",
    location: "Jos",
    category: "Subdistributor",
    performance: "7%",
    id: "11",
  },
];


const inventoryManagement:InventoryProps[] = [
  {
    batch: "20199",
    product: "Pepsi",
    enterDate: "22 Jan 2022",
    unitPrice: "700",
    quantity: "200",
    performance: "5%",
  },
  {
    batch: "20199",
    product: "Pepsi",
    enterDate: "22 Jan 2022",
    unitPrice: "700",
    quantity: "200",
    performance: "5%",
  },
  {
    batch: "20200",
    product: "Mountain Dew",
    enterDate: "25 Jan 2022",
    unitPrice: "750",
    quantity: "180",
    performance: "7%",
  },
  {
    batch: "20201",
    product: "Team",
    enterDate: "10 Feb 2022",
    unitPrice: "650",
    quantity: "220",
    performance: "4%",
  },
  {
    batch: "20202",
    product: "Miranda",
    enterDate: "15 Feb 2022",
    unitPrice: "670",
    quantity: "150",
    performance: "6%",
  },
  {
    batch: "20203",
    product: "7UP",
    enterDate: "20 Feb 2022",
    unitPrice: "690",
    quantity: "250",
    performance: "8%",
  },
  {
    batch: "20204",
    product: "Mountain Dew",
    enterDate: "5 Mar 2022",
    unitPrice: "710",
    quantity: "190",
    performance: "5%",
  },
  {
    batch: "20205",
    product: "Mirinda",
    enterDate: "10 Mar 2022",
    unitPrice: "680",
    quantity: "210",
    performance: "6%",
  },
  {
    batch: "20206",
    product: "Pepsi",
    enterDate: "18 Mar 2022",
    unitPrice: "700",
    quantity: "200",
    performance: "7%",
  },
  {
    batch: "20207",
    product: "Lipton",
    enterDate: "25 Mar 2022",
    unitPrice: "740",
    quantity: "170",
    performance: "5%",
  },
  {
    batch: "20208",
    product: "Aquafina",
    enterDate: "30 Mar 2022",
    unitPrice: "660",
    quantity: "230",
    performance: "6%",
  },
];

const miniInventoryList:InventoryProps[] = [
  {
    batch: "20204",
    product: "Mountain Dew",
    enterDate: "5 Mar 2022",
    unitPrice: "710",
    quantity: "190",
    performance: "5%",
  },
  {
    batch: "20205",
    product: "Mirinda",
    enterDate: "10 Mar 2022",
    unitPrice: "680",
    quantity: "210",
    performance: "6%",
  },
];

const product:string[] = [
  'Pepsi', '7UP', 'Mirinda','Mountain', 'Teem', 'Lipton', 'Aquafina'
]

const retailerList: DisList[] = [
  {
    name: "Grace Olamide",
    lastModified: "10 Jan 2023",
    location: "Lagos",
    category: "Retailer",
    performance: "9%",
    id: "1",
  },
  {
    name: "Micheal Ogbu",
    lastModified: "15 Feb 2022",
    location: "Abuja",
    category: "Retailer",
    performance: "12%",
    id: "2",
  },
  {
    name: "Paul Okeke",
    lastModified: "20 Nov 2021",
    location: "Kaduna",
    category: "Retailer",
    performance: "8%",
    id: "3",
  },
  {
    name: "Lola Olamide",
    lastModified: "06 Dec 2022",
    location: "Ogun",
    category: "Retailer",
    performance: "10%",
    id: "4",
  },
  {
    name: "Victor Ajayi",
    lastModified: "22 Jul 2021",
    location: "Enugu",
    category: "Retailer",
    performance: "6%",
    id: "5",
  },
  {
    name: "Oluwatosin Adebanjo",
    lastModified: "11 Mar 2023",
    location: "Ekiti",
    category: "Retailer",
    performance: "15%",
    id: "6",
  },
  {
    name: "Nneka Eze",
    lastModified: "14 Sep 2021",
    location: "Imo",
    category: "Retailer",
    performance: "7%",
    id: "7",
  },
  {
    name: "Chidi Nwosu",
    lastModified: "29 Oct 2022",
    location: "Port-Harcourt",
    category: "Retailer",
    performance: "13%",
    id: "8",
  },
  {
    name: "Fola Akinpelu",
    lastModified: "10 Aug 2022",
    location: "Anambra",
    category: "Retailer",
    performance: "11%",
    id: "9",
  },
  {
    name: "Adewale Abiola",
    lastModified: "19 Mar 2023",
    location: "Jos",
    category: "Retailer",
    performance: "9%",
    id: "10",
  },
  {
    name: "Sofia Ojo",
    lastModified: "12 Nov 2021",
    location: "Kano",
    category: "Retailer",
    performance: "8%",
    id: "11",
  },
];



export { distributorList, inventoryManagement, subDistributorList, retailerList, miniInventoryList, product };