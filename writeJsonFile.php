<?php
/**
 * Created by IntelliJ IDEA.
 * User: jurez
 * Date: 06/04/2015
 * Time: 11:17
 */

//$myFile = "general.json";
//$fh = fopen($myFile, 'w') or die("can't open file");
//$stringData = $_GET["data"];
//fwrite($fh, $stringData);
//fclose($fh);
//

if(isset($_POST["saveData"])) {
//    $year = $_POST["year"];
//    $month = $_POST["month"];
//    $day = $_POST["day"];
//    $hour = $_POST["hour"];
//    $minutes = $_POST["minutes"];
//    $title = $_POST["title"];
//    $link = $_POST["link"];
//    $bgPhoto = $_POST["bgPhoto"];

    $jsonFile = "data.json";
    $fh = fopen($jsonFile, 'w') or die("can't open file");
//    $stringData = [$year, $month, $day, $hour];
    fwrite($fh, json_encode($_POST));
    fclose($fh);

    echo "saveSuccessful";
}
