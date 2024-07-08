import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";
  import { Card, CardBody, CardHeader } from "@nextui-org/react";
  import { Button } from "@nextui-org/react";
  import Modal from "./Modal.js"
function BottomSlider({busses, start}) {
  return (
    <Drawer>
          <DrawerTrigger asChild type="submit">
            <Button variant="solid" size="lg" color="danger">
              Submit
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex justify-center">
              <span className="w-32 bg-black h-2 rounded dark:bg-white"></span>
            </div>
            <DrawerHeader>
              <DrawerTitle>BusTicket</DrawerTitle>
              <br />
              {busses?.map((bus, key) => (
                <Card key={key}>
                  <CardHeader className="flex flex-col items-start">
                    <p className="text-lg font-bold">{bus.busName}</p>
                  </CardHeader>
                  <CardBody>
                    <div className="w-6/12 grid grid-cols-3">
                      <div>
                        <h1 className="font-bold">{bus.departure}</h1>
                        <p>{start}</p>
                      </div>
                      <div>{bus.duration}</div>
                      <div>
                        <h1 className="font-bold">{bus.arrival}</h1>
                        <p>{bus.station}</p>
                      </div>
                    </div>
                    <br />
                    <Modal price={bus.price} />
                  </CardBody>
                </Card>
                )
               
              )}
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
  )
}

export default BottomSlider