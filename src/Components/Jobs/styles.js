import styled from "styled-components";

export const ContainerJobs = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #F8E59B;
height: 9vh;
width: 38vw;
padding-left: 35px;
border: 5px solid #F8E59B;
border-radius: 10px;
`
export const ServiceName = styled.div`
display: flex;
`
export const CartJobs = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 120px;
width: 38vw;
height: 9vh;
padding-right: 15px;
`
export const ButtonJobs = styled.button`
background-color: transparent;
border: transparent;
cursor: pointer;
img{
    height: 35px;
    width: 25px;
    object-fit: cover;
}
`