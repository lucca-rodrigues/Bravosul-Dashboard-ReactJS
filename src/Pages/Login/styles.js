import styled from 'styled-components';

export const Container = styled.div`
    background: #00A4ED;
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
`


// import styled from 'styled-components';

// export const Content = styled.div`

// `
