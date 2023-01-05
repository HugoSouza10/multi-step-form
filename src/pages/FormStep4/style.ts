import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #B8B8D4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr {
        border: 0;
        height: 1px;
        background-color: #16195C;
        margin: 30px 0;
    }




    table, th, td {
        border: 1px solid #25CD89;
    }

    table {
        border-collapse: collapse;
    }

    th, td{
        padding: 10px;
        text-align: center;
        width: 120px;
    }

    th{
        font-weight: bold;
    }


    tr:nth-child(even) {
        background-color: transparent;
    }

    tr:hover:nth-child(1n + 2) {
        background-color: #25CD89;
        color: #fff;
    }

    

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }

    .backButton {
        font: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }
`;