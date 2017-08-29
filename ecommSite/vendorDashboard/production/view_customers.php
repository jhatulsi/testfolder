 

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
                    <h2>Customer List:<small></small></h2>
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

                  <table align="center" width="794" bgcolor="#FFCC99"  class="table table-bordered" width='70%'>
			<tr align="center">
			<td colspan="6"><h2>View All customer</h2></td>
			</tr>
			<tr align="center">
				<th>S No</th>
				<th>Name</th>
				<th>Email</th>
				<th>State</th>
				<th>Country</th>
				<th>Delete</th>
				</tr>
			<?php 
				include 'includes/dbconn.php';
				$i =0;
				$get_c = "select * from customers";
				$run_c = mysql_query($get_c, $conn);
				
				while($row_c = mysql_fetch_array($run_c)){
					
					$c_id = $row_c['customer_id'];
					$c_fname = $row_c['customer_name'];
					//$c_lname	= $row_c['customer_lastname'];
					//$c_image = $row_c['customer_image'];
					$c_email = $row_c['customer_email'];
					$c_state = $row_c['c_state'];
					$c_country = $row_c['customer_country'];
					
			$i++;	
			
			?>
			
			<tr align="center">
			<td><?php echo $c_id;?></td>
			<td><?php echo $c_fname;?></td>
			<td><?php echo $c_email;?></td>
			<!--<td><img src="customer_photos/<?php echo $c_image;?>" height="80" width="80"></td> -->
			<td><?php echo $c_state;?></td>
			<td><?php echo $c_country;?></td>
			<td><a href="delete_customer.php?delete_c=<?php echo $c_id; ?>">Delete</td>
			
<?php } ?>
			
			<table>

                  </div>
                </div>
              </div>
