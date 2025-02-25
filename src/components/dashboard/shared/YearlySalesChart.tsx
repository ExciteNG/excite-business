"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartDataType } from "@/constants/dummy";

export const description = "An interactive bar chart";

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#A7CC48",
  },
} satisfies ChartConfig;

export default function YearlySalesChart({
  chartData,
}: {
  chartData: ChartDataType;
}) {
  return (
    <Card className="border-none">
      <CardContent className="p-0 pt-2 border-none">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // minTickGap={32}
              interval={0}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="sales"
                  labelFormatter={(value) => value}
                />
              }
            />
            <Bar dataKey="sales" fill={chartConfig.sales.color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
