<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
      include_once __DIR__ .'/common/meta-tags.php';
      include_once __DIR__ .'/common.php';
    ?>

    <title>Quizz | Summary</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0"
    />
    <link rel="stylesheet" href="./stylesheets/summary.css?v=<?=$version?>" />
  </head>
  <body>
    <div class="blog"></div>
    <div class="header">
      <a class="backImg" href="./index.php">
        <img src="./assets/svgs/back.svg" alt="" />
      </a>
    </div>
    <div class="totalScore">
      <p>Your Score</p>
      <div>
        <p class="totalPoints">100</p>
        <span>pt</span>
      </div>
    </div>
    <div class="resultCards">
      <div class="card1">
        <div class="points">
          <span class="material-symbols-outlined"> fiber_manual_record </span>
          <p>100%</p>
        </div>
        <p>Completion</p>
      </div>
      <div class="card2">
        <div class="points">
          <span class="material-symbols-outlined"> fiber_manual_record </span>
          <p>20</p>
        </div>
        <p>Total Question</p>
      </div>
      <div class="card3">
        <div class="points">
          <span class="material-symbols-outlined"> fiber_manual_record </span>
          <p class="correctQuestions">13</p>
        </div>
        <p>Correct</p>
      </div>
      <div class="card4">
        <div class="points">
          <span class="material-symbols-outlined"> fiber_manual_record </span>
          <p class="incorrectQuestions">7</p>
        </div>
        <p>Wrong</p>
      </div>
    </div>
    <script src="./script/quizz.js?v=<?=$version?>"></script>
    <script src="./script/blobSetting.js?v=<?=$version?>"></script>
  </body>
</html>
