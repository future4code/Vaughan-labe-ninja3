import React from 'react'
import { Container } from './style'
import { CircularProgress } from "@material-ui/core"

const Loading = () => {
    return(
        <Container>
            <CircularProgress color="primary"/>
        </Container>
    )
}

export default Loading
