import styled from "styled-components";

export const Content = styled.div`
    background: #00B35C;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    padding: 30px 5px;
    justify-content: space-between;


    span{
      display:flex;
      font-size: 12px;
      font-weight: 500;
      text-decoration: none;
      color: #fff;
      margin: 25px 0;
      text-align: center;

      &:hover{
        cursor: pointer;
      }
    }

    a{
      color:#fff;
      justify-content: space-between;
      text-decoration: none;
    }

    a:first-child{
        margin-top:0px;
    }

    svg{
      margin-right:10px;
    }


    img{
      margin: 0 auto;
      display: flex;
      min-width:35px;
      height: auto;
      margin-bottom: 5px;
      filter: brightness(0) invert(1);
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
