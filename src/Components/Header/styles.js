import styled from 'styled-components';

export const Content = styled.div`
    background: #00E676;
    padding: 20px;
    margin-bottom: 50px;
    text-align: right;
    display: flex;
    align-items: center;

    a{
      text-decoration: underline;
      color: #212529;
    }

    img{
      filter: brightness(0) invert(1);
      max-width: 100px;
      float: left;
    }

    .row{
      display: flex;
      align-items: center;
    }
`

