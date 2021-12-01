import styled from "styled-components"

export default function ButtonContainer(props){
    return(
        <Container>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
`