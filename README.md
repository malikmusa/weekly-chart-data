#What is this?

Arrange data for chat or Graph of past seven days from today(Weekly)

#Installation

`npm i arrange-chart-data`
or
`yarn add arrange-chart-data`

Then...

```
import ArrangeChartData from "arrange-chart-data";

const studentData = [
    {
      _id: 1,
      quiz: 2,
      marks: 10,
      date: "2021-02-01T19:47:10.767Z",
      createdAt: "2021-02-01T19:47:10.767Z",
    },
    {
      _id: 2,
      quiz: 2,
      marks: 20,
      date: "2021-02-01T19:47:10.767Z",
      createdAt: "2021-02-01T19:47:10.767Z",
    },
    {
      _id: 3,
      quiz: 2,
      marks: 30,
      date: "2021-02-01T19:47:10.767Z",
      createdAt: "2021-02-01T19:47:10.767Z",
    },
    {
      _id: 4,
      quiz: 2,
      marks: 10,
      date: "2021-02-02T19:47:10.767Z",
      createdAt: "2021-02-02T19:47:10.767Z",
    },
    {
      _id: 5,
      quiz: 2,
      marks: 20,
      date: "2021-02-02T19:47:10.767Z",
      createdAt: "2021-02-02T19:47:10.767Z",
    },
    {
      _id: 6,
      quiz: 2,
      marks: 30,
      date: "2021-02-02T19:47:10.767Z",
      createdAt: "2021-02-02T19:47:10.767Z",
    },
    {
      _id: 7,
      quiz: 2,
      marks: 10,
      date: "2021-01-30T19:47:10.767Z",
      createdAt: "2021-01-30T19:47:10.767Z",
    },
    {
      _id: 8,
      quiz: 2,
      marks: 20,
      date: "2021-01-30T19:47:10.767Z",
      createdAt: "2021-01-30T19:47:10.767Z",
    },
    {
      _id: 9,
      quiz: 2,
      marks: 30,
      date: "2021-01-30T19:47:10.767Z",
      createdAt: "2021-01-30T19:47:10.767Z",
    },
    {
      _id: 10,
      quiz: 2,
      marks: 10,
      date: "2021-01-01T19:47:10.767Z",
      createdAt: "2021-01-01T19:47:10.767Z",
    },
    {
      _id: 11,
      quiz: 2,
      marks: 20,
      date: "2021-01-01T19:47:10.767Z",
      createdAt: "2021-01-01T19:47:10.767Z",
    },
    {
      _id: 12,
      quiz: 2,
      marks: 30,
      date: "2021-01-01T19:47:10.767Z",
      createdAt: "2021-01-01T19:47:10.767Z",
    },
  ];

const arrangedData = ArrangeChartData(studentData, "date", "marks");

console.log(arrangedData);

```
