<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
      include_once __DIR__ .'/common/meta-tags.php';
      include_once __DIR__ .'/common.php';
    ?>

    <title>Quizz | Play</title>
    <link rel="stylesheet" href="./stylesheets/play.css?v=<?=$version?>" />
  </head>
  <body>
    <div class="blog"></div>
    <div class="header">
      <a class="backImg" href="./index.php">
        <img src="./assets/svgs/back.svg" alt="" />
      </a>
      <div class="settingIcon">
        <img src="./assets/svgs/settings.svg" alt="" />
      </div>
    </div>
    <div class="quizCard">
      <div class="indicators">
        <div class="greenIndicator">
          <span>00</span>
          <div class="line"></div>
        </div>
        <div class="timerIndicator">
          <span>10</span>
        </div>
        <div class="redIndicator">
          <div class="line"></div>
          <span>00</span>
        </div>
      </div>
      <div class="questionsLeft">
        <p>Question 1/10</p>
      </div>
      <div class="questions">
        <p>loading...</p>
      </div>
    </div>
    <div class="quizzOptions">
      <div class="option1">
        <p>option 1</p>
        <div class="correctIcon">
          <img src="./assets/svgs/emptyOption.svg" alt="" />
        </div>
      </div>
      <div class="option2">
        <p>option 2</p>
        <div class="correctIcon">
          <img src="./assets/svgs/emptyOption.svg" alt="" />
        </div>
      </div>
      <div class="option3">
        <p>option 3</p>
        <div class="correctIcon">
          <img src="./assets/svgs/emptyOption.svg" alt="" />
        </div>
      </div>
      <div class="option4">
        <p>option 4</p>
        <div class="correctIcon">
          <img src="./assets/svgs/emptyOption.svg" alt="" />
        </div>
      </div>
    </div>
    <script src="./script/quizz.js?v=<?=$version?>"></script>
    <script src="./script/blobSetting.js?v=<?=$version?>"></script>
  </body>
</html>
