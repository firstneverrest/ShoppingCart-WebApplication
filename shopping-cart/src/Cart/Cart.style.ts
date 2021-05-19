import styled from 'styled-components'

export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    padding: 20px;

    @media screen and (max-width: 800px) {
        width: 350px;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
    }
`