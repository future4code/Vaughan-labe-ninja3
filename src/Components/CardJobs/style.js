import styled from "styled-components";


export const ContainerRender = styled.div`
display: grid;
align-items: center;
justify-items: center;
border: 3px solid black;
color: white;
background-color: #1B0034;
margin: 5px;
width: 20vw;
height: 25vh;
border-radius: 2.5%;
`

export const ContainerButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 20vw;
padding: 0 20px;
`
export const ButtonCard = styled.button`
background-color: transparent;
border: 0;
cursor: pointer;
padding: 10px;
img{
    width: 40px;
    height: 40px;
   object-fit: cover;
}
`
export const ContainerJobs = styled.div`
display: grid;
grid-template-columns: repeat(4, 22vw);
margin: 10px;
`
