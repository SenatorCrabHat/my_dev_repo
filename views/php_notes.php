<!doctype HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
</head>
<body>
<div class="PHPlayground">
		<p>
			<?php
			// the PHP tags to insert into HTML look like above and below. 
			// the concate operator is .
			echo "Hello," . " " . "world!";
			//switches are intersting flow control tools, that act like if else statesments.
			//switches without breaks will result in all cases being used.
			$myVar = 5;
			$statement = "the num is ";
			switch($myVar):
				case 1:
					echo $statement . $myVar;
					break;
				case 2:
					echo $statement . $myVar;
					break;
				case 3:
					echo $statement . $myVar;
					break;
				case 4:
					echo $statement . $myVar;
					break;
				case 5:
					echo $statement . $myVar;
					break;
			endswitch;
			//Changing arrays is just like you would think:
			$myArray = [1 , 2, 3, 4, 5];
			$myArray[0] = 10;
			echo $myArray[0];
			//however, deleting from arrays uses a special method: unset.
			unset($myArray[4]);
			//echo $myArray[4] should return an error. 
			//loops are seemingly like JS loops, with (variable: termination case: variable change){stuff here};
			for ($addOne = 0; $addOne < 3; $ $addOne++){
				$myArray[$addOne] = $myArray[$addOne] + 1;
			}
			echo $myArray;
			//foreach acts like for ( x in x) or even like map:
			foreach ($myArray as $unit) {
				echo "<li>$unit</li>";
			}
			//this should add an li to the page with each memeber of the array 
			?>
		</p>
	</div>	
	<script></script>
</body>
</html>