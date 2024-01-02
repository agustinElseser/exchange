import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface Idata {
  name: string | boolean;
  sell: number;
  buy: number;
}
export default function Chart({ sellData, buyData }) {
  const data: Idata[] = [];

  sellData.forEach((item) => {
    const newItem = {
      name: item[0],
      sell: item[2],
      buy: 0,
    };
    data.push(newItem);
  });
  const middle: Idata = {
    name: sellData.length > 0 && parseFloat(sellData[7][0] + buyData[0][0] / 2).toFixed(1)!,
    sell: 0,
    buy: 0,
  };
  data.push(middle);
  buyData.forEach((item) => {
    const newItem = {
      name: item[0],
      sell: 0,
      buy: item[2],
    };
    data.push(newItem);
  });

  const WidthCalc = window.innerWidth * 0.7;
  return (
    <AreaChart
      width={WidthCalc}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
      style={{ fontSize: "0.7rem" }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="linear" dataKey="sell" stackId="1" stroke="#e64449" fill="#e64449" />
      <Area type="linear" dataKey="buy" stackId="2" stroke="#40cc7d" fill="#40cc7d" />
    </AreaChart>
  );
}
