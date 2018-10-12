function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxy = "SOCKS5 127.0.0.1:9050; DIRECT";
    
    var site_list = [
      ".linkedin.com",
      ".trueflip.io",
      ".t.me",
      ".rutracker.org"
    ];

    for(var index = 0;index<site_list.length;index++){
         if(dnsDomainIs(host,site_list[index]) || host == site_list[index].substring(1)) {
            return proxy;
         }
    }
    
    return "DIRECT";
}
