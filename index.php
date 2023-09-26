<!DOCTYPE html>
<html lang="en">
  <head>

    <?php
      include_once __DIR__ .'/common/meta-tags.php';
      include_once __DIR__ .'/common.php';
    ?>

    <title>Quizz | Home</title>
    <link rel="stylesheet" href="./stylesheets/home.css?v=<?=$version?>" />
  </head>
  <body>
    <div class="blog"></div>

    <div class="header">
      <div class="backImg">
        <img src="<?=$assets_path?>/svgs/back.svg" alt="back" />
      </div>
      <p>Hello Kirat</p>
      <div class="profileAvatarImg">
        <img src="<?=$assets_path?>/profile/profileAvatar.png" alt="profilePic" />
      </div>
    </div>

    <div class="popularGames">
      <p>Popular</p>
      <div class="popularCards">
      <?php
      $category = json_decode(file_get_contents("data/category.json"),true);
      foreach($category['popular'] as $item){
        ?>
        <div class="card-container" id="<?=$item['category_id']?>">
          <p><?=$item['title']?></p>
          <div class="card">
            <img src="<?=$assets_path?>/svgs/<?=$item['icon']?>?v=<?=$version?>" alt="category_icon" />
          </div>
        </div>
        <?php 
      }
      ?>
      </div>
    </div>

    <div class="categories">
      <div class="explore">
        <p>Explore</p>
        <p>View all</p>
      </div>
      <div class="categoriesCard">
        <?php
        $category = json_decode(file_get_contents("data/category.json"), true);
        foreach($category['all'] as $item){
          ?>
          <div class="card-container" id="<?=$item['category_id']?>">
          <p><?=$item['title']?></p>
          <div class="card">
            <img src="<?=$assets_path?>/svgs/<?=$item['icon']?>?v=<?=$version?>" alt="category_icon" />
          </div>
        </div>
        <?php
        }
        ?>
      </div>
    </div>
    <script src="./script/blobSetting.js?v=<?=$version?>"></script>
    <script src="./script/navigation.js?v=<?=$version?>"></script>
  </body>
</html>
