<?php
$mysqli = new mysqli(SAE_MYSQL_HOST_M,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB,SAE_MYSQL_PORT);
if($mysqli->connect_errno){
die("数据库连接失败:错误信息是{$mysqli->connect_error}");
}
$mysqli->query("set names utf8");

$sql = "SELECT * FROM `Project`";

$result = $mysqli->query($sql);
if($result){
    while( $row = $result->fetch_assoc()){
       $arr[] = $row;
    }

    $str = "";
    foreach ($arr as $value) {
    $str .= $value['message'] . "**";
    }
    echo $str;
}else{
  echo "fail";
}

$mysqli->close();
 ?>