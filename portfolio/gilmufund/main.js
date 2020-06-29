window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "길무 지수 구성"
        },
        data: [{
            type: "pie",
            startAngle: 270,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 40, label: "미국주식"},
                {y: 20, label: "해외주식"},
                {y: 30, label: "장기미국채"},
                {y: 10, label: "금"},
            ]
        }]
    });
    chart.render();

    }