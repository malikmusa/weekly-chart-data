import moment from "moment";
export default function weeklyGraphFunction(
  array,
  dateName,
  valueName
) {
  const arrayVar = array;
  const dateNameVar = dateName;
  const valueNameVar = valueName;

  function arrange(array, dateName, valueName) {
    // array.forEach((ele) => {
    //   console.log("chk error=>", ele, dateName, ele[dateName]);
    //   if (ele[dateName]===unde) {
    //     return "error";
    //   }
    // });

    const capitals = array.map(function (obj) {
      if (dateName !== "date") {
        obj["date"] = obj[dateName];
        delete obj[dateName];
      }
      if (valueName !== "value") {
        obj["value"] = obj[valueName];
        delete obj[valueName];
      }

      return obj;
    });
    return capitals;
  }

  const dataArray = arrange(arrayVar, dateNameVar, valueNameVar);

  //First Step (Filter Data)
  const today = new Date().getTime();
  const pastSevenDays = today - 7 * 24 * 60 * 60 * 1000;
  const filterData = dataArray.filter((element) => {
    return (
      today > new Date(element.date.substr(0, 10)).getTime() &&
      pastSevenDays < new Date(element.date.substr(0, 10)).getTime()
    );
  });
  console.log("filter data=>", filterData);

  //second Step (Grouping Data)

  const groups = filterData.reduce((groups, game) => {
    const date = game.date.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    let total = 0;
    groups[date].forEach((element) => {
      total = total + element.value;
    });
    return {
      date,
      value: total,
    };
  });

  const groupArraysByDays = groupArrays.map((element, index) => {
    return {
      date: moment(element.date).format("ddd"),
      value: element.value,
    };
  });
  console.log("object=>", groupArraysByDays);
  //third step (Current Days Of Week)
  const d = moment();
  const name6DaysOfWeeks = Array(6)
    .fill()
    .map(() => d.subtract(1, "d").format("ddd"))
    .reverse();
  const m = moment();
  const day = Array(6)
    .fill()
    .map(() => m.subtract(1, "d").format("MMM DD"))
    .reverse();

  //comparing
  const todayDay = [new Date().toString().substring(0, 3)];

  let nameOfWeeks = name6DaysOfWeeks.concat(todayDay);

  const finalArray = [];

  for (const n in nameOfWeeks) {
    if (
      groupArraysByDays.some(
        (p) => p.date.toString().substring(0, 3) === nameOfWeeks[n]
      )
    ) {
      const arr = groupArraysByDays.filter((r) => {
        if (r.date.toString().substring(0, 3) === nameOfWeeks[n]) {
          return r.date;
        }
      });
      finalArray.push(arr[0]);
    } else {
      finalArray.push({ date: nameOfWeeks[n], value: 0 });
    }
  }
  console.log("days=>", finalArray);

  function reArrange(array, dateName, valueName) {
    const capitals = array.map(function (obj) {
      obj[dateName] = obj["date"];
      delete obj["date"];
      obj[valueNameVar] = obj["value"];
      delete obj["value"];

      return obj;
    });
    return capitals;
  }
  console.log("date var=>", dateNameVar, valueNameVar);
  const responseData = reArrange(
    finalArray,
    dateNameVar,
    valueNameVar
  );

  return responseData;
}
