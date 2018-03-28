<?php 
include './connect.php';

$count = $pdo->query("SELECT count(*) FROM country")->fetchColumn();
echo $count; 

// Free result set
unset($count);

?>