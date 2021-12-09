import styled from "styled-components"

export default function ButtonContainer(props){
    return(
        <Container className="ButtonContainer">
            {props.children}
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
`