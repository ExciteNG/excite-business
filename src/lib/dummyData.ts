
interface DisList {
    name: string,
    lastModified: string,
    location: string,
    category: string,
  performance: string,
  id:string
}
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
    location: "New York",
    category: "Main distributor",
    performance: "8%",
    id:'2'
  },
  {
    name: "Mary Johnson",
    lastModified: "10 Mar 2021",
    location: "Los Angeles",
    category: "Main distributor",
    performance: "12%",
    id:'3'
  },
  {
    name: "James Brown",
    lastModified: "05 Dec 2022",
    location: "Chicago",
    category: "Main distributor",
    performance: "7%",
    id:'4'
  },
  {
    name: "Emily Davis",
    lastModified: "18 Jul 2022",
    location: "Houston",
    category: "Main distributor",
    performance: "10%",
    id:'5'
  },
  {
    name: "Michael Wilson",
    lastModified: "25 Aug 2021",
    location: "Miami",
    category: "Main distributor",
    performance: "6%",
    id:'6'
  },
  {
    name: "Linda Miller",
    lastModified: "03 Feb 2023",
    location: "Dallas",
    category: "Main distributor",
    performance: "15%",
    id:'7'
  },
  {
    name: "Robert Taylor",
    lastModified: "11 Nov 2022",
    location: "San Francisco",
    category: "Main distributor",
    performance: "9%",
    id:'8'
  },
  {
    name: "Patricia Anderson",
    lastModified: "28 Jan 2022",
    location: "Seattle",
    category: "Main distributor",
    performance: "14%",
    id:'9'
  },
  {
    name: "William Martinez",
    lastModified: "06 Apr 2023",
    location: "Denver",
    category: "Main distributor",
    performance: "11%",
    id:'10'
  },
  {
    name: "Jessica Thomas",
    lastModified: "20 Sep 2021",
    location: "Boston",
    category: "Main distributor",
    performance: "4%",
    id:'11'
  },
];

const inventoryManagement = [
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
    product: "CocaCola",
    enterDate: "25 Jan 2022",
    unitPrice: "750",
    quantity: "180",
    performance: "7%",
  },
  {
    batch: "20201",
    product: "Sprite",
    enterDate: "10 Feb 2022",
    unitPrice: "650",
    quantity: "220",
    performance: "4%",
  },
  {
    batch: "20202",
    product: "Fanta",
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
    product: "CocaCola",
    enterDate: "25 Mar 2022",
    unitPrice: "740",
    quantity: "170",
    performance: "5%",
  },
  {
    batch: "20208",
    product: "Sprite",
    enterDate: "30 Mar 2022",
    unitPrice: "660",
    quantity: "230",
    performance: "6%",
  },
];


export { distributorList, inventoryManagement };