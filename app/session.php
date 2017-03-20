<?php
$API = new FatSecretAPI("98cdf7180c9c48baa094506039fe754d", "ad37336199c34fea9687bc5fc78a9e35");
$auth = Array(user_id=>12);

$sessionKey;
$API->ProfileRequestScriptSessionKey($auth, null, null, null, false, $sessionKey);

echo $sessionKey;
?>