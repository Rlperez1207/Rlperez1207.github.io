<script type="text/javascript" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

var p=0

var images=["https://www.hdwallpapers.in/walls/spongebob_squarepants_2-wide.jpg","https://hdwallsource.com/img/2016/11/spongebob-desktop-wallpaper-58840-60617-hd-wallpapers.jpg","https://wallpapercave.com/wp/wJBheCJ.jpg","http://hddesktopwallpapers.in/wp-content/uploads/2015/06/Spongebob-Wallpapers-HD-A7.jpg"];

$("#next").click(function(){
  p=(p+1)%images.length;
  $("#slide img").attr("src", images[p])
})

$("#last").click(function(){
  p=(p+3)%images.length;
  $("#slide img").attr("src", images[p])
})
