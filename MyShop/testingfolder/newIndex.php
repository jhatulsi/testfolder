<HTML>
	<HEAD>
		<TITLE>Popup div with disabled background</TITLE>
		<style>
			.ontop {
				z-index: 999;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				display: none;
				position: absolute;				
				background-color: #cccccc;
				color: #aaaaaa;
				opacity: .4;
				filter: alpha(opacity = 50);
			}
			#popup {
				width: 300px;
				height: 200px;
				position: absolute;
				color: #000000;
				background-color: #ffffff;
				/* To align popup window at the center of screen*/
				top: 50%;
				left: 50%;
				margin-top: -100px;
				margin-left: -150px;
			}
		</style>
		<script type="text/javascript">
			function pop(div) {
				document.getElementById(div).style.display = 'block';
			}
			function hide(div) {
				document.getElementById(div).style.display = 'none';
			}
			//To detect escape button
			document.onkeydown = function(evt) {
				evt = evt || window.event;
				if (evt.keyCode == 27) {
					hide('popDiv');
				}
			};
		</script>
		<script>
			$(document).ready(function(){
   
       // $("#popDiv").load("newIndex.php");
    });
		
		
		
		
		</script>
		
	</HEAD>
	<BODY>
	
		<div id="popDiv" class="ontop">
			<table border="1" id="popup">
				<tr>
					<td>
						This is can be used as a popup window
					</td>
				</tr>
				<tr>
					<td>
						Click Close OR escape button to close it
					<a href="#" onClickkk="hide('popDiv')">Close</a>
					</td>
				</tr>
			</table>
		</div>
		<CENTER>
			<h3>
				Simple popup div with disabled background
			</h3>
			<br/>
			<a href="#" onClick="pop('popDiv')">Click here to open a popup div</a>
		</CENTER>
	</BODY>
</HTML>


<script>
    window.onunload = refreshParent;
    function refreshParent() {
        window.opener.location.reload();
    }
</script>



<a href='#'>MY LINK</a>

<?php
$var = 'hello';

 echo $var; 
 echo "<script>alert('Welcome to Our site.')</script>";
 

 ?>
 
 
 
 