
window.onload = function () {
    submit = document.getElementById("submit");
    number = document.getElementById("number");
    chartDom = document.getElementById('chart-demo-line');
    warnings = document.getElementById("warning");
    submit.setAttribute('disabled', 'true');
    var warning = "n必须为正整数"
    warnings.innerHTML = warning;
    myChart = echarts.init(chartDom, null, {
        height: 720
    });
    window.onresize = function () {
        myChart.resize();
    };
    option = {
        xAxis: {
            type: 'category',
            data: [],
            name: '次数',
            nameLocation: "middle",
            nameGap: 40,
            nameTextStyle: {
                fontSize: "30"
            },
        },
        yAxis: {
            type: 'value',
            name: '取值',
            nameLocation: "middle",
            nameGap: 40,
            nameTextStyle: {
                fontSize: "30"
            },
        },
        series: [
            {
                data: [],
                type: 'line'
            }
        ]
    };

    option && myChart.setOption(option);
}
number.oninput = () => {
    get = parseInt(document.getElementById("number").value);
    if ((get <= 0) || (get != get)) {
        var warning = "n必须为正整数"
        warnings.innerHTML = warning;
        submit.setAttribute('disabled', 'true');
    }
    else {
        warnings.innerHTML = '';
        submit.removeAttribute('disabled');
    }
    submit.onclick = () => {
        count = [];
        j = [];
        count.push(get);
        for (let i = 0; get >= 1; i++) {
            if (get % 2 == 0) {
                get /= 2;
                count.push(get);
            }
            else {
                if (get == 1) {
                    j.push(parseInt(i) + 1);
                    i++;
                    break;
                }
                get = get * 3 + 1;
                count.push(get);
            }
            j.push(parseInt(i) + 1);
        }
        option = {
            xAxis: {
                type: 'category',
                data: j,
                name: '次数',
                nameLocation: "middle",
                nameGap: 40,
                textStyle: {
                    fontSize: 30
                },
            },
            yAxis: {
                type: 'value',
                name: '取值',
                nameLocation: "middle",
                nameGap: 40,
                textStyle: {
                    fontSize: 30
                },
            },
            series: [
                {
                    data: count,
                    type: 'line',
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 15,
                        }
                    }
                }
            ]
        };

        option && myChart.setOption(option);
    }
}