function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var site_list = [
      "slack.com",
      "slack-imgs.com",
      "slack-edge.com",
      "slack-msgs.com"
    ];

    for(var index = 0;index<site_list.length;index++){
         if(host == site_list[index]) {
            return "SOCKS5 127.0.0.1:9050";
         }
    }
    
    return "DIRECT";
}
