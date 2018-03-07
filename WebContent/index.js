var data_arr = new Array();
var movies = new Array();
var favMovie = new Array();
const url ="http://localhost:8080/Moviez/";
const APIurl = "https://api.themoviedb.org/3/search/movie?api_key=628feb1e5d19aa715bd6f0824546c81d&query=";

function getData(){
      
	  //declaring variable to make an AJAX call
	  var xmlHttp = new XMLHttpRequest();
      //getting entered movie name by user
	  var movie = document.getElementById("usertext").value;

	  //URL of the movie search API

      //checking the status of the AJAX call
      xmlHttp.onreadystatechange = function() {
    	  
          if(this.readyState == 4 && this.status == 200){
              //storing the JSONObject returned as response
        	  var data= JSON.parse(this.responseText);
              
              var htmlText = '<div class="py-4">'
					         +'<div class="container">'
					  	     +'<div class="row">'
					  	     +'<div class="col-12">'
					  	     +'<h2>Search Results</h2>'
					  	     +'<hr>';
              //looping through the response data
              for ( var i = 0; i < data.results.length; i++ ) {
            	  //storing response for later use (to save and remove favorites)
            	  if(!movies.includes(movie))
        		    data_arr.push(data.results[i]);
            	  if (i%3 == 0) {
            		  htmlText	+= '<div class="row text-center">';
            	  }
            	  htmlText += '<div class="col-md-4 p-3">'
    	              + '<div id="cards" class="bg-primary card">'
    	              + '<img class="img-fluid rounded-circle w-50 h-25 mx-auto mt-3" src="http://image.tmdb.org/t/p/w500' + data.results[i].poster_path + '" alt="movie">'
    	              + '<div class="card-body">'
    	              + '<h4 class="card-title" id="i">'+ data.results[i].title + '</h4>'
    	              + '<div class="card-text">'
    	              + '<p class="p-rate"> Rating: ' + data.results[i].vote_average + '</p>'
    	              + '<p class="p-created"> Released on: ' + data.results[i].release_date + '</p>'
    	              + '<p class="p-desc"> Description: ' + data.results[i].overview + '</p>'
    	              + '</div>'
    	              + '<div class="card-footer">'
    	              + '<input type="submit" id="addFavi'+data.results[i].id+'" class="btn btn-dark" value="Add to Favorite" onclick="addFav(this)" articleElement-obj="'+data.results[i].id+ '">'
    	              + '</div>'
    	              + '</div>'
    	              + '</div>'
    	              + '</div>';
    	          if(i%3 == 2) {
    	        	htmlText += '</div>';
                   	htmlText += '<hr>';
    	          }
              }
              htmlText += '</div></div></div></div>';
              if(!movies.includes(movie))
                movies.push(movie);
             //making new elements with movie info after 'titlemovie1' tag
             document.getElementById('marker1').insertAdjacentHTML('afterend',htmlText);     
             
          }
      };//end of onreadystatuschange function

      //making AJAX call
      xmlHttp.open("GET",APIurl + movie,true);
      xmlHttp.send();

    }//end of getData function
	
	//function to add favorite movies
	function addFav(input) {
		//getting the title of selected movie
		 var element = input.getAttribute('articleElement-obj');
		 
		 if(favMovie.includes(element))
			 alert("Already Added!");
		 else {
			 
			 //looping through the stored data to check get all info of selected movie
			 for(var i=0;i<data_arr.length; i++) {
				 if(data_arr[i].id == element)
				 { 
		    		 //checking if favList is filled up-to 10 entries
					 if (favMovie.length<10) { 
						 
						 //declaring variable to make AJAX call
					     var xmlhttp = new XMLHttpRequest();
					    
					     //checking the response of AJAX call
					     xmlhttp.onreadystatechange = function() {
					    	 
					    	 //getting response of AJAX call and adding it to tag 'mydiv' in 'index.js'
					    	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					    		 var res = JSON.parse(xmlhttp.responseText);
					    		 
					    		 favMovie.push(element);	
					    		 alert((10-favMovie.length)+" movies left to add to favorite.");
					              var htmlText = '<div class="py-4">'
										         +'<div class="container">'
										  	     +'<div class="row">'
										  	     +'<div class="col-12">'
										  	     +'<h2>Favorite</h2>'
										  	     +'<hr>';
					              //looping through the response data
					              for ( var i = 0; i < res.movie.length; i++ ) {
					            	  //storing response for later use (to save and remove favorites)]
					            	  
					            		  htmlText	+= '<div class="row text-center">';
					            	  
					            	  htmlText += '<div class="col-md-12 my-2">'
					    	              + '<div id="cardsFav" class="bg-primary card">'
					    	              + '<img class="img-fluid rounded-circle w-50 h-25 mx-auto mt-3" src="http://image.tmdb.org/t/p/w500' + res.movie[i].poster_path + '" alt="movie">'
					    	              + '<div class="card-body">'
					    	              + '<h4 class="card-title" id="i">'+ res.movie[i].moviename + '</h4>'
					    	              + '<div class="card-text">'
					    	              + '<p class="p-rate"> Rating: ' + res.movie[i].vote_average + '</p>'
					    	              + '<p class="p-desc"> Description: ' + res.movie[i].overview + '</p>'
					    	              + '<br><input type="button" id="removeFavi'+res.movie[i].id+'" class="btn btn-dark" value="Remove Favorite" onclick="removeFav(this)" articleElement-obj="'+res.movie[i].id+'">'
					    	              + '</div>'
					    	              + '</div>'
					    	              + '</div>'
					    	              + '</div>'
					    	              + '</div>';
					    	         
					    	        	htmlText += '</div>';
					                   	htmlText += '<hr>';
					    	          
					              }
					              htmlText += '</div></div></div></div>';
					              
					             //making new elements with movie info after 'titlemovie1' tag
					             document.getElementById('fav').innerHTML=htmlText;
					             document.getElementById("addFavi" +element).classList.add("disabled");
					    	 }
					    	 
					     };//end of onreadystatuschange function
					     //setting key-value pairs to be sent over AJAX call
					     /*var json = {
					    		 "id" : data_arr[i].id,
					    		 "overview" : data_arr[i].overview,
					    		 "poster_path" : data_arr[i].poster_path,
					    		 "moviename" : data_arr[i].title,
					    		 "vote_average" : data_arr[i].vote_average	 
					    		 };
					    */
					     var json ="id="+  data_arr[i].id+"&overview=" + data_arr[i].overview
			    		 +"&poster_path='http://image.tmdb.org/t/p/w500"+  data_arr[i].poster_path
			    		 +"'&moviename=" + data_arr[i].title
			    		 +"&vote_average=" + data_arr[i].vote_average;
					     //making the AJAX call
					     
					     xmlhttp.open('GET', url+"AddMovie?"+json, true);
					     //xmlhttp.setRequestHeader("Content-Type", "application/json");
					     xmlhttp.send();
					     
					 }
					 else
						 alert("No more space!");
				 }
			}//end of for loop
	}
		    
	}//end of addFav function
	
	function removeFav(input) {
		 //getting the title of selected movie
		 var element= input.getAttribute('articleElement-obj');
		 //looping through the stored data to check get all info of selected movie
		 for(var i=0;i<data_arr.length; i++) {
		
			 if(data_arr[i].id == element)
			 { 		     
				 //declaring variable to make AJAX call
			     var xmlhttp = new XMLHttpRequest();
			     
			     xmlhttp.onreadystatechange = function(){
			      if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			       //favMovie.remove(element);
			       favMovie = favMovie.filter(item => item !== element)
			   	   var res = JSON.parse(xmlhttp.responseText);
			       document.getElementById('addFavi'+element).classList.remove("disabled");
			       document.getElementById('fav').innerHTML="";
			       alert((10-favMovie.length)+" movies left to add to favorite.");
		              var htmlText = '<div class="py-4">'
							         +'<div class="container">'
							  	     +'<div class="row">'
							  	     +'<div class="col-12">'
							  	     +'<h2>Favorite</h2>'
							  	     +'<hr>';
		              //looping through the response data
		              for ( var i = 0; i < res.movie.length; i++ ) {
		            	  //storing response for later use (to save and remove favorites)
		            	
		            		  htmlText	+= '<div class="row text-center">';
		            	  
		            	  htmlText += '<div class="col-12">'
				    	              + '<div id="cardsFav" class="bg-primary card">'
				    	              + '<img class="img-fluid rounded-circle w-50 h-25 mx-auto mt-3" src="http://image.tmdb.org/t/p/w500' + res.movie[i].poster_path + '" alt="movie">'
				    	              + '<div class="card-body">'
				    	              + '<h4 class="card-title" id="i">'+ res.movie[i].moviename + '</h4>'
				    	              + '<div class="card-text">'
				    	              + '<p class="p-rate"> Rating: ' + res.movie[i].vote_average + '</p>'
				    	              + '<p class="p-desc"> Description: ' + res.movie[i].overview + '</p>'
				    	              + '<br><input type="button" id="removeFavi'+res.movie[i].id+'" class="btn btn-dark" value="Remove Favorite" onclick="removeFav(this)" articleElement-obj="'+ res.movie[i].id+'">'
				    	              + '</div>'
				    	              + '</div>'
				    	              + '</div>'
				    	              + '</div>'
				    	              + '</div>';
		    	          
		    	        	htmlText += '</div>';
		                   	htmlText += '<hr>';
		    	          
		              }
		              htmlText += '</div></div></div></div>';
		              
		             //making new elements with movie info after 'titlemovie1' tag
		             document.getElementById('fav').innerHTML = htmlText;
			      }
			     };
			     var params = "id=" +data_arr[i].id;
			     xmlhttp.open('GET',url+"RemoveMovie?"+params,true);
			     xmlhttp.send();
			 
			 }
		   // document.getElementById("check").innerHTML=element;
		}
	}