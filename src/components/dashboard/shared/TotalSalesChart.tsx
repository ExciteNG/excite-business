"use client";

// import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { IoFlashOutline } from "react-icons/io5";


const chartConfig = {
  agents: {
    label: "agents",
  },
  remaining: {
    label: "remaining",
  },
} satisfies ChartConfig;

export default function TotalSalesChart({
  agents,
  totalAgents,
}: {
  agents: number;
  totalAgents: number;
}) {
  const chartData = [{ agents: agents, remaining: totalAgents - agents }];

  return (
    <Card className=' border-none'>
      <CardContent className='relative flex justify-center items-center pb-0 px-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto h-[250px] w-full max-w-[250px]'
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle'>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className='fill-foreground text-2xl font-bold'
                        >
                          {agents.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className='fill-muted-foreground'
                        >
                          {`of ${totalAgents.toLocaleString()} agents`}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey='remaining'
              fill='#EAECF0'
              stackId='a'
              cornerRadius={5}
              className='stroke-transparent stroke-2'
            />
            <RadialBar
              dataKey='agents'
              stackId='a'
              cornerRadius={5}
              fill='#A1BD58'
              className='stroke-transparent stroke-2'
            />
          </RadialBarChart>
        </ChartContainer>
        <div className='absolute bottom-0'>
          <p className='font-medium text-sm'>
            You have almost reached your limit
          </p>
          <p className='text-xs text-slate-500'>
            You have used 67.5% of your available spots.
          </p>
          <p className='text-xs text-slate-500'>
            Upgrade plan to monitor more distributors.
          </p>
          <div className='w-full flex justify-end mt-2'>
            <Button className='flex items-center shadow' variant={"outline"}>
              <IoFlashOutline />
              <span>Upgrade Plan</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
