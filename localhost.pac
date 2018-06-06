function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxy = "SOCKS5 127.0.0.1:9050; DIRECT";
    
    var site_list = [
      ".slack.com",
      ".slack-imgs.com",
      ".slack-edge.com",
      ".slack-msgs.com",
      ".linkedin.com",
      ".trueflip.io"
    ];

    for(var index = 0;index<site_list.length;index++){
         if(dnsDomainIs(host,site_list[index])) {
            return proxy;
         }
    }
    
    if (shExpMatch(host,"*.onion")) {
		return "SOCKS 127.0.0.1:9050";
	}
        
    return "DIRECT";
}
