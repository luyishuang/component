var data1 = [
    {name:'Java',race:'1',float:'降',change:'-0.01%'},
    {name:'C',race:'2',float:'升',change:'+2.44%'},
    {name:'Python',race:'3',float:'升',change:'+1.41%'},
    {name:'C++',race:'4',float:'降',change:'-2.58%'},
    {name:'C#',race:'5',float:'升',change:'+2.07%'},
    {name:'Visual Basic.NET',race:'6',float:'降',change:'-1.17%'},
    {name:'JavaScript',race:'7',float:'降',change:'-0.85%'}
],
    container1 = document.getElementById('example1'),
    settings1 = {
        data: data1,
        rowHeaders: false,
        colHeaders: ["语言名称", "排名", "升或降", "变化幅度"],
        contextMenu: true,
        filters: true,
        dropdownMenu: true,
        manualRowResize: true,
        manualColumnResize: true,
        autoColumnSize: true,
        rowHeights: 40,
        colWidths: 200,
        className: 'htCenter htMiddle'
    },
    hot1,
    myChart = echarts.init(document.getElementById('main')),
    xData = [],
    yData = [];


hot1 = new Handsontable(container1, settings1);
hot1.setDataAtCell(0, 0, 'Java');

var option = {
    title: {
        text: 'JavaScript语言排名变化'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '&nbsp&nbsp{a}<br/>{b} : {c}'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['2000', '2005', '2010', '2015', '2020']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '排名',
        data: [6, 9, 8, 8, 7],
        type: 'line'
    }]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
