window.onload = function () {
////////////basicchart
	var chart = new CanvasJS.Chart("basicChartContainer", {
		animationEnabled: true,
		title: {
			text: "Desktop Search Engine Market Share - 2016"
		},
		data: [{
			type: "pie",
			explodeOnClick:false,
			startAngle: 240,
			yValueFormatString: "##0.00\"%\"",
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: 79.45, label: "Google"},
				{y: 7.31, label: "Bing"},
				{y: 7.06, label: "Baidu"},
				{y: 4.91, label: "Yahoo"},
				{y: 1.26, label: "Others"}
			]
		}]
	});
	chart.render();
///////////////  interactiveChart
	var chart = new CanvasJS.Chart("interactiveChartContainer", {
		animationEnabled: true,
		title:{
			text: "State Operating Funds"
		},
		legend:{
			cursor: "pointer",
		},
		data: [{
			explodeOnClick:false,
			type: "pie",
			showInLegend: true,
			toolTipContent: "{name}: <strong>{y}%</strong>",
			indexLabel: "{name} - {y}%",
			dataPoints: [
				{ y: 26, name: "School Aid"},
				{ y: 20, name: "Medical Aid" },
				{ y: 5, name: "Debt/Capital" },
				{ y: 3, name: "Elected Officials" },
				{ y: 7, name: "University" },
				{ y: 17, name: "Executive" },
				{ y: 22, name: "Other Local Assistance"}
			],
			mousemove: function(e){
				const test = document.querySelector(".test");
				const text = e.dataPoint.name;
				test.innerText = text;
			}
		}]
	});
	chart.render();

	var chart = new CanvasJS.Chart("dynamicChart", {
		title: {
			text: "Temperature of Each Boiler"
		},
		axisY: {
			title: "Temperature (°C)",
			suffix: " °C"
		},
		data: [{
			type: "column",	
			yValueFormatString: "#,### °C",
			indexLabel: "{y}",
			dataPoints: [
				{ label: "boiler1", y: 206 },
				{ label: "boiler2", y: 163 },
				{ label: "boiler3", y: 154 },
				{ label: "boiler4", y: 176 },
				{ label: "boiler5", y: 184 },
				{ label: "boiler6", y: 122 }
			]
		}]
	});
	
	function updateChart() {
		let boilerColor, deltaY, yVal;
		let dps = chart.options.data[0].dataPoints;
		for (let i = 0; i < dps.length; i++) {
			deltaY = Math.round(2 + Math.random() *(-2-2));
			yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
			boilerColor = yVal > 200 ? "#FF2500" : yVal >= 170 ? "#FF6000" : yVal < 170 ? "#6B8E23 " : null;
			dps[i] = {label: "Boiler "+(i+1) , y: yVal, color: boilerColor};
		}
		chart.options.data[0].dataPoints = dps; 
		chart.render();
	};
	
	updateChart();
	
	setInterval(function() {updateChart()}, 1000);
	}