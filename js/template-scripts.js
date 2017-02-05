jQuery(document).ready(function($) {      
  // Owl Carousel 
  $(".carousel-default").owlCarousel({		
   	 navigation : true,
   	 slideSpeed : 300,
   	 paginationSpeed : 400,
   	 autoPlay : true,
     addClassActive: true,
     navigationText: ["&#xf007","&#xf006"],
   	 singleItem:true
  });  
  $(".carousel-fade-transition").owlCarousel({		
   	 navigation : true,
   	 slideSpeed : 300,
   	 paginationSpeed : 400,
   	 autoPlay : true,
     addClassActive: true,
     navigationText: ["&#xf007","&#xf006"],
   	 singleItem:true,
     transitionStyle : "fade"
  });
});