"use client";
import * as S from "./styles.ts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sunday",
    visit: 2546,
    click: 1218,
  },
  {
    name: "Monday",
    visit: 3548,
    click: 2684,
  },
  {
    name: "Tuesday",
    visit: 4236,
    click: 1285,
  },
  {
    name: "Wednesday",
    visit: 1258,
    click: 1021,
  },
  {
    name: "Thursday",
    visit: 9852,
    click: 5231,
  },
  {
    name: "Friday",
    visit: 10584,
    click: 8035,
  },
];

export default function Chart() {
  return (
    <S.Main>
      <S.StyledText>Weekly Recap</S.StyledText>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </S.Main>
  );
}
