<?php
require_once 'headers.php';
$conn = new mysqli('sql25', 'dcu96794', '509600008-leo', 'dcu96794');

if ($_SERVER['REQUEST_METHOD'] === 'GET'){
      // echo "GET";
      if(isset($_GET['id'])){
              $id = $conn->real_escape_string($_GET['id']);
              $sql = $conn->query("SELECT * FROM connexion WHERE id = $id");
              $data = $sql->fetch_assoc();
      }else {
              # code...
              $data = array();
                $sql = $conn->query("SELECT * FROM connexion ");
                while ($d = $sql->fetch_array()) {
                        # code...
                        $data[] = $d;
                }
      
        }
        exit(json_encode($data));
        
}

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
      // echo "POST";

      $data = json_decode(file_get_contents('php://input'));
      $sql = $conn->query("INSERT INTO connexion (name, address, phone) VALUES ('".$data->name."','".$data->address."', '".$data->phone."')");
      if($sql){
              $data->id = $conn->insert_id;
              exit(json_encode($data));
      }else {
              # code...
              exit(json_encode(array('status'=> 'error')));
      }

}

if ($_SERVER['REQUEST_METHOD'] === 'PUT'){
       // echo "PUT";
       $id = null;
       if(isset($_GET['id'])){
              $id = $conn->real_escape_string($_GET['id']);
             $data = json_decode(file_get_contents("php://input"));
              $sql = $conn->query("UPDATE  connexion SET name ='".$data->name."' , address = '".$data->address."' , phone ='".$data->phone."' WHERE id = $id");
              if($sql){
                      exit(json_encode(array('status' => 'success')));
                }else {
                      # code...
                      exit(json_encode(array('status' => 'error')));
                }
        }

}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE'){
       // echo "DELETE";
       $id = null;

       if(isset($_GET['id'])){
        $id = $conn->real_escape_string($_GET['id']);
        $sql = $conn->query("DELETE FROM connexion WHERE id = $id");
                if($sql){
                        exit(json_encode(array('status' => 'success')));
                }else {
                        # code...
                        exit(json_encode(array('status' => 'error')));

                }
        }

}