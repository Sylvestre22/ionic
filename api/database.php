<?php
class Database{
    private static $dbHost = "sql25";
    private static $dbName = "dcu96794";
    private static $dbUsername = "dcu96794";
    private static $dbUserpassword = "509600008-leo";
    
    private static $connection = null;
    
    public static function connect()
    {
        if(self::$connection == null)
        {
            try
            {
            self::$connection = new PDO("mysql:host=" . self::$dbHost . ";dbname=" . self::$dbName , self::$dbUsername, self::$dbUserpassword, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8'/*,PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING*/));
            }
            catch(PDOException $e)
            {
                die($e->getMessage());
            }
        }
        return self::$connection;
    }
    
    public static function disconnect()
    {
        self::$connection = null;
    }

};

function checkInput($data) 
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
