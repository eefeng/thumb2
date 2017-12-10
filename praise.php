<?php
header('content-type: application/json;charset=utf-8');
class ConMysql {
    public  $serverName;
    public  $username;
    public  $password;
    public  $dbName;
    public  $con = null;

    public function __construct($serverName, $username, $password, $dbName){
        $this->serverName = $serverName;
        $this->username = $username;
        $this->password = $password;
        $this->dbName = $dbName;
    }

    public function connect() {
        try {
            $dsn = "mysql:host=$this->serverName;dbname=$this->dbName";
            $this->con = new PDO($dsn, $this->username, $this->password);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function update($sql) {
        if($this->con == null) {
            $this->connect();
        }

        $res = $this->con->exec($sql);

        $arr = array("res" => $res);
        echo json_encode($arr);

        $this->close();
    }

    public function close() {
        $this->con = null;
    }
}

class RealConn extends ConMysql {
    public function __construct($serverName, $username, $password, $dbName){
        parent::__construct($serverName, $username, $password, $dbName);
    }

    public function updateNum() {
        $sql = "UPDATE praise SET num=num+1 WHERE id=1";
        $this->update($sql);
    }
}


$praiseCon = new RealConn('localhost', 'root', '', 'thumb');
$praiseCon->updateNum();

?>