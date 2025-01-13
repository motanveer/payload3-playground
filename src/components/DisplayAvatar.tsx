import React from 'react'
import { Avatar, AvatarImage, AvatarFallback} from './ui/avatar'

const DisplayAvatar = () => {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export default DisplayAvatar