import styled from 'styled-components';

export const Content = styled.div`
  padding-top: 50px;

  img{
    max-height: 400px;
    border-radius: 20px;
  }

  .title-page{
    text-align: right;
  }

  button{
    max-width: 300px;
    float: right;
  }

  @media(max-width: 1000px){
    img{
      width: 100%;
    }

    .description{
      margin-top: 30px;
    }
  }
`
