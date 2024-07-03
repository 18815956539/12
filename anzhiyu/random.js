var posts=["2024/06/30/hello-world/","2024/06/30/各大视频网站地址/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };