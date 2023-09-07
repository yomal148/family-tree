import React, {useState} from 'react';
import { Button } from "@chakra-ui/button";
import { useDisclosure } from '@chakra-ui/react';

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

function NodeModal(/*{children}*/){
    // Code to toggle visibility using the useState hook
    /*
    const [visibility, setVisibility] = useState(true);
    function toggleShow(){
        setVisibility(!visibility);
    }
    let buttonText = visibility ? 'Hide Node' : 'Show Node'
    */

    /**
     * The useDisclosure hook returns an object with the following fields
     * isOpen	boolean	 false	If true, it sets the controlled component to its visible state.
     * onOpen	function		Callback function to set a truthy value for the isOpen parameter.
     * onClose	function		Callback function to set a falsy value for the isOpen parameter.
     */
    const { isOpen, onOpen, onClose } = useDisclosure()
    const onSubmit = () => {return}
    // set text for modal to empty string
    const [text, setText] = useState("")
    // handleChange is a function to pass through onChange to handle element changes
    const handleChange = (event) => setText(event.target.value)

    return(
        //<div style={circleStyle} onClick={toggleShow}> {visibility && children} {buttonText} </div>
        <>
        <Button style={{ display: "flex",  width: "100px", height: "100px", 
        backgroundColor: "white", borderRadius: "50%", position: 'absolute',
        top: '10px',}} onClick={onOpen}> Parent Node 
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
                    <FormLabel>Age</FormLabel>
                    <Input
                        value = {text}
                        onChange={(handleChange)}
                    />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button color='blue.500' variant="solid" mr={3} onClick={() => onSubmit(text)} disabled={!text}>
                Add
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    );
}

export default NodeModal