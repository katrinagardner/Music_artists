//var msg=" ";
var http = require("http");// run on the terminal node file and then open the browser and run http://localhost:2000 or http:// 127.0.0.1:2000
var server = http.createServer(function(request,response){
var msg=" ";
var path=request.url;
console.log(path);
var artists=["Katy_Perry","John_Legend","Taylor_Swift"]
var art_name = path.split("/")[2];
var album = path.split("/")[3];
var katy="http://localhost:2000/artists/Katy_Perry"
var john="http://localhost:2000/artists/John_Legend"
var taylor="http://localhost:2000/artists/Taylor_Swift"

if(path === "/artists" ){
  msg = "<html><body><h1>Music Artists</h1><ul><li><a href=" + katy + ">Katy Perry</a></li><li><a href=" + john + ">John Legend</a></li><li><a href=" + taylor + ">Taylor Swift</a></li></ul></body></html>";
}
else if(path === "/artists/" + artists[0]){
  msg="<html><body><h1>Albums</h1><ul><li><a href=" + katy + "/prism>Prism</a></li><li><a href=" + katy + "/teenagedream>Teenage Dream</a></li></ul></body></html>";
}

else if(path === "/artists/" + artists[1]){
  msg="<html><body><h1>Albums</h1><ul><li><a href=" + john + "/wakeup>Wake up!</a></li><li><a href=" + john + "/onceagain>Once Again!</a></li></ul></body></html>";
}

else if(path === "/artists/" + artists[2]){
  msg="<html><body><h1>Albums</h1><ul><li><a href=" + taylor + "/1989>1989</a></li><li><a href=" + taylor + "/red>Red</a></li></ul></body></html>";
}


else if(path === "/artists/" + art_name + "/" + album){
  if((art_name === artists[0]) && (album === "prism")){
    msg="<html><body><h1>Songs</h1><ul><li>Roar</li><li>Legendary Lovers</li><li>Birthday</li></ul></body></html>";
  }

  else if((art_name === artists[0]) && (album === "teenagedream")){
    msg="<html><body><h1>Songs</h1><ul><li>Teenage Dream</li><li>Firework</li><li>Pearl</li></ul></body></html>";
  }

  else if((art_name === artists[1]) && (album === "wakeup")){
    msg="<html><body><h1>Songs</h1><ul><li>Hard Times</li><li>Wake Up Everybody</li><li>Hang on in there</li></ul></body></html>";
  }

  else if((art_name === artists[1]) && (album === "onceagain")){
    msg="<html><body><h1>Songs</h1><ul><li>Save Room</li><li>Heaven</li><li>Show me</li></ul></body></html>";
  }

  else if((art_name === artists[2]) && (album === "1989")){
    msg="<html><body><h1>Songs</h1><ul><li>Shake it off</li><li>Blank Space</li><li>Style</li></ul></body></html>";
  }

  else if((art_name === artists[2]) && (album === "red")){
    msg="<html><body><h1>Songs</h1><ul><li>Stay Stay Stay</li><li>Red</li><li>I Almost Do</li></ul></body></html>";
}

else{
  msg="missing something"
}
}
response.end(msg);
});
server.listen(2000);
