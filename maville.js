/**
 * Created by Bouzidi on 25/10/2014.
 */

var doughnutData = [
    {
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }

];


var randomScalingFactor = function () {
    return Math.round(Math.random() * 100)
};

var barChartData = {
    labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [574, 516, 567, 536,  617, 558, 684, 649, 642, 645, 574, 645]
        }
    ]
};


var polarData = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "S"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }

];

var radarChartData = {
    labels: ["Gabriel", "Camille", "Jules", "Eva", "Manon", "Hugo", "Léo"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65,59,90,81,56,55,40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28,48,40,19,96,27,100]
        }
    ]
};


window.onload = function () {
    var ctx = document.getElementById("doughnutData").getContext("2d");
    var ctx2 = document.getElementById("barChartData").getContext("2d");
    var ctx3 = document.getElementById("polarData").getContext("2d");
    var ctx4 = document.getElementById("radar").getContext("2d");
    window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData, {responsive: true});
    window.myBar = new Chart(ctx).Bar(barChartData, {
        responsive: true
    });
    window.myPolarArea = new Chart(ctx3).PolarArea(polarData, {
        responsive:true
    });
    window.myRadar = new Chart(ctx4).Radar(radarChartData, {
        responsive:true
    });

};