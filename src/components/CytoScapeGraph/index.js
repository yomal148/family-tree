import React, {useState} from 'react';
import { Button } from "@chakra-ui/button";
import { useDisclosure } from '@chakra-ui/react';
import Cytoscape from 'react-cytoscapejs';

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

function Graph(props){
    /**
     * This piece of code uses Chakra hook to open Modal by clicking button.
     * Don't need it for now.
     * 
    const { isOpen, onOpen, onClose } = useDisclosure();
    // set text for modal to empty string
    const [text, setText] = useState("");
    // handleChange is a function to pass through onChange to handle element changes
    const handleChange = (event) => setText(event.target.value)

    const [number, setNumber] = useState(0);
    function handleNumberChange(event){
        if (event.target.value < 0) event.target.value = 0;
        if (event.target.value > 2) event.target.value = 2;
        setNumber(event.target.value);
    }

    const arr = []
    for(let i = 0; i < number; i++){
        arr.push(i)
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
    */

     // State to manage modal visibility
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // State to store data for the clicked node
    const [selectedNodeData, setSelectedNodeData] = useState(null);

    // Function to open the modal and set node data
    const openModal = (nodeData) => {
        setSelectedNodeData(nodeData);
        setModalIsOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedNodeData(null);
        setModalIsOpen(false);
    };

    const graphData = {
        elements: [
            { data: { id: 'one', label: 'Node 1' }, position: { x: 713, y: 158 } },
            { data: { id: 'two', label: 'Node 2' }, position: { x: 595, y: 337 } },
            { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
        ],
    };

    return(
        <>
        {/*<Button style={{ display: "none"}} onClick={onOpen}> <p1> {text} </p1>
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
                    <FormLabel>How many family members do you want to add? Limit: 2</FormLabel>
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
    </Modal>*/}

    <Cytoscape elements={graphData.elements} style={ { width: '600px', height: '600px' } } />
        </>
    );
}

export default Graph;