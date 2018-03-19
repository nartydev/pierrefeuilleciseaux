<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Carte de visite</title>
	<meta charset="utf-8"/>
    <meta description="Le beau petit panda roux"/>
    <meta name="viewport" content="width=device-width">
    <link href="https://fonts.googleapis.com/css?family=Chango" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="./index.css?d=<?php echo rand(0,10000000000000000) ?>">
    
</head>
<body>
    <div class="text-center title">Pierre, feuille, ciseaux</div>
    <div class="container heightImg">
        <div class="me">
            <div class="score"><i class="fa fa-user"></i> Score : <span class="scoreMe">0</span></div>
            <div class="resultMe"></div>
        </div>
        <div class="computer">
            <div class="score"><i class="fa fa-desktop"></i> Score : <span class="scoreBot">0</span></div>
            <div class="resultBot"></div>
        </div>
    </div>
    <div class="container">
        <div class="resultForMe"></div>
    </div>
    <div class="container">
        <div class="button-rock">
            Pierre
        </div>
        <div class="button-paper">
            Papier
        </div>
        <div class="button-scissors">
            Ciseaux
        </div>
    </div>
    <script src="./js/app.js?d=<?php echo rand(0,10000000000000000) ?>"></script>
</body>
</html>