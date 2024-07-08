"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { busSchedule } from "@/config/site";
import { useState } from "react";
import BottomSlider from "./drawer/BottomSlider";
export function CalendarForm() {
    const form = useForm();
    const [start, setStart] = useState("");
    const [busses, setBusses] = useState([]);
    
    function getBusesForDay(from, to, date) {
        const day = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
        // Filter busSchedule to find stations starting from the 'from' station
        const startingFromStation = busSchedule.find(station => station.From === from);
      
        if (!startingFromStation) {
          return [];
        }
      
        const relevantToStations = startingFromStation.To.filter(toStation => {
          return toStation.station === to && toStation.days.includes(day);
        });
      
        return relevantToStations;
      }
    function onSubmit(data) {
        setStart(data.From);
      setBusses(getBusesForDay(data.From, data.To, data.date));
    }
    


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center"
      >
        <FormField
          control={form.control}
          name="From"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormControl>
                <Input
                  size="md"
                  type="text"
                  label="From"
                  placeholder="City"
                  className="focus:bg-transparent active:bg-transparent"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="To"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormControl>
                <Input
                  size="md"
                  type="text"
                  label="To"
                  placeholder="City"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"solid"}
                      className={cn(
                        "w-[240px] pl-3 h-14 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto bg-light-2 text-black p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <BottomSlider start busses={busses} />
      </form>
    </Form>
  );
}
