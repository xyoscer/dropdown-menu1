window.onload = function(){
			var menuliobj = document.getElementById('menuli');
			var menuli2obj = document.getElementById('menuli2');
			var menuli3obj = document.getElementById('menuli3');
			var third_menuobj = document.getElementsByClassName('third_menu');
			var sub_menuobj = document.getElementsByClassName('sub_menu');
			menuliobj.addEventListener("mouseover",menudown1,false);
			function menudown1(){ 				              
            sub_menuobj[0].style.display="block";                   
			}
			menuliobj.addEventListener("mouseout",menuup1,false);
			function menuup1(){ 				              
            sub_menuobj[0].style.display="none";
			}
			menuli2obj.addEventListener("mouseover",menudown,false);
			function menudown(){ 				              
            sub_menuobj[1].style.display="block";               
			}
			menuli2obj.addEventListener("mouseout",menuup,false);
			function menuup(){ 				              
            sub_menuobj[1].style.display="none";
			}
		menuli3obj.addEventListener("mouseover",menudown2,false);
		function menudown2(){
			third_menuobj[0].style.display = "block";
		}
		menuli3obj.addEventListener("mouseout",menuup2,false);
		function menuup2(){
			third_menuobj[0].style.display = "none";
		}
	}
