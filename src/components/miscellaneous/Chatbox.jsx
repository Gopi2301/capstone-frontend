import React from 'react'
import { ChatState } from '../../context/chatProvider'
import { Box } from '@chakra-ui/react'
import SingleChat from './singleChat'

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat } = ChatState()
    return (
        <div>
            <Box
                display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
                alignItems="center"
                flexDir="column"
                p={3}
                bg="white"
                w={{ base: "100%", md: "68%" }}
                borderRadius="lg"
                borderWidth='1px'
            >
                <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            </Box>
        </div>
    )
}

export default Chatbox
