 

<?php 
if(isset($_SESSION['loginUserId'])){
		$sess_id = $_SESSION['loginUserId'];
		
	}

?>









 <style>
	.x_panel {
    width: 200%;
    padding: 10px 17px;
    display: inline-block;
    background: #fff;
    border: 1px solid #E6E9ED;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    column-break-inside: avoid;
    opacity: 1;
    transition: all .2s ease;
}
  
  </style>
  
  <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Vendors List:<small></small></h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">

                  <table align="center" width="1000" bgcolor="#FFCC99"  class="table table-bordered" width='70%'>
			<tr align="center">
			<td colspan="6"><h2>View All Vendors</h2></td>
			</tr>
			<tr align="center">
				<th>S No</th>
				<th>Vendor ID</th>
				<th>Name</th>
				<th>State</th>
				<th>Country</th>
				<th>gender</th>
				<th>Email</th>
				<th>Is Active</th>
				<th>Delete</th>
				</tr>
			<?php 
				include 'includes/dbconn.php';
				$i =0;
				$get_c = "select * from vendorreg ";
				$run_c = mysql_query($get_c, $conn);
				
				while($row_c = mysql_fetch_array($run_c)){
					
					$v_id = $row_c['name'];
					$v_fname = $row_c['comp_name'];
					$v_state	= $row_c['state'];
					$v_coun = $row_c['country'];
					$gender = $row_c['gender'];
					$email = $row_c['email'];
					$is_active = $row_c['is_active'];
					
			$i++;	
			
			?>
			
			<tr align="center">
			<td><?php echo $i;?></td>
			<td><?php echo $v_id;?></td>
			<td><?php echo $v_fname;?></td>
			<td><?php echo $v_state;?></td>
			<!--<td><img src="customer_photos/<?php echo $c_image;?>" height="80" width="80"></td> -->
			<td><?php echo $v_coun;?></td>
			<td><?php echo $gender;?></td>
			<td><?php echo $email;?></td>
			<td><?php echo $is_active;?></td>
			<td><a href="delete_customer.php?delete_c=<?php echo $c_id; ?>">Delete</td>
			
<?php } ?>
			
			<table>

                  </div>
                </div>
              </div>
