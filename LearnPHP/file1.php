<?php
$a=$_GET['num1'] ?? " " ;
$b=$_GET['num2'] ?? " " ;
echo $a;
echo $b;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <form action="" method="get">
            <input type="number" name="num1" />
            <input type="number" name="num2" />

            <button type="submit"x>Show</button>

        </form>
    </div>
</body>
</html>
