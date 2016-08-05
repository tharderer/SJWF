var navbar ='<nav>\
		    	<a id = "slide-toggle">Share Jesus Without Fear </a>\
				    <ul id = "menu">\
				        <li><a href="index.html">Home</a></li>\
				        <li><a href="shareQuestions.html">Questions</a></li>\
				        <li><a href="shareScriptures.html">Scriptures</a></li>\
				        <li><a href="5CommitmentQuestions.html">Commitment Questions</a></li>\
				        <li><a href="theSinnersPrayer.html">The Sinners Prayer</a></li>\
				        <li><a href="questionsForNewBelievers.html">New Believer Questions</a></li>\
				        <li><a href="36ResponseScripts.html">Scripts</a></li>\
				    </ul>\
			</nav>';

var localScripts = '<script src="jquery-3.1.0.js"></script>\
    			<script type="text/javascript" src = "htmlLoader.js"></script>\
    			<script type="text/javascript" src = "velocity.js"></script>';

var cdnScripts = '<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js"></script>\
				    <script type="text/javascript" src = "htmlLoader.js"></script>\
				    <script type="text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>';

$(document).ready(function() {
    $('body').append(navbar);
    $('body').append(localScripts);
    $(window).resize(function(){
    	var navHeight = $('nav').height()+15;
    	console.log(navHeight);
    	$('#content').css('margin-top', navHeight + 'px');
    })
    
    // 
    // $('body').append(cdnScripts);
    var $toggle = $('#slide-toggle'),
    	$menu = $("#menu")
    $toggle.click(function(){
    	if($menu.is(':hidden')){
    		$menu.velocity('slideDown',{
    			duration: 500
    		})
    	}else{
    		$menu.velocity('slideUp',{
    			duration: 500
    		})
    	}
    })
});

