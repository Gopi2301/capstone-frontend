import React from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from '../config/chatLogic'
import { ChatState } from '../context/chatProvider'
import { Avatar, Tooltip } from '@chakra-ui/react'



const ScrollableChat = ({ message }) => {
    const { user } = ChatState()
    return (
        <div>
            <ScrollableFeed>
                {message && message.map((mes, index) => (
                    <div style={{ display: "flex" }} key={mes._id}>
                        {
                            (isSameSender(message, mes, index, user._id))
                            || isLastMessage(message, index, user._id)
                            && (
                                <Tooltip label={mes.sender.name}
                                    placement='bottom-start'
                                    hasArrow
                                >
                                    <Avatar
                                        mt="7px" mr={1} size="sm" cursor="pointer" name={mes.sender.name} src={mes.sender.pic}
                                    />
                                </Tooltip>
                            )}
                        <span style={{
                            backgroundColor: `${mes.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"}`,
                            borderRadius: '20px',
                            padding: '5px 15px',
                            maxWidth: '75%',
                            marginLeft: isSameSenderMargin(message, mes, index, user._id),
                            marginTop: isSameUser(message, mes, index, user._id) ? 3 : 10,
                        }}>{mes.content}</span>
                    </div>
                ))}
            </ScrollableFeed>
        </div>
    )
}

export default ScrollableChat
