var posts=["2024/07/05/hello-world/","2024/07/05/7月5号视频附件表-SYSTEAM-PLAY/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };