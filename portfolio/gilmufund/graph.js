window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer1", {
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
                {x: 1, y: 50, label: "주식"},
                {x: 2, y: 30, label: "국채"},
                {x: 3, y: 10, label: "금"},
                {x: 4, y: 10, label: "비트코인"},
            ],
            mousemove: function(e){
                const content = document.getElementById("content");
                const text = e.dataPoint.label;
                const id = e.dataPoint.x;
                const t = document.getElementById(id);
                content.innerText = t.textContent;
            }
        }]
    });
    chart.render();
    var chart = new CanvasJS.Chart("chartContainer2", {
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
                {x: 1, y: 50, label: "주식"},
                {x: 2, y: 30, label: "국채"},
                {x: 3, y: 10, label: "금"},
                {x: 4, y: 10, label: "비트코인"},
            ],
            mousemove: function(e){
                const content = document.getElementById("content");
                const text = e.dataPoint.label;
                const id = e.dataPoint.x;
                const t = document.getElementById(id);
                content.innerText = t.textContent;
            }
        }]
    });
    chart.render();var chart = new CanvasJS.Chart("chartContainer3", {
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
                {x: 1, y: 50, label: "주식"},
                {x: 2, y: 30, label: "국채"},
                {x: 3, y: 10, label: "금"},
                {x: 4, y: 10, label: "비트코인"},
            ],
            mousemove: function(e){
                const content = document.getElementById("content");
                const text = e.dataPoint.label;
                const id = e.dataPoint.x;
                const t = document.getElementById(id);
                content.innerText = t.textContent;
            }
        }]
    });
    chart.render();var chart = new CanvasJS.Chart("chartContainer4", {
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
                {x: 1, y: 50, label: "주식"},
                {x: 2, y: 30, label: "국채"},
                {x: 3, y: 10, label: "금"},
                {x: 4, y: 10, label: "비트코인"},
            ],
            mousemove: function(e){
                const content = document.getElementById("content");
                const text = e.dataPoint.label;
                const id = e.dataPoint.x;
                const t = document.getElementById(id);
                content.innerText = t.textContent;
            }
        }]
    });
    chart.render();var chart = new CanvasJS.Chart("chartContainer5", {
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
                {x: 1, y: 50, label: "주식"},
                {x: 2, y: 30, label: "국채"},
                {x: 3, y: 10, label: "금"},
                {x: 4, y: 10, label: "비트코인"},
            ],
            mousemove: function(e){
                const content = document.getElementById("content");
                const text = e.dataPoint.label;
                const id = e.dataPoint.x;
                const t = document.getElementById(id);
                content.innerText = t.textContent;
            }
        }]
    });
    chart.render();var chart = new CanvasJS.Chart("chartContainer6", {
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
                {x: 1, y: 50, label: "주식"},
                {x: 2, y: 30, label: "국채"},
                {x: 3, y: 10, label: "금"},
                {x: 4, y: 10, label: "비트코인"},
            ],
            mousemove: function(e){
                const content = document.getElementById("content");
                const text = e.dataPoint.label;
                const id = e.dataPoint.x;
                const t = document.getElementById(id);
                content.innerText = t.textContent;
            }
        }]
    });
    chart.render();

}