am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


var data = [];
//var hArrive = 1000;
// var hDepart = 30000;
// for (var i = 0; i < 300; i++) {
// 	hArrive += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
// 	hDepart += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1000);
// 	data.push({ date: new Date(2000, 1, i), hArrive: hArrive, hDepart: hDepart });
// }
var heure = "10:20";
var d = new Date("2019-06-01T" + heure + ":00");
var h = d.getHours();
var m = d.getMinutes();
var seconds = h * 3600 + m * 60;

var hArrive = seconds; //arrive
var hDepart = seconds + 3600; //depart

data.push({ date: new Date(2018, 0, 1), hArrive: hArrive, hDepart: hDepart });
data.push({ date: new Date(2018, 0, 2), hArrive: hArrive, hDepart: hDepart });
data.push({ date: new Date(2018, 0, 3), hArrive: hArrive, hDepart: hDepart });
data.push({ date: new Date(2018, 0, 4), hArrive: hArrive, hDepart: hDepart });
data.push({ date: new Date(2018, 0, 5), hArrive: hArrive, hDepart: hDepart });
data.push({ date: new Date(2018, 0, 6), hArrive: hArrive, hDepart: hDepart });

chart.data = data;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.grid.template.location = 0;
dateAxis.renderer.ticks.template.length = 8;
dateAxis.renderer.ticks.template.strokeOpacity = 0.1;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;

var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.dateX = "date";
series.dataFields.valueY = "hArrive";
series.tooltipText = "{valueY.value}";
series.name = "Series 1";
series.sequencedInterpolation = true;

var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.tooltip.disabled = true;
valueAxis2.renderer.opposite = true;
valueAxis2.renderer.grid.template.disabled = true;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.dateX = "date";
series2.dataFields.valueY = "hDepart";
series2.yAxis = valueAxis2;
series2.tooltipText = "{valueY.value}";
series2.name = "Series 2";
series2.sequencedInterpolation = true;

chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = dateAxis;

var scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(series);
chart.scrollbarX = scrollbarX;

chart.legend = new am4charts.Legend();
chart.legend.parent = chart.plotContainer;
chart.legend.zIndex = 100;
chart.legend.valueLabels.template.text = "{valueY.value.formatNumber('$#.')}";