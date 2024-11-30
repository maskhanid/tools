<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Home | Termai</title>
    <meta name="description" content="Termai ▪︎ Rest API || New Era With Artificial Intelligence" />
    <meta name="keywords" content="Termai" />
    <meta name="author" content="service@termai" />
    <meta property="og:site_name" content="X-Termai" />
    <meta property="og:image" content="https://telegra.ph/file/35b9ec32bf79b8694ff82.jpg">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="https://telegra.ph/file/35b9ec32bf79b8694ff82.jpg" />
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sidebar.css">
    <link rel="stylesheet" href="css/slide.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://kit.fontawesome.com/27a95e6209.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="screen-size" id="screenSize">Loading...</div>
    <!-- preloader -->
    <div id="preloader">
        <div class="loder-box">
            <div class="battery"></div>
        </div>
    </div>
    <!-- end preloader -->
    <div id="layers">
       <div class="layer"></div>
       <div class="layer"></div>
       <div class="layer"></div>
       <div class="layer"></div>
       <div class="layer"></div>
    </div>
    <nav class="navbar">
        <div class="navbar-progress"></div>
        <div class="navbar-container">
            <div class="toggle-button" id="toggleButton" onclick="toggleSidebar()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a class="nav-title">Termai Api's</a>
            <div class="menu-button" id="menu-button">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="menu">
                <li>
                    <a href="#home" data-translate="home">Home</a>
                </li>
                <li>
                    <a href="#pricing" data-translate="pricing">Pricing</a>
                </li>
                <li>
                    <a href="#" data-translate="contact">Contact</a>
                </li>
                <li class="language-selector">
                    <button id="languageButton" onclick="toggleDropdown()">Language: EN</button>
                    <div id="languageDropdown" class="dropdown-content">
                      <a href="#" onclick="changeLanguage('EN')"> <p class="flag">🇬🇧</p>ENGLISH</a>
                      <a href="#" onclick="changeLanguage('ID')"> <p class="flag">🇮🇩 </p> BAHASA INDONESIA</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <div class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-toggle-button" id="sidebarToggleButton" onclick="toggleSidebar()">
          <span></span>
          <span></span>
        </div>
        <a class="logo sparkle-text"> Termai Api's
        </a>
      </div>
      <ul class="sidebar-menu">
        <li>
          <a href="/documentation" class="hover-link"><i class="fa-solid fa-terminal icon"></i>Documentation</a>
        </li>
        <li>
          <a href="/buy-key" class="hover-link"><i class="fa-solid fa-shopping-cart icon"></i>Get Api Key</a>
        </li>
      </ul>
      <div class="sidebar-section">
        <h4 class="section-title">Info</h4>
        <ul class="sidebar-menu">
          <li>
            <a href="#home" class="hover-link"><i class="fa-solid fa-house-fire icon"></i>Home</a>
          </li>
          <li>
            <a href="#stats" class="hover-link"><i class="fa-solid fa-chart-bar icon"></i>Stats</a>
          </li>
          <li>
            <a href="#pricing" class="hover-link"><i class="fa-solid fa-shopping-cart icon"></i>Pricing</a>
          </li>
          <li>
            <a href="#thanks-to" class="hover-link"><i class="fas fa-heart icon"></i>Thanks To</a>
          </li>
        </ul>
      </div>
      <div class="sidebar-footer">
        <p>&copy; 2024 Termai Api's</p>
      </div>
    </div>
    
    <main>
      <section id="home" class="slideshow-container">
        <div class="bg-img"></div>
        <div class="info-box1" data-translate="info-box1">
          <p>Kami menyediakan key <a class="gradient-text" href="/api/tools/key-checker?key=Bell409">Bell409</a> secara gratis dengan limit 850/jam, gunakan dengan bijak!</p>
        </div>
    
        <div class="slide left">
            <img src="image/api1.jpg" alt="Slide 1">
            <div class="slide-text">
                <h1>Dokumentasi ▪︎ Termai Api</h1>
                <p>Cek list endpoint dan code cara implementasinya.<p>
            </div>
        </div>
        <div class="slide center">
            <img src="image/api2.jpg" alt="Slide 2">
            <div class="slide-text">
                <h1>Pricing ▪︎ Termai Api</h1>
                <p>Pilih plan sesuai kebutuhan dengan <span class="gradient-text">harga terjangkau </span><p>
            </div>
        </div>
        <div class="slide right">
            <img src="image/api3.jpg" alt="Slide 3">
            <div class="slide-text">
                <h1>View Whatsapp Channel</h1>
                <p>Kode lengkap dan informasi lebih lanjut<p>
            </div>
        </div>
        
        <button class="nav-button prev" onclick="prevSlide()">&lt;</button>
        <button class="nav-button next" onclick="nextSlide()">&gt;</button>
        <div class="controls">
            <div class="control" onclick="showSlide(0)"></div>
            <div class="control" onclick="showSlide(1)"></div>
            <div class="control" onclick="showSlide(2)"></div>
        </div>
        
        <div id="slidebtn">
            <div id="documentation" class="slidebtn"><a data-translate="btn-documentation" href="/documentation">Documentation</a></div>
            <div id="pricing" class="slidebtn"><a data-translate="btn-pricing" href="#pricing">Pricing</a></div>
            <div id="channel" class="slidebtn"><a data-translate="btn-channel" href="https://whatsapp.com/channel/0029VaauxAt4Y9li9UtlCu1V">Whatsapp Channel</a></div>
        </div>
        <div class="overview-text">
            <div id="ov-documentation" class="overviewtext">
               <h1 class="animated-text">
                    <span class="subtle" data-translate="subtle1">Selamat datang di masa depan</span> 
                    <span class="gradient-text">TermAi</span>
                </h1>
                <p class="subtext" data-translate="subtle2">Jelajahi <span class="gradient-text"><a href="/documentation">Dokumentasi</a></span> dari Termai Api's</p>
            </div>
            <div id="ov-pricing" class="overviewtext">
               <h1 class="animated-text">
                    <span class="subtle" data-translate="subtle11">Buy and Get</span>
                    <span class="gradient-text" data-translate="subtle22">Api Key</span>
                </h1>
                <p class="subtext" data-translate="subtle12">Dapatkan kunci sesuai plan kebutuhan anda dengan <span class="gradient-text"> <a href="#pricing">Harga</a></span> terjangkau</p>
            </div>
            <div id="ov-channel" class="overviewtext">
               <h1 class="animated-text">
                    <span class="subtle" data-translate="subtle111">Dapatkan lebih banyak</span>
                    <span class="gradient-text" data-translate="subtle113">Informasi</span>
                </h1>
                <p class="subtext" data-translate="subtle114">Seputar update dan informasi tentang Api ini di <span class="gradient-text"> <a href="https://whatsapp.com/channel/0029VaauxAt4Y9li9UtlCu1V">Whatsapp Channel</a></span> kami</p>
            </div>
        </div>
      </section>
      <section id="stats" class="stats-section">
           <div id="layers">
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
            </div>
            <div class="container">
                <div class="stats-box">
                    <h3 class="sparkle-text">Total Hits</h3>
                    <p id="total-hits">0</p>
                </div>
                <div class="stats-box">
                    <h3 class="sparkle-text">Hits Today</h3>
                    <p id="hits-today">0</p>
                </div>
            </div>
      </section>
      <section class="pricing-section">
        <div id="pricing" class="container">
            <div class="sec-title">
                <h2 class="sparkle-text">Pricing</h2>
                <p>Choose the best plan for your needs</p>
            </div>
            <div class="pricing-slider">
                <div class="pricing-table">
                    <div class="pricing-content">
                        <div>
                            <h3>Free Plan</h3>
                            <h2>Rp.00.00</h2>
                            <p>(Always Free)</p>
                            <p>10 request/1jam</p>
                            <p>[ !No Key ] Tidak perlu input parameter key</p>
                        </div>
                    </div>
                </div>
                <div class="pricing-table">
                    <div class="pricing-content">
                        <div>
                            <h3>Starter Plan</h3>
                            <h2>Rp.5.000</h2>
                            <p>/month</p>
                            <p>Request 350/day</p>
                            <p>5/day img2video api call</p>
                            <p>10/day img2img/filters api call</p>
                            <p>5/day img2img/enlarger api call</p>
                            <p>25/day text2speech/elevenlabs</p>
                        </div>
                        <a href="https://wa.me/6283110928302?text=Hello,+I+have+buy+key:+[+Starter+Plan+]" class="btn btn-blue btn-effect">Get Started</a>
                    </div>
                </div>
                <div class="pricing-table">
                    <div class="pricing-content">
                        <div>
                            <h3>Basic Plan</h3>
                            <h2>Rp.10.000</h2>
                            <p>/month</p>
                            <p>Request 750/day</p>
                            <p>12/day img2video api call</p>
                            <p>20/day img2img/filters api call</p>
                            <p>10/day img2img/enlarger api call</p>
                            <p>55/day text2speech/elevenlabs</p>
                        </div>
                        <a href="https://wa.me/6283110928302?text=Hello,+I+have+buy+key:+[+Basic+Plan+]" class="btn btn-blue btn-effect">Get Started</a>
                    </div>
                </div>
                <div class="pricing-table">
                    <div class="pricing-content">
                        <div>
                            <h3>Standard Plan</h3>
                            <h2>Rp.20.000</h2>
                            <p>/bulan</p>
                            <p>Request 1650/day</p>
                            <p>20/day img2video api call</p>
                            <p>35/day img2img/filters api call</p>
                            <p>15/day img2img/enlarger api call</p>
                            <p>150/day text2speech/elevenlabs</p>
                        </div>
                        <a href="https://wa.me/6283110928302?text=Hello,+I+have+buy+key:+[+Standard+Plan+]" class="btn btn-blue btn-effect">Get Started</a>
                    </div>
                </div>
                <div class="pricing-table">
                    <div class="pricing-content">
                        <div>
                            <h3>Premium Plan</h3>
                            <h2>Rp.30.000</h2>
                            <p>/month</p>
                            <p>Request 3050/day</p>
                            <p>35/day img2video api call</p>
                            <p>55/day img2img/filters api call</p>
                            <p>35/day img2img/enlarger api call</p>
                            <p>400/day text2speech/elevenlabs</p>
                        </div>
                            <a href="https://wa.me/6283110928302?text=Hello,+I+have+buy+key:+[+Premium+Plan+]" class="btn btn-blue btn-effect">Get Started</a>
                    </div>
                </div>
                <div class="pricing-table">
                    <div class="pricing-content">
                        <div>
                            <h3>VIP Plan</h3>
                            <h2>Rp.50.000</h>Rp.50.000</h2>
                            <p>/3month</p>
                            <p>Request 3500/day</p>
                            <p>55/day img2video api call</p>
                            <p>75/day img2img/filters api call</p>
                            <p>50/day img2img/enlarger api call</p>
                            <p>800/day text2speech/elevenlabs</p>
                            <p>unlimited ai chat (gpt&logic-bell)</p>
                        </div>
                        <a href="https://wa.me/6283110928302?text=Hello,+I+have+buy+key:+[+Vip+Plan+]" class="btn btn-blue btn-effect">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="thanks-to" class="thanks-to-section">
            <div id="layers">
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
            </div>
        <div class="container text-center">
            <div class="thanks-content">
                <h2 class="head-text-container">Thanks To</h2>
                <div class="thanks-item">
                    <h3 class="sparkle-text">Allah SWT.</h3>
                    <p>The Almighty, the Most Merciful, whose blessings and guidance have made everything possible. To Him belongs all praise and gratitude.</p>
                </div>
                <div class="thanks-item">
                    <h3 class="sparkle-text">The great Prophet Muhammad SAW.</h3>
                    <p>Rasulullah, whose guidance and teachings inspire us every day.</p>
                </div>
                <div class="thanks-item">
                    <h3 class="sparkle-text">Rifza</h3>
                    <p>Developer and administrator of this website.</p>
                </div>
                <div class="thanks-item">
                     <h3 class="sparkle-text">Yanz</h3>
                     <p>Partner, contributions and support.</p>
                </div>
                <div class="thanks-item">
                    <h3 class="sparkle-text">Friends</h3>
                    <p>All friends who support us.</p>
                </div>
            </div>
        </div>
    </section>
    </main>
    
    <!-- Overlay -->
    <div class="overlay" id="overlay"></div>

    <footer id="footer">
        <div class="container">
            <div class="row text-center">
                <div class="footer-content">
                    <div class="footer-social">
                        <ul>
                            <li><a href="https://instagram.com/rifza.p.p"><i class="fa fa-instagram fa-3x"></i></a></li>
                            <li><a href="https://github.com/Rifza123"><i class="fa fa-github fa-3x"></i></a></li>
                            <li><a href="https://whatsapp.com/channel/0029VaauxAt4Y9li9UtlCu1V"><i class="fa fa-whatsapp fa-3x"></i></a></li>
                            <li><a href="https://youtube.com/channel/UCEyVimXfcw-vL3TLSNxlyRQ"><i class="fa fa-youtube fa-3x"></i></a></li>
                        </ul>
                    </div>
                    <p>Copyright &copy; 2024-2025 Design and Developed By @rifza.p.p<a href="https://github.com/Rifza123">©Azfir - Read backwards</a> </p>
                </div>
            </div>
        </div>
    </footer>
    <script src="js/interval.js"></script>
    <script src="js/slide.js"></script>
    <script src="js/sidebar.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>