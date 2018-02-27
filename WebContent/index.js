
	function getData(){
      var xmlHttp = new XMLHttpRequest();
      var word= document.getElementById("usertext").value;
      alert(word);

      
      var url = "https://api.themoviedb.org/3/search/movie?api_key=628feb1e5d19aa715bd6f0824546c81d&query="+word;

      xmlHttp.onreadystatechange = function() {
    	  if(this.status == 404) {
    		  document.getElementById('titlemovie1').innerHTML = "404<br><h1>Movie Not Found</h1>";
    	  }
          if(this.readyState == 4 && this.status == 200){
              var myArr= JSON.parse(this.responseText);
              var data= myArr;
              var htmlText = '';
              for ( var i=0;i<data.results.length;i++ ) {
                  console.log(data.results[i].title);
                  htmlText += '<div class="div-conatiner">';
                  htmlText += '<div class="col_sm_4">';
                  htmlText += '<p class="p-name" id="i"> Name: ' + data.results[i].title + '</p>';
                  htmlText += '<p class="p-loc">Poster: <img src="http://image.tmdb.org/t/p/w500' + data.results[i].poster_path + '" width=200 height=300></p>';
                  htmlText += '<p class="p-desc"> Description: ' + data.results[i].overview + '</p>';
                  htmlText += '<p class="p-created"> Released on: ' + data.results[i].release_date + '</p>';
                  htmlText += '</div>';
                  htmlText += '<button onClick="addFav()" >Add to favourites</button>';
                  htmlText += '<script type="text/javascript" src="MovieServlet.java"></script>';
                  htmlText += '<input type="button" value="Remove Favourite" />';
                  htmlText += '<hr>';
              }
           document.getElementById('titlemovie1').insertAdjacentHTML('afterend',htmlText);     
          }
      };

      xmlHttp.open("GET",url,true);
      xmlHttp.send();

    }
	
	function addFav() {
		var xmlHttp = new XMLHttpRequest();
		
	}
