<!DOCTYPE html>
<html>
<head>
<!--
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="jquery.timepicker.min.js"></script>
<script src="jquery.timepicker.min.css"></script>
<script>

$(document).ready(function(){
    $('input.timepicker').timepicker({
        timeFormat: 'HH:mm:ss',
        // year, month, day and seconds are not important
        minTime: new Date(0, 0, 0, 8, 0, 0),
        maxTime: new Date(0, 0, 0, 15, 0, 0),
        // time entries start being generated at 6AM but the plugin 
        // shows only those within the [minTime, maxTime] interval
        startHour: 6,
        // the value of the first item in the dropdown, when the input
        // field is empty. This overrides the startHour and startMinute 
        // options
        startTime: new Date(0, 0, 0, 8, 20, 0),
        // items in the dropdown are separated by at interval minutes
        interval: 10
    });
});

</script>
-->
<style>
body {
    background: #EFEFEF;
    padding: 20px;
}
h1 {
    font-weight: bold;
    margin-top: 100px;
}
p {
    margin: 10px 0;
}

</style>
</head>
<body>

<form action="" method="post">
  
  <h1>jQuery TimePicker Demo</h1>

<input class="timepicker" name="timepicker" />
<a href="http://github.com/you"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>

</form> 



</body>
</html>
