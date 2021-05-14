import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border: 1px solid #FFD700;
    border-radius: 20px;

    .button-add {
        background-color: #FFD700;
        border-radius: 0 0 20px 20px;
    }

    .button-add:hover,
    .button-add::active {
        background-color: #FFD700; 
    }

    img {
        max-height: 220px;
        width: 90%;
        object-fit: contain;
        border-radius: 20px 20px 0 0;
        margin: 10px 20px 10px ;
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%
    }
`;