import styled from "styled-components";

export const Content = styled.div`
    background: #00A3ED;
    height: 100%;
    min-height: 100vh;
    max-width: 85px;
    padding: 30px 0;

    a{
        display: grid;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        color: #fff;
        margin: 25px 0;
        text-align: center;
    }

    a:first-child{
        margin-top:0px;
    }


    img{
        margin: 0 auto;
        display: flex;
        min-width:35px;
        height: auto;
        margin-bottom: 5px;
    }
`

export const Exit = styled.div`
    float: right;
    background: red;
    border-radius: 5px;
    padding: 5px;
    color: #fff;
    position: relative;
    margin: 5px;
    z-index: 999;
    &:hover{
        cursor: pointer;
    }
`
