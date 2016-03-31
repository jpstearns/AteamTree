$(window).load(function () {

var size = 1;
var button = 1;
var button_class = "gallery-header-center-right-links-current";
var normal_size_class = "gallery-content-center-normal";
var full_size_class = "gallery-content-center-full";
var $container = $('#gallery-content-center');
    
$container.isotope({itemSelector : '.project-list li'});


function check_button(){
	$('.gallery-header-center-right-links').removeClass(button_class);
	if(button==1){
		$("#filter-all").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==2){
		$("#filter-buildings").addClass(button_class);
		$("#gallery-header-center-left-title").html('buildings project-gallery');
		}
	if(button==3){
		$("#filter-design").addClass(button_class);
		$("#gallery-header-center-left-title").html('design project-gallery');
		}
	if(button==4){
		$("#filter-isolation").addClass(button_class);
		$("#gallery-header-center-left-title").html('isolation project-gallery');
		}	
}
	
function check_size(){
	$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
	if(size==0){
		$("#gallery-content-center").addClass(normal_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
		}
	if(size==1){
		$("#gallery-content-center").addClass(full_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
		}
	$container.isotope({itemSelector : '.project-list li'});
}


	
$("#filter-all").click(function() { $container.isotope({ filter: '.all' }); button = 1; check_button(); });
$("#filter-buildings").click(function() {  $container.isotope({ filter: '.buildings' }); button = 2; check_button();  });
$("#filter-design").click(function() {  $container.isotope({ filter: '.design' }); button = 3; check_button();  });
$("#filter-isolation").click(function() {  $container.isotope({ filter: '.isolation' }); button = 4; check_button();  });
$("#gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });


check_button();
check_size();
});