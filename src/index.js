const makeCalender = () => {
  //データ取得
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value - 1;
  const date = new Date(year, month, 1);
  const calendarTable = document.getElementById("calendar");
  const endDay = new Date(year, month, 0).getDate();
  console.log(endDay);
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];

  //曜日を取得
  const week = new Date(year, month, 1).getDay();
  console.log(week);

  //テーブルに曜日を挿入
  //var headerRow = calendarTable.insertRow();
  //for (var i = 0; i < 7; i++) {
  //  var cell = headerRow.insertCell();
  //  cell.textContent = weekdays[i];
  //}
  var newRow = calendarTable.insertRow();

  console.log(week);
  //日にちの空うめ
  for (var i = 0; i < week; i++) {
    newRow.insertCell();
  }
  for (var day = 1; day < endDay; day++) {
    var cell = newRow.insertCell();
    cell.textContent = day;

    //土曜日を迎えたら行追加
    if (date.getDay() === 6) {
      var newRow = calendarTable.insertRow();
    }
    date.setDate(date.getDate() + 1);
  }
};
document.getElementById("make").addEventListener("click", () => makeCalender());
