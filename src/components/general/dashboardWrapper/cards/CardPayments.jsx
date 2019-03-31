import React, { Fragment } from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";
import CardReport from "../../../common/CardReport";
import DataSet from "@antv/data-set";
import { Row, Typography } from 'antd';
const { Title } = Typography;
const padding = [5, 5, 10, 5];

const data = [
    {
      month: "Jan",
      Tokyo: 23,
    },
    {
      month: "Feb",
      Tokyo: 26,
    },
    {
      month: "Mar",
      Tokyo: 22,
    },
    {
      month: "Apr",
      Tokyo: 21,
    },
    {
      month: "May",
      Tokyo: 25,
    },
    {
      month: "Jun",
      Tokyo: 15,
    },
    {
      month: "Jul",
      Tokyo: 20,
    },
    {
      month: "Aug",
      Tokyo: 26.5,
    },
    {
      month: "Sep",
      Tokyo: 23.3,
    },
    {
      month: "Oct",
      Tokyo: 18.3,
    },
    {
      month: "Nov",
      Tokyo: 22,
    },
    {
      month: "Dec",
      Tokyo: 9.6,
    }
];

const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
    type: "fold",
    fields: ["Tokyo", "London"],
    // 展开字段集
    key: "city",
    // key字段
    value: "temperature" // value字段
});

const cols = {
    month: {
      range: [0, 1]
    }
};

function body(){
    return (
        <div style={{marginTop:-20}}>
            <Row style={{ marginTop: "5px" }}>
                <Title level={2}>7,542</Title>
            </Row>
            <Chart 
                animate={true}
                height={50} 
                data={dv} 
                scale={cols} 
                forceFit
                padding={padding}
            >
            <Axis 
                name="month" 
                label={false}
                line={false}
                tickLine={false}
                grid={false}
            />
            <Axis
                name="temperature"
                label={false}
                line={false}
                tickLine={false}
                grid={false}
            />
            <Tooltip
                crosshairs={{
                type: "y"
                }}
            />
            <Geom
                type="interval"
                position="month*temperature"
                //size={2}
                color={"#4ecb73"}
                adjust={[
                    {
                        type: "dodge",
                        marginRatio: 1 / 32
                    }
                ]}
            />
            </Chart>
        </div>
    )
}

function footer(){
    return(
        <p>Taxa de conversão 60%</p>
    )
}

function CardPayments({}){
    return(
        <CardReport
            title={"Número de pagamentos"}
            tooltip={"What do you want others to call you?"}
            body={body()}
            footer={footer()}
        /> 
    )
}

export default CardPayments;
