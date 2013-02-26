<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Twitter Bootstrap</title> 

<!-- ESTILO CSS -->
<link href="css/padrao.css" rel="stylesheet" type="text/css" /> 

<!-- ESTILO CSS REPONSIVO -->
<link href="css/reponsive.phone.css" media="screen and (max-width: 480px)" rel="stylesheet" type="text/css" /> 
<link href="css/reponsive.phone-to-tablet.css" media="screen and (min-width:481px) and (max-width: 767px)" rel="stylesheet" type="text/css" /> 
<link href="css/reponsive.tablet-to-desktop.css" media="screen and (min-width: 768px) and (max-width: 979px)" rel="stylesheet" type="text/css" /> 
<link href="css/reponsive.desktop_large.css" media="screen and (min-width: 1200px)" rel="stylesheet" type="text/css" /> 

<!-- JQUERY -->
<script src="js/jquery-1.7.2.min.js"></script> 
<script src="js/function.js"></script>   

</head>
<body>


     <p>Item até 480px</p>
     <div data-mobilefirst="767" data-async="2000"> 
         <!-- 
         <p>Item até 767px <img src="img/bg-1.jpg" /></p>  
         -->
     </div>
     <div data-mobilefirst="979" data-async="50">
         <!-- 
         <p>Item até 979px  <img src="img/bg-2.jpg" /></p>  
         -->
     </div>
     <div data-mobilefirst="1200">
         <!-- 
         <p>Item até 1200px  <img src="img/bg-3.jpg" /></p>  
         -->	
     </div> 


</body>
</html>