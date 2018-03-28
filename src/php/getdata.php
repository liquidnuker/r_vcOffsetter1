<?php 
include './connect.php';

$offset = $_POST['f_offset'];
$limit = $_POST['f_limit'];

// with limit
$stmt = $pdo->prepare('SELECT * FROM country LIMIT ?, ?');
$stmt->bindParam(1, $offset, PDO::PARAM_INT);
$stmt->bindParam(2, $limit, PDO::PARAM_INT);
$stmt->execute();

$itemContainer = array();

if($stmt->rowCount() > 0){

  foreach ($stmt as $i) {
    array_push($itemContainer, array(
      'name' => $i['Name'],
      'region' => $i['Region']
    ));
  } unset($i);

  // print_r($itemContainer);
  // echo count($itemContainer); 
  echo json_encode($itemContainer); 

  // Free result set
  unset($stmt);

} else{
  echo "No records matching your query were found.";
}

?>