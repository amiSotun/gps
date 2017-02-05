<?php require_once "header.php" ?>
    <!-- MAIN -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYc9GyJs3hyq67uV5GMIr6ENWU-nKKuog&callback=initMap" async defer></script>
<script src="js/singleDevice.js"></script>
<style>
  html, body, #map {
    height: 100%;
    width: 100%;
  }
</style>
    <main role="main">
      <!-- Content -->
      <div class="background-primary padding text-center">
        <a href="/"><i class="icon-facebook_circle icon2x text-white"></i></a> 
        <a href="/"><i class="icon-twitter_circle icon2x text-white"></i></a>
        <a href="/"><i class="icon-google_plus_circle icon2x text-white"></i></a>
        <a href="/"><i class="icon-instagram_circle icon2x text-white"></i></a>                                                                        
      </div>
      <!-- MAP -->
      <!-- <div class="s-12 center" id="map">  	  
        <iframe width="100%" height="450" frameborder="0" style="border:0"></iframe>
      </div> -->
      
    </main>
    <div id="map"></div>
    
  
  <?php require_once "footer.php" ?>
 
