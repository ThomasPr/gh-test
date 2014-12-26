  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);

    function drawChart() {
       // grab the CSV
       $.get("test.csv", function(csvString) {
          // transform the CSV string into a 2-dimensional array
          var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
          
          alert( $.toJSON(arrayData) );
        //alert(arrayData);
          // this new DataTable object holds all the data
          var data = new google.visualization.arrayToDataTable(arrayData);

          // this view can select a subset of the data at a time
          var view = new google.visualization.DataView(data);
          view.setColumns([0,1]);

         // set chart options
         var options = {
        title: "A Chart from a CSV!",
        legend: 'none'
         };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
});
      }