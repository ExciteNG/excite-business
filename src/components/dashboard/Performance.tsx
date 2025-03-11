"use client"
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReportSalesChart } from './shared/ReportSalesChart';

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

const chartData = [
  { month: "Feb 1", growth: 16 },
  { month: "Feb 2", growth: 5 },
  { month: "Feb 3", growth: 23 },
  { month: "Feb 4", growth: 7 },
  { month: "Feb 5", growth: 29 },
  { month: "Feb 6", growth: 14 },
];

const chartData2 = [
  { month: "January", growth: 186 },
  { month: "February", growth: 305 },
  { month: "March", growth: 237 },
  { month: "April", growth: 73 },
  { month: "May", growth: 209 },
  { month: "June", growth: 214 },
];

const Performance = () => {
     const form = useForm<z.infer<typeof FormSchema>>({
       resolver: zodResolver(FormSchema),
     });

     function onSubmit(data: z.infer<typeof FormSchema>) {
       toast({
         title: "You submitted the following values:",
         description: (
           <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
             <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
           </pre>
         ),
       });
     }

    return (
      <div className='space-y-10'>
        <div className='w-full flex justify-end'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='dob'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel>Filtered Analysis</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {/* <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button type='submit'>Submit</Button> */}
            </form>
          </Form>
        </div>
        <div className='w-full grid grid-cols-6 gap-4'>
          <div className='h-24 p-2 border rounded shadow space-y-3'>
            <div className='w-full text-center '>
              <p className='text-sm font-medium tracking-wide'>
                Last Day sales
              </p>
              <p className='text-lg font-semibold'>N14,300</p>
            </div>
            <p className='text-xs font-semibold text-slate-600'>
              Quantity sold 30
            </p>
          </div>
          <div className='h-24 p-2 border rounded shadow space-y-3'>
            <div className='w-full text-center '>
              <p className='text-sm font-medium tracking-wide'>
                Same day last week
              </p>
              <p className='text-lg font-semibold'>N14,400</p>
            </div>
            <p className='text-xs font-semibold text-slate-600'>
              Quantity sold 30
            </p>
          </div>
          <div className='h-24 p-2 border rounded shadow-lg space-y-3 bg-[#A7CC48]'>
            <div className='w-full text-center '>
              <p className='text-sm font-medium tracking-wide'>Growth</p>
              <p className='text-lg font-semibold'>10%</p>
            </div>
            <p className='text-xs font-semibold text-slate-50'>
              Quantity sold 30
            </p>
          </div>
          <div className='h-24 p-2 border rounded shadow space-y-3'>
            <div className='w-full text-center '>
              <p className='text-sm font-medium tracking-wide'>MTD</p>
              <p className='text-lg font-semibold'>N144,599</p>
            </div>
            <p className='text-xs font-semibold text-slate-600'>
              Quantity sold 30
            </p>
          </div>
          <div className='h-24 p-2 border rounded shadow space-y-3'>
            <div className='w-full text-center '>
              <p className='text-sm font-medium tracking-wide'>
                Last month MTD
              </p>
              <p className='text-lg font-semibold'>N154,400</p>
            </div>
            <p className='text-xs font-semibold text-slate-600'>
              Quantity sold 30
            </p>
          </div>
          <div className='h-24 p-2 border rounded shadow-lg space-y-3 bg-[#A7CC48]'>
            <div className='w-full text-center '>
              <p className='text-sm font-medium tracking-wide'>Growth</p>
              <p className='text-lg font-semibold'>9%</p>
            </div>
            <p className='text-xs font-semibold text-slate-50'>
              Quantity sold 30
            </p>
          </div>
        </div>
        <div>
          <ReportSalesChart
            title={
              "Comparison of last day sale and same day last week sale by date"
            }
            color={'--chart-2'} data={chartData}
          />
        </div>
        <div>
            <ReportSalesChart title={'Comparison of MTD sale and last Month MTD sale by Date'} color={'--chart-1'} data={chartData2} />
        </div>
      </div>
    );
}

export default Performance;





// export function CalendarForm() {
 
//   return (

//   );
// }
