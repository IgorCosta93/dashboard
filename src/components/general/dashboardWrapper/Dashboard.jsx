import React, { Fragment } from "react";
import BarChart from "./charts/BarChart";
import BarChartHorizontal from "./charts/BarChartHorizontal";
import LineChart from "./charts/LineChart";
import IntervalStackChart from "./charts/IntervalStackChart";
import PetalsChart from "./charts/PetalsChart";
import { Row, Col } from 'antd';
import CardVisits from "./cards/CardVisits";
import CardPayments from "./cards/CardPayments";
import CardIATF from "./cards/CardIATF";
import CardPregnancy from "./cards/CardPregnancy";
import Map from "../../common/Map";

function Dashboard({ props }){
    return(
       <Fragment>
            <Row>
                <Col span={6} style={{marginRight: 0}}>
                    <CardPregnancy/> 
                </Col>
                <Col span={6} >
                    <CardVisits/> 
                </Col>
                <Col span={6}>
                    <CardPayments/> 
                </Col>
                <Col span={6} >
                    <CardIATF/> 
                </Col>
            </Row>
                
            <Row>
                <Col span={12} style={{marginLeft: 0, marginTop: 30}}>
                    <Map/>
                </Col>
                <Col span={11} style={{marginLeft: -40, marginTop: 30}}>
                    <BarChart/>
                </Col>
            </Row>

            <Row>
                <Col span={10} style={{marginLeft: 0, marginTop: 30}}>
                    <BarChartHorizontal/>
                </Col>
                <Col span={11} style={{marginLeft: 70, marginTop: 30}}>
                    <IntervalStackChart/>
                </Col>
            </Row>
            
            <Row>
                <Col span={10} style={{marginLeft: 0, marginTop: 0}}>
                    <PetalsChart/>
                </Col>
                <Col span={11} style={{marginLeft: 70, marginTop: 0}}>
                    <LineChart/>
                </Col>
            </Row>
 
       </Fragment>
    )
}

export default Dashboard;