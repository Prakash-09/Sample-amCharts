import React from 'react';
import './SampleVersion4.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst";

am4core.useTheme(am4themes_animated);

export default class SampleVersion4 extends React.Component {

    componentDidMount() {

        this.configureGuidanceChart()
        this.configureSunburstChart()
        this.configureRadarChart()

    }

    configureGuidanceChart() {
        let chart = am4core.create("chartdiv", am4charts.PieChart);

        chart.paddingRight = 100;

        chart.data = [{
            "country": "Lithuania",
            "litres": 501.9
        }, {
            "country": "Czech Republic",
            "litres": 301.9
        }, {
            "country": "Ireland",
            "litres": 201.1
        }, {
            "country": "Germany",
            "litres": 165.8
        }, {
            "country": "Australia",
            "litres": 139.9
        }, {
            "country": "Austria",
            "litres": 128.3
        }, {
            "country": "UK",
            "litres": 99
        }, {
            "country": "Belgium",
            "litres": 60
        }, {
            "country": "The Netherlands",
            "litres": 50
        }];

        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";

        this.chart = chart;
    }

    configureSunburstChart() {
        let chart = am4core.create("chartdiv1", am4plugins_sunburst.Sunburst);
        chart.data = [{
            name: "First",
            children: [
                { name: "A1", value: 100 },
                { name: "A2", value: 60 }
            ]
        },
        {
            name: "Second",
            children: [
                { name: "B1", value: 135 },
                { name: "B2", value: 98 }
            ]
        },
        {
            name: "Third",
            children: [
                {
                    name: "C1",
                    children: [
                        { name: "EE1", value: 130 },
                        { name: "EE2", value: 87 },
                        { name: "EE3", value: 55 }
                    ]
                },
                { name: "C2", value: 148 },
                {
                    name: "C3", children: [
                        { name: "CC1", value: 53 },
                        { name: "CC2", value: 30 }
                    ]
                },
                { name: "C4", value: 26 }
            ]
        },
        {
            name: "Fourth",
            children: [
                { name: "D1", value: 415 },
                { name: "D2", value: 148 },
                { name: "D3", value: 89 }
            ]
        },
        {
            name: "Fifth",
            children: [
                {
                    name: "E1",
                    children: [
                        { name: "EE1", value: 33 },
                        { name: "EE2", value: 40 },
                        { name: "EE3", value: 89 }
                    ]
                },
                {
                    name: "E2",
                    value: 148
                }
            ]
        }];
        chart.dataFields.value = "value";
        chart.dataFields.name = "name";
        chart.dataFields.children = "children";
    }

    configureRadarChart() {
        let chart = am4core.create("chartdiv2", am4charts.RadarChart);
        chart.data = [{
            "country": "Lithuania",
            "litres": 501
        }, {
            "country": "Czech Republic",
            "litres": 301
        }, {
            "country": "Ireland",
            "litres": 266
        }, {
            "country": "Germany",
            "litres": 165
        }, {
            "country": "Australia",
            "litres": 139
        }, {
            "country": "Austria",
            "litres": 336
        }, {
            "country": "UK",
            "litres": 290
        }, {
            "country": "Belgium",
            "litres": 325
        }, {
            "country": "The Netherlands",
            "litres": 40
        }];
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        let series = chart.series.push(new am4charts.RadarSeries());
        series.dataFields.valueY = "litres";
        series.dataFields.categoryX = "country";
        series.name = "Sales";
        series.strokeWidth = 3;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="container">
                <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
                <div id="chartdiv1" style={{ width: "100%", height: "500px" }}></div>
                <div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>
            </div>
        )
    }
}