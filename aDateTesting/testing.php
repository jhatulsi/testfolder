<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">

<script>
(function($) {
    $(function() {
        $('#timepicker').timepicker();
    });
})(jQuery);

</script>

</head>
<form>

    <input type="text" class="timepicker" id="timepicker" name="time"/>

	</form>




</body>
</html>


<!-- <link rel="stylesheet" href="/resources/demos/style.css"> -->


<!--    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
 <!-- <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
  $.noConflict();
jQuery(document).ready(function ($) {
    $("#datepicker").datepicker();
});
  </script>  --->