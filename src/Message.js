import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'

const Message = ({ username, message }) => {
    const isUser = username === message.username

    return (
        <div>
            <Card className={`message ${isUser && 'message__user'}`}> 
              <CardContent>
                <Typography variant="h5" component="h2" color="white">
                  <h2>{message.username}: {message.text}</h2>
                </Typography>
              </CardContent>
            </Card>
        </div>
    )
}

export default Message
