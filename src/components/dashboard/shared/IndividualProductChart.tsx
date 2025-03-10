"use client";
import  React, {useState, useMemo} from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


type MeasurdProp = {
  length: number;
  segregate: {
    name: string;
    eachAmount: number;
  }[]
}

// const desktopData = [
  //   { product: "Pepsi", desktop: 186, fill: "var(--color-Pepsi)" },
  //   { product: "Mirinda", desktop: 305, fill: "var(--color-Mirinda)" },
  //   { product: "Mountain", desktop: 237, fill: "var(--color-Mountain)" },
  //   { product: "Teem", desktop: 173, fill: "var(--color-Teem)" },
  //   { product: "Aquafina", desktop: 209, fill: "var(--color-Aquafina)" },
// ];
  
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  Pepsi: {
    label: "Pepsi",
    color: "hsl(var(--chart-1))",
  },
  Mirinda: {
    label: "Mirinda",
    color: "hsl(var(--chart-2))",
  },
  Mountain: {
    label: "Mountain",
    color: "hsl(var(--chart-3))",
  },
  Teem: {
    label: "Teem",
    color: "hsl(var(--chart-4))",
  },
  Aquafina: {
    label: "Aquafina",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function IndividualProductChart({productMeasures, setThisProduct}:{productMeasures:MeasurdProp, setThisProduct: (x:string)=>void}) {
  const id = "pie-interactive";
  const desktopData = productMeasures.segregate.map(measure => {
    return {
      product: measure.name,
      desktop: measure.eachAmount,
      fill: `var(--color-${measure.name})`
    }
  })
  const [activeProduct, setActiveProduct] = useState(desktopData[0].product);

  const activeIndex = useMemo(
    () => desktopData.findIndex((item) => item.product === activeProduct),
    [activeProduct, desktopData]
  );
  const products = useMemo(() => desktopData.map((item) => item.product), [desktopData]);
    //  console.log(products);
    
  return (
    <div data-chart={id} className=' w-fit flex flex-row-reverse'>
      <ChartStyle id={id} config={chartConfig} />
      <div className='flex-row items-start space-y-0 pb-0'>
        <Select value={activeProduct} onValueChange={(value) => {
          setActiveProduct(value);
          setThisProduct(value);
        }}>
          <SelectTrigger
            className='ml-auto h-7 w-[130px] rounded-lg pl-2.5'
            aria-label='Select a value'
          >
            <SelectValue placeholder='Select product' />
          </SelectTrigger>
          <SelectContent align='end' className='rounded-xl'>
            {products.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className='rounded-lg [&_span]:flex'
                >
                  <div
                    className='flex items-center gap-2 text-xs'
                  >
                    <span
                      className='flex h-3 w-3 shrink-0 rounded-sm'
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className='w-[195px] pb-0 rounded-full shadow-lg border border-slate-50'>
        <ChartContainer
          id={id}
          config={chartConfig}
          className='h-[195px] w-full max-w-[250px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={desktopData}
              dataKey='desktop'
              nameKey='product'
              innerRadius={45}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {desktopData[activeIndex].desktop.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          {desktopData[activeIndex].product.toLocaleString()}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}
