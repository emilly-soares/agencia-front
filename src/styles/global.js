import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap');

   section{
  width: 400px;
  background: #fff;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
   }
.cont{
  padding: 100px;
}

   
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

body, html {
  background: #CEECF5;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}

   body {

    -webkit-font-smoothing: antialiased !important;
      font-size: 14px;
    font-family: 'Lato', sans-serif;
  }

   img{
   height: 50px;
   width: 50px;
   }

   h2{
     padding-bottom: 20px;
     color: #848484;
   }

  .txt {
    height: 30px;
    margin-bottom: 15px;
    color: black;
    font-size: 15px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #848484;
    &::placeholder {
      color: #2E2E2E;
    }
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 350px;
  }

 .button {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    background-color:#086A87;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 350px;
    font-size: 16px;
    font-weight: bold;
  }


    a {
    padding-left: 150px;
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }


 `;