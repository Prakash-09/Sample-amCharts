import React from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default class SampleVersion5 extends React.Component {

    componentDidMount() {

        // am5.ready(this.am5Ready());
        this.am5Ready()
        // this.defaultOne()

    }

    defaultOne() {
        let root = am5.Root.new("chartdiv");
        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                layout: root.verticalHorizontal
            })
        );

        // Define data
        let data = [{
            country: "France",
            sales: 100000
        }, {
            country: "Spain",
            sales: 160000
        }, {
            country: "United Kingdom",
            sales: 80000
        }];

        // Create series
        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                name: "Series",
                valueField: "sales",
                categoryField: "country"
            })
        );
        series.data.setAll(data);

        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root.horizontalLayout
        }));

        legend.data.setAll(series.dataItems);
    }

    am5Ready() {
        let root = am5.Root.new("chartdiv");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // this.configureGuidanceChart(root);

        let chart = root.container.children.push(am5percent.PieChart.new(root, {
            startAngle: 180,
            endAngle: 360,
            layout: root.verticalLayout,
            innerRadius: am5.percent(50)
        }));

        let series = chart.series.push(am5percent.PieSeries.new(root, {
            startAngle: 180,
            endAngle: 360,
            valueField: "value",
            categoryField: "category",
            alignLabels: false
        }));

        series.states.create("hidden", {
            startAngle: 180,
            endAngle: 180
        });

        series.slices.template.setAll({
            cornerRadius: 5
        });

        series.ticks.template.setAll({
            forceHidden: true
        });

        series.data.setAll([
            { value: 10, category: "One" },
            { value: 9, category: "Two" },
            { value: 6, category: "Three" },
            { value: 5, category: "Four" },
            { value: 4, category: "Five" },
            { value: 3, category: "Six" },
            { value: 1, category: "Seven" }
        ]);

        series.appear(1000, 100);
    }

    configureGuidanceChart(root) {

        let chart = root.container.children.push(am5percent.PieChart.new(root, {
            startAngle: 180,
            endAngle: 360,
            layout: root.verticalLayout,
            innerRadius: am5.percent(50)
        }));

        let series = chart.series.push(am5percent.PieSeries.new(root, {
            startAngle: 180,
            endAngle: 360,
            valueField: "value",
            categoryField: "category",
            alignLabels: false
        }));

        series.states.create("hidden", {
            startAngle: 180,
            endAngle: 180
        });

        series.slices.template.setAll({
            cornerRadius: 5
        });

        series.ticks.template.setAll({
            forceHidden: true
        });

        series.data.setAll([
            { value: 10, category: "One" },
            { value: 9, category: "Two" },
            { value: 6, category: "Three" },
            { value: 5, category: "Four" },
            { value: 4, category: "Five" },
            { value: 3, category: "Six" },
            { value: 1, category: "Seven" }
        ]);

        series.appear(1000, 100);

    }

    render() {
        return (
            <div id="chartdiv"></div>
        )
    }
}