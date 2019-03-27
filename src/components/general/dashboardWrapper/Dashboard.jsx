import React, { Fragment } from "react";
import CardReport from "../../common/CardReport";
import { Row, Icon, Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;

function cardSales(){
    return (
        <Fragment>
            <Row style={{ marginTop: "5px" }}>
                <Title level={2}>R$ 280.000</Title>
            </Row>

            <Row style={{ marginTop: "-12px" }}>
                <p>12% ano-a-ano <Icon type="caret-up" style={{ marginLeft: "5px", color: "green"}}/></p>
            </Row>
            <Row style={{ marginTop: "-10px" }}>
                <p>11% em uma base dia-a-dia <Icon type="caret-down" style={{ marginLeft: "5px", color: "red"}}/></p>
            </Row>
        </Fragment>
    )
}

function cardSalesFooter(){
    return(
        <p>Vendas médias diárias ¥ 12,423</p>
    )
}

function Dashboard({ props }){
    return(
        <CardReport
            title={"Total de vendas"}
            tooltip={"What do you want others to call you?"}
            body={cardSales()}
            footer={cardSalesFooter()}
        />
    )
}

export default Dashboard;