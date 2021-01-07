import styled from 'styled-components';

export const Container = styled.div`
    background: #00B35C;
    display: flex;
    height: 100vh;
    align-items: stretch;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;

    form{
      min-width: 400px;
    }

    form img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: auto;
      margin: 50px auto;
    }

    input:first-child{
      margin: 10px 0;
    }

    input{
      text-align: center;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 15px auto!important;
      padding: 30px;
    }

    a{
      color: #fff;
      text-decoration: none;
      font-size: 14px;
    }

    button {
      max-width: 170px;
      margin: 10px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
  }

  img{
      filter: brightness(0) invert(1);
      max-width: 100px;
      margin: auto;
    }
`
