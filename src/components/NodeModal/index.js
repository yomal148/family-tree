import React, {useState} from 'react';
import { Button } from "@chakra-ui/button";
import { useDisclosure } from '@chakra-ui/react';
import DefaultText from '../DefaultText/index';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';

import { FormControl, FormLabel, Input} from '@chakra-ui/react';

function NodeModal(props){
    const { isOpen, onOpen, onClose } = useDisclosure();
    // set text for modal to empty string
    const [text, setText] = useState("");
    // handleChange is a function to pass through onChange to handle element changes
    const handleChange = (event) => setText(event.target.value)

    const [number, setNumber] = useState(0);
    function handleNumberChange(event){
        if (event.target.value < 0) event.target.value = 0;
        if (event.target.value > 3) event.target.value = 3;
        setNumber(event.target.value);
    }

    function createButtons(){
        const arr = []
        for(let i = 0; i < number; i++){
            arr.push(i)
        }
        return (
            
            <div>
                {arr.map(() => (
                    //<DefaultText/>
                    console.log("Your mum")
                ))}
            </div>
            
        )
    }

    return(
        <>
        <Button style={{ display: "flex",  width: "100px", height: "100px", 
        backgroundColor: "lightBlue", borderRadius: "50%", textAlign: "center", top: "-1px"
        }} onClick={onOpen}> <p1> {text} </p1>
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Add family member</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                    value = {text}
                    onChange={(handleChange)}
                    />
                    <FormLabel>How many family members do you want to add? Limit: 3</FormLabel>
                    <Input
                    type="number"
                    value = {number}
                    onChange={(handleNumberChange)}
                    />
                    <Button color='blue.500' variant="solid" mr={3} onClick={createButtons}>Add</Button>
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button color='blue.500' variant="solid" mr={3} onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    );
}

export default NodeModal;