import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function App({price}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const seats = [];
  for (let i = 1; i <= 15; i++) {
  seats.push({ seatNumber: `s-${i}` });
  }
  console.log(seats);
  const handleOpen = () => {
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button  
            variant="solid" 
            color="danger" 
            onPress={() => handleOpen("blur")}
            className="capitalize"
          >
           {`${price} $`}
          </Button>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {
            (onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Choose Seat</ModalHeader>
              <ModalBody className="flex flex-row flex-wrap">
                {
                  seats?.map((seat,key) => (
                    <div key={key} className="w-8 h-8 flex justify-center items-center text-white dark:text-black bg-black dark:bg-white hover:drop-shadow-lg" >{seat.seatNumber}</div>
                  ))
                }
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
