<?php

    if (isset($_POST['s-box'])) {

        $to = "hello@shamaliroshan.com";
        $from = $_REQUEST['email'];
        $name = $_REQUEST['name'];
        $subject = $_REQUEST['subject'];
        //    $number = $_REQUEST['number'];
        $cmessage = $_REQUEST['message'];


        if(!(empty($from) && empty($name) && empty($subject) && empty($cmessage))){

            $headers = "From: $from";
            $headers = "From: " . $from . "\r\n";
            $headers .= "Reply-To: ". $from . "\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


            $logo = 'img/logo.png';
            $link = '#';

            $body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
            $body .= "<table style='width: 100%;'>";
            $body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
            $body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
            $body .= "</td></tr></thead><tbody><tr>";
            $body .= "<td style='border:none;'><strong>Name:</strong> {$name}</td>";
            $body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
            $body .= "</tr>";
            $body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$subject}</td></tr>";
            $body .= "<tr><td></td></tr>";
            $body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";
            $body .= "</tbody></table>";
            $body .= "</body></html>";

            $send = mail($to, $subject, $body, $headers);

        }else{
            echo '<script type="text/javascript">giveAlert();</script>';
        }


    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175813532-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-175813532-1');
    </script>
    <script src="js/loader.js"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact me</title>

    <link rel="shortcut icon" href="img/favicon.png">
    <link rel="stylesheet" href="css/loading.css?v=1">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/fontawesome/css/all.css">
    <link rel="stylesheet" href="css/contact.css?v=6">
    <link rel="stylesheet" href="css/responsive/contact-responsive.css">
</head>
<body>
<div class="loader">
    <div class="loading">
        <span>Loading...</span>
    </div>
</div>

<header>
    <section id="header-area">
        <div class="header-width">
            <div class="row align-items-center">
                <div class="logo">
                    <a href="index.html">
                        <img src="img/logo.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div id="mobile-nav">
            <i class="fas fa-bars fa-3x" onclick="openNav()"></i>
        </div>
        <div id="myNav" class="overlay">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <div class="overlay-content">
                <a href="index.html">Home</a>
            </div>
        </div>
    </section>
</header>

<main>
    <section id="home-area">
        <div class="home-images"></div>
        <div id="home-container">
            <h3>Contact me</h3>
        </div>
    </section>
    <section id="content-area">
        <div id="message-info">
            <?php

                if($send == '1'){
                    echo "<h3 id='message-text-success'>Message send successfully</h3>";
                }else if($send == '0'){
                    echo "<h3 id='message-text-not-success'>Message does not send</h3>";
                }

             ?>
        </div>
        <div id="form-heading">
            <h2>Get in Touch</h2>
        </div>
        <div id="form-inputs">
            <form action="contact.php" method="post">
                <div id="form-inside">
                    <div>
                        <input type="text" name="name" id="name" placeholder="Enter your name">
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Enter email address">
                    </div>
                </div>
                <div>
                    <input type="text" name="subject" id="subject" placeholder="Enter Subject">
                </div>
                <div>
                    <textarea name="message" id="message" cols="30" rows="9" placeholder="Enter Message"></textarea>
                </div>
                <div id="form-button">
                    <button type="submit" name="s-box">Send Message</button>
                </div>
            </form>
        </div>
        <div id="contact-info">
            <div>
                <span>
                    <i class="fas fa-home fa-2x"></i>
                </span>
                <div>
                    <h3>191/A/3, Gonapola, western, SriLanka</h3>
                    <p>Sri Lanka</p>
                </div>
            </div>
            <div>
                <span>
                    <i class="fas fa-phone fa-2x"></i>
                </span>
                <div>
                    <h3>+94 75 273 6788</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                </div>
            </div>
            <div>
                <span>
                    <i class="fas fa-envelope fa-2x"></i>
                </span>
                <div>
                    <h3>hello@shamaliroshan.com</h3>
                    <p>send me your query anytime!</p>
                </div>
            </div>
        </div>
    </section>
</main>


<footer id="foot" class="footer-area show-on-scroll">
    <div id="footer-top">
        <div id="footer-container" class="align-items-center">
            <div id="footer-menu">
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="assignments.html">Assignment</a>
                    </li>
                </ul>
            </div>
            <div id="footer-social">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/shamal-iroshan-023485156/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/shamal_iroshan/">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=+94752736788">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/shamal34">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/12289913/shamal-iroshan">
                            <i class="fab fa-stack-overflow"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div id="copyright">
        <div id="footer-border"></div>
        <div>
            <p id="copyright-text">
                Copyright &copy;<script>
                document.write(new Date().getFullYear());
            </script>
                All rights reserved | This website is made with <i class="far fa-heart"></i> by Shamal</a>
            </p>
        </div>
    </div>
</footer>

<script src="js/navigation.js"></script>
<script src="js/overlay-navigation.js"></script>

<script>
    function giveAlert() {
        alert("please fill the form and try again");
    }
</script>

</body>
</html>