

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>MovieBiz</title>
	<!-- CSS IMPORT FOR PLUGIN -->
	<!-- CSS dependencies -->
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
	  <link rel="stylesheet" href="neon.css" type="text/css"> </head>
	<!-- CSS IMPORT FOR FONT -->
	<link href='https://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
	<link href='assets/fonts/font-awesome/css/font-awesome.min.css' rel='stylesheet' type='text/css'>
</head>
<body>
	<div class="py-5 text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="display-3 text-capitalize">MovieBiz</h1>
          <p class="lead text-muted">All your movies, one click away. </p>
        </div>
      </div>
    </div>
  </div>
  
  <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn my-2 my-sm-0 btn-primary" onClick="index.js/getData()">Search</button>
  </form>
        
  <div class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Color palette</h2>
          <hr>
          <div class="row text-center">
          
            <div class="col-md-4 p-3">
	          <div class="bg-primary card">
	            <img class="img-fluid rounded-circle w-75 mx-auto mt-3" src="assets/styleguide/people_5.jpg" alt="Card image">
	            <div class="card-body">
	              <h4 class="card-title" id="titlemovie1"></h4>
	              <p class="card-text" id="movie1"></p>
	            </div>
	          </div>
	        </div>
        
           <div class="col-md-4 p-3">
          <div class="bg-primary card">
            <img class="img-fluid rounded-circle w-75 mx-auto mt-3" src="assets/styleguide/people_5.jpg" alt="Card image">
            <div class="card-body">
              <h4 class="card-title" id="titlemovie2"></h4>
              <p class="card-text" id="movie2"></p>
            </div>
          </div>
        </div>
            <div class="col-md-4 p-3">
          <div class="bg-primary card">
            <img class="img-fluid rounded-circle w-75 mx-auto mt-3" src="assets/styleguide/people_5.jpg" alt="Card image">
            <div class="card-body">
              <h4 class="card-title" id="titlemovie3"></h4>
              <p class="card-text" id="movie3"></p>
            </div>
          </div>
        </div>
            <div class="col-md-4 p-3">
          <div class="bg-primary card">
            <img class="img-fluid rounded-circle w-75 mx-auto mt-3" src="assets/styleguide/people_5.jpg" alt="Card image">
            <div class="card-body">
              <h4 class="card-title" id="titlemovie4"></h4>
              <p class="card-text" id="movie4"></p>
            </div>
          </div>
        </div>
            <div class="col-md-4 p-3">
          <div class="bg-primary card">
            <img class="img-fluid rounded-circle w-75 mx-auto mt-3" src="assets/styleguide/people_5.jpg" alt="Card image">
            <div class="card-body">
              <h4 class="card-title" id="titlemovie5"></h4>
              <p class="card-text" id="movie5">.</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>


