<footer class="mother-footer">
        <div class="scroll-up" onclick="scrollup()">

            <div class="charesetab">&#9650</div>
            <p class="ersall-be-bala"> ارسال به بالا </p>
        </div>
        <div class="eshterak-footer">
            <div class="eshterack-text">
            <p class="eshterak-footer-p">برای در یافت آخرین لسیت قیمت محصولات ما شماره تلفن همراه خود را وارد کنید</p>
        </div>
            <form action="" class="form-footer">
				<input type="number" name="" id="" placeholder="تلفن همراه خود را وارد کنید" class="eshterac-number">
                <input type="button" value="ارسال" class="eshterac-number-button">
                
                
            </form>
        </div>

        <div class="footer">
            <div class="custom-shape-divider-top-1634464976">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill">
                    </path>
                </svg>
            </div>
            <div class="container-footer">


                <div class="sec1footer">
                    <img src="https://daneshavaran.com/wp-content/uploads/2021/10/logo-danesh-avaran.png" alt="" class="logo-img">
                
                   
                        <?php

                        $defaults = array(
                            'theme_location'  => '',
                            'menu'            => 'فهرست اصلی',
                            'container'       => 'ul',
                            'container_class' => 'collapse navbar-collapse pull-left',
                            'container_id'    => '',
                            'menu_class'      => 'footer-ul',
                            'menu_id'         => '',
                            'echo'            => true,
                            'fallback_cb'     => 'wp_page_menu',
                            'before'          => '',
                            'after'           => '',
                            'link_before'     => '',
                            'link_after'      => '',
                            'items_wrap'      => '<ul class="footer-ul">%3$s</ul>',
                            'depth'           => 1,
                            'walker'          => ''
                        );

                        wp_nav_menu( $defaults );

                        ?>

                </div>
                <div class="sec2footer">
                    <div class="sec2footer-part1">
                        <p>
                            شركت دانش آوران، متخـــــصص سخت افزار و نرم افزار و مـــحتوای آموزشی الکترونیک بوده که از
                            ســـال
                            1374 فعالیت رسـمی خود را آغاز کرده است. دانــــش آوران از سال 1391 ارائـــه دهــــنده
                            محـصولات
                            آموزشی پیشـرفته مانند بـــرد هوشمند، نرم افزار کمــــک آموزشی و… می‌باشد. این شرکت با بالغ
                            بر 25
                            سال تجربه و کادری مجرب محصولات گوناگون بسیاری را روانه بازار نمــــوده است. شما می‌توانید
                            محصولات شرکت دانش آوران را در سایت تادکالا مشاهده و تهیه نمایید.
                        </p>
                    </div>
                    <div class="sec2footer-part2">
                        <div class="mother-nemad">
                            <div class="nemad-footer1">

                            </div>
                            <div class="nemad-footer2">

                            </div>
                            <div class="nemad-footer3">

                            </div>
                        </div>
                        <p>مارا در شبکه های اجتماعی دنبال کنید</p>
                        <div class="social-mother">
                            <img src="https://daneshavaran.com/wp-content/uploads/2021/10/instagram.png" alt="" class="social social-instagram">
                            <img src="https://daneshavaran.com/wp-content/uploads/2021/10/whats-up.png" alt="" class="social social-whats-up">
                            <img src="https://daneshavaran.com/wp-content/uploads/2021/10/telegram.png" alt="" class="social social-telegram">
                            <img src="https://daneshavaran.com/wp-content/uploads/2021/10/linkdin.png" alt="" class="social social-linkdin">
                            <img src="https://daneshavaran.com/wp-content/uploads/2021/10/aparat.png" alt="" class="social social-aparat">
                            <img src="https://daneshavaran.com/wp-content/uploads/2021/10/youtube.png" alt="" class="social social-youtube">
                        </div>
                    </div>

                    <div class="sec2footer-part3">
                        <h4 class="header-footer-hr">آدرس</h4>
                        <p>
                            <br>مشهد بلوار خیام حدفاصل چهار راه سجاد و ارشاد ساختمان پست
                            بانک (مرکز توسعه واحدهای فناور) طبقه +6

                        </p>
                        <h4 class="header-footer-hr">تلفن های تماس </h4>
                        <p > 0513-7055520-21 0513-7679650 0513767913 0513-7679194 </p>
                        <h4 class="header-footer-hr">ایمیل </h4>
                        <P>info@daneshavaran.com</P>
                    </div>
                </div>
            </div>
            <p class="down-the-footer">تمام حقوق مادی و معنوی این سایت متعلق به شرکت دانش آوران خراسان می باشد</p>
            
            
        </div>
    </footer>
     <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KB856XD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri()?>/js/custom.js"> </script>
<script async src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<?php wp_footer(); ?>
</body>

</html>