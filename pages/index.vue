<template>
  <div style='position:relative'>
    <header class="header header-1 border-none">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__logo" style=" margin-bottom: -15px">
            <div class="d-flex align-items-center">
              <img src="@/assets/inside/treaget-img.png" alt="logo" class="" width="66px" />
              <div>
                <h3 class="fs-4 fw-normal irsa">treaget</h3>
                <div class="text-treaget fs-5 fw-bold">تریگت</div>
              </div>
            </div>
          </div>
          <div class="header__nav">
            <ul class="header__nav-primary">
              <li>
                <a><i class="fad fa-home-alt"></i></a>
              </li>
              <li>
                <nuxt-link to="/">خانه</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/t/Rules">قوانین</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/t/contactUs">ارتباط با ما</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/t/home">ورود</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/t/signUp">ثبت نام</nuxt-link>
              </li>
            </ul>
            <span><i class="fas fa-times"></i></span>
          </div>

        </div>
      </div>
    </header>
    <section class="hero rtl">
      <div class="hero__wrapper">
        <div class="container">
          <div class="row align-items-lg-center">
            <div class="col-lg-6">
              <h1 class="main-heading color-black irsa">تریگـت</h1>
              <div class="paragraph">
                پلتفرم بازار خدمات فریلنسینگ
                <br />
                <p class="px-4 py-2 fs-5">
                  تریگت به عنوان یک پلتفرم فریلنسینگ امکان کسب درآمد از طریق
                  دورکاری را برای فریلنسر ها فراهم و همچنین ثبت درخواست خدمات و
                  پروژه را برای کارفرمایان و صاحبان کسب و کار ایجاد کرده است
                </p>
              </div>
              <div class="download-buttons">
                <div>
                  <a href="http://127.0.0.1:8000/staticApi/main/treaget.apk" download target="_blank"
                    class="google-play col-12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"
                      viewBox="0 0 452.43 473.97">
                      <defs>
                        <linearGradient id="linear-gradient" x1="1755.8" y1="3091.78" x2="1755.8" y2="1195.9"
                          gradientTransform="matrix(0.25, 0, 0, -0.25, -212.74, 772.95)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stop-color="#97d700" />
                          <stop offset="0.63" stop-color="#50bc25" />
                          <stop offset="1" stop-color="#009f64" />
                        </linearGradient>
                      </defs>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path class="cls-1"
                            d="M448.84,155.05c-6.94-5-20.42-11.87-46.33-18-7.74-1.84-16.63-3.62-26.75-5.2-12.76-2.08-27.56-3.93-44.65-5.47l-2.41-.21c-3.46-8.25-7.05-16.69-10.84-25.57-2-4.76-3.95-9.55-6-14.62-.24-.6-.5-1.23-.75-1.83-7.47-18.66-15.5-37.83-29-54.85C267,10.38,247.07,0,226.13,0s-40.81,10.41-56,29.26c-13.63,17-21.54,36.16-29,54.8l-.78,1.88c-2,5.07-3.95,9.86-6,14.62-3.8,8.88-7.37,17.32-10.85,25.57l-2.38.21c-17.15,1.54-31.95,3.39-44.73,5.49-10.12,1.62-18.95,3.41-26.68,5.21-25.82,6.17-39.41,13-46.33,18a8.42,8.42,0,0,0-3.35,8l2.25,16.85c3.4,25.2,7,54.8,13,85.31a471.88,471.88,0,0,0,18.51,69.14c3.18,8.88,6.72,17.6,10.67,26A203.89,203.89,0,0,0,120,443.68,201.43,201.43,0,0,0,335.11,442a204,204,0,0,0,74.17-84.46c3.05-6.77,5.86-13.69,8.45-20.83,18.43-50,25.54-105.14,31.4-149l3.25-25a8.37,8.37,0,0,0-3.54-7.76ZM226,122.2c-21,0-40.16.39-57.54,1.09.93-2.21,1.88-4.43,2.86-6.71q3.3-7.81,6.36-15.63a279.62,279.62,0,0,1,14.9-33.08,97.62,97.62,0,0,1,8.83-13.23c4.24-5.2,13.1-14.19,24.58-14.19s20.36,8.89,24.62,14.19a98.56,98.56,0,0,1,8.83,13.23A285.33,285.33,0,0,1,274.31,101c2,5.21,4.13,10.42,6.35,15.63,1,2.28,1.92,4.5,2.87,6.71-17.38-.7-36.52-1.09-57.57-1.09Z" />
                        </g>
                      </g>
                    </svg>
                    <div class="button-content px-2">
                      <h6 class="irsa">دریافت از <span>کافه بازار</span></h6>
                    </div>
                  </a>
                  <nuxt-link tag="a" to="/t/home/" class="apple-store col-12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"
                      class="bi bi-app-indicator" viewBox="0 0 16 16">
                      <path
                        d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                      <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                    <div class="button-content px-2">
                      <h6 class="irsa">ورود از طریق <span>نسخه ی وب</span></h6>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <div class="
                col-lg-6
                d-flex
                justify-content-center
                align-items-center
                mt-5
                
                d-none d-sm-block
              ">
              <div class="
                  my-questions-animation
                  d-flex
                  justify-content-center
                  align-items-center
                ">
                <img src="@/assets/inside/images/main/phone-01.png" alt="image" class="my-questions-img" />
              </div>
            </div>
            <div class="
                col-lg-6
                d-flex
                justify-content-center
                align-items-center
                mt-5
                
                d-block d-sm-none
              ">
              <div class="d-flex justify-content-center align-items-center ">
                <img src="@/assets/inside/images/main/phone-01.png" alt="image" class="" style="width:90%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--hero section end-->

    <!--feature section start-->
    <section class="feature" id="intro">
      <div class="container">
        <h1 class="fw-bold fs-1 rtl irsa">خدمات ارائه شده توسط تریگت</h1>
        <div class="row my-5 pt-5 rtl">
          <div class="col-lg-3 col-md-6">
            <div class="feature__box feature__box--1">
              <div class="icon icon-1">
                <i class="fad fa-laptop-code"></i>
              </div>
              <div class="feature__box__wrapper">
                <div class="feature__box--content feature__box--content-1">
                  <h3 class="irsa">برنامه نویسی و خدمات وب</h3>
                  <p class="paragraph dark">
                    طراحی سایت، اپلیکشن و نرم افزار، بازی سازی، هوش مصنوعی و
                    ربات و ...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="feature__box feature__box--2">
              <div class="icon icon-2">
                <i class="fad fa-paint-brush"></i>
              </div>
              <div class="feature__box__wrapper">
                <div class="feature__box--content feature__box--content-2">
                  <h3 class="irsa">طراحی گرافیک</h3>
                  <p class="paragraph dark">
                    طراحی لوگو، تدوین ویدئو، ست اداری، طراحی سه بعدی و انیمیشن و
                    ...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="feature__box feature__box--3">
              <div class="icon icon-3">
                <i class="fad fa-language"></i>
              </div>
              <div class="feature__box__wrapper">
                <div class="feature__box--content feature__box--content-3">
                  <h3 class="irsa">ترجمه و تولید محتوا</h3>
                  <p class="paragraph dark">
                    مترجمین، تایپیست ها، نویسندگان و ...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="feature__box feature__box--4">
              <div class="icon icon-4">
                <i class="fad fa-rocket-launch"></i>
              </div>
              <div class="feature__box__wrapper">
                <div class="feature__box--content feature__box--content-4">
                  <h3 class="irsa">دیجیتال مارکتینگ</h3>
                  <p class="paragraph dark">
                    سئو، دستیار مجازی، فروش و بازاریابی و...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--feature section end-->

    <!--video section start-->
    <div class="video mt-5" id="video">
      <div class="video__wrapper">
        <div class="container">
          <div class="video__play">
            <button type="button" @click="alertUpdate()">
              <i class="fad fa-play"></i>
            </button>
          </div>
          <div class="video__background">
            <img src="@/assets/inside/images/main/video-bg-1.png" alt="image" class="texture-1" />
            <img src="@/assets/inside/images/main/video-img.png" alt="image" class="phone" />
            <img src="@/assets/inside/images/main/video-bg-2.png" alt="image" class="texture-2" />
          </div>
        </div>
      </div>
    </div>
    <!--video section end-->

    <!--growth section start-->
    <section class="growth" id="feature">
      <div class="growth__wrapper">
        <div class="container">
          <h2 class="section-heading color-black irsa">چرا تریگت؟</h2>
          <div class="row">

            <div class="col-lg-6">
              <div class="growth__box">
                <div class="icon">
                  <i class="fad fa-search"></i>
                </div>
                <div class="content rtl">
                  <h3 class="irsa ">دسترسی سریع به نیروی کار متخصص</h3>
                  <p class="paragraph dark">
                    در کوتاه ترین زمان میتوانید با جستجوی پیشرفته به نیروی متخصص مدنظرتان را بیابید
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="growth__box">
                <div class="icon">
                  <i class="fad fa-hands-helping"></i>
                </div>
                <div class="content rtl">
                  <h3 class="irsa">پشتیبانی سریع، مطمئن و امن </h3>
                  <p class="paragraph dark">
                    نیروی پشتیبانی تریگت در تمامی مراحل شما را همراهی و و در صورت نیاز راهنمایی می کنند
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="growth__box">
                <div class="icon">
                  <i class="fad fa-chart-line"></i>
                </div>
                <div class="content rtl">
                  <h3 class="irsa">سیستم مدیریت پروژه</h3>
                  <p class="paragraph dark">
                    شما میتوانید در میز مدیریت خود مراحل پیشرفت پروژه ای که برون سپاری کرده اید را مطلع شوید
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="growth__box">
                <div class="icon">
                  <i class="fad fa-wallet"></i>
                </div>
                <div class="content rtl">
                  <h3>درگاه امن تبادلات مالی</h3>
                  <p class="paragraph dark">
                    پرداخت شما در بستری امن توسط تریگت نگهداری و در صورتی که نتیجه کار برای شما رضایت بخش باشد پرداخت
                    صورت می گیرد
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div class="">
            <div class="button__wrapper d-flex  justify-content-center align-items-center">
              <nuxt-link to="/t/signUp" class="
                  button
                  rounded-pill
                  d-flex
                  align-items-center
                  text-black
                  hover-white
                  border
                ">
                <div class="text-center">
                  ثبت نام <i class="fad fa-long-arrow-right"></i>
                </div>
              </nuxt-link>
              <nuxt-link to="/t/home/" class="
                  button
                  rounded-pill
                  d-flex
                  align-items-center
                  text-black
                  hover-white
                  border
                ">
                <div class="text-center">
                  ورود <i class="fad fa-long-arrow-right"></i>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--growth section end-->

    <!--step section start-->
    <!-- <section class="step">
      <div class="step__wrapper">
        <div class="container">
          <h2 class="section-heading color-black">
            Jumpstart your growth in just few clicks.
          </h2>
          <div class="row">
            <div class="col-lg-4">
              <div class="step__box">
                <div class="image">
                  <img
                    src="@/assets/inside/images/main/phone-01.png"
                    alt="image"
                  />
                </div>
                <div class="content">
                  <h3>EASY TO<span>Register.</span></h3>
                  <p class="paragraph dark">
                    Join the app in 3 easy steps and get started with your
                    progresso daily.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="step__box">
                <div class="image">
                  <img
                    src="@/assets/inside/images/main/phone-02.png"
                    alt="image"
                  />
                </div>
                <div class="content">
                  <h3>SIMPLE TO<span>Create.</span></h3>
                  <p class="paragraph dark">
                    Once you’re signed up you can create as many polls you want
                    to watch.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="step__box">
                <div class="image">
                  <img
                    src="@/assets/inside/images/main/phone-03.png"
                    alt="image"
                  />
                </div>
                <div class="content">
                  <h3>FUN TO<span>Measure.</span></h3>
                  <p class="paragraph dark">
                    Share your growth results with your friends and inspre
                    others.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="button__wrapper d-flex justify-content-center">
              <a
                href="#"
                class="
                  button
                  rounded-pill
                  d-flex
                  align-items-center
                  text-black
                  hover-white
                "
              >
                <div class="text-center">
                  دانلود از کافه بازار <i class="fad fa-long-arrow-right"></i>
                </div>
              </a>
              <a
                href="#"
                class="
                  button
                  rounded-pill
                  d-flex
                  align-items-center
                  text-black
                  hover-white
                "
              >
                <div class="text-center">
                  دانلود با لینک مستقیم <i class="fad fa-long-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!--step section end-->

    <!--related blog section start-->
    <!-- <section class="related-blog blog">
      <div class="related-blog__wrapper">
        <h2 class="section-heading color-black">
          Read latest news from our blog.
        </h2>
        <div class="blog__content">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <a href="blog-single.html">
                  <div class="blog__single blog__single--1">
                    <div class="blog__single-image">
                      <img
                        src="@/assets/inside/images/main/blog-img-1.png"
                        alt="image"
                      />
                    </div>
                    <div class="blog__single-info">
                      <h3>New features coming in 2020 to our app.</h3>
                      <h4>
                        12 <i class="fad fa-comment"></i><span>|</span>Dec 17,
                        2020
                      </h4>
                      <p class="paragraph dark">
                        Suisque metus tortor ultricies ac ligula neced eleifend
                        dales felise morbi nec tempor isvel ultricies lideula.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-8">
                <a href="blog-single.html">
                  <div class="blog__single blog__single--2">
                    <div class="blog__single-image">
                      <img
                        src="@/assets/inside/images/main/blog-img-2.png"
                        alt="image"
                      />
                    </div>
                    <div class="blog__single-info">
                      <h3>New features coming in 2020 to our app.</h3>
                      <h4>
                        12 <i class="fad fa-comment"></i><span>|</span>Dec 17,
                        2020
                      </h4>
                      <p class="paragraph dark">
                        Suisque metus tortor ultricies ac ligula neced eleifend
                        dales felise morbi nec tempor isvel ultricies lideula.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="blog.html" class="button rounded-pill text-black hover-white">
          <div class="">GO TO BLOG <i class="fad fa-long-arrow-right"></i></div>
        </a>
      </div>
    </section> -->
    <!--related blog section end-->

    <!--footer start-->
    <footer class="footer">
      <div class="footer__wrapper">
        <div class="container">
          <div class="row rtl">
            <div class="col-lg-4">
              <div class="footer__info">
                <div class="footer__info--logo">

                </div>
                <div class="footer__info--content">
                  <p class="paragraph dark">
                    تریگت بازار خدمات آنلاین به صورت برون سپاری و جمع سپاری است
                    که به کارفرمایان این امکان را می دهد تا پروژه های خود را
                    برون سپاری کنند و فریلنسر ها بتوانند با انجام پروژه و دریافت
                    سفارش ها کسب درآمد کنند.
                  </p>
                  <div class="social">
                    <ul>
                      <li class="twitter">
                        <a href="https://twitter.com/Treaget1?t=8bCbXwQ6eOY-qA7ngKme_g&s=09"><i
                            class="fab fa-twitter"></i></a>
                      </li>
                      <li class="youtube">
                        <a href="https://www.instagram.com/treaget/"><svg xmlns="http://www.w3.org/2000/svg" width="18"
                            height="18" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path
                              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                          </svg></a>
                      </li>
                      <li class="linkedin">
                        <a href="https://www.linkedin.com/company/treaget"><i class="fab fa-linkedin-in"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="footer__content-wrapper">
                <div class="footer__list">
                  <ul>
                    <li>لینک ها</li>
                    <li>
                      <nuxt-link to="/t/signUp">ثبت نام</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/t/home">ورود</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/t/explore">کاوش</nuxt-link>
                    </li>
                    <!-- <li><a href="#">ارتباط با ما</a></li> -->
                  </ul>
                </div>

                <div class="download-buttons">
                  <h5 class="rtl">ورود به پنل</h5>
                  <a href="http://127.0.0.1:8000/staticApi/main/treaget.apk" download target="_blank" class="google-play">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"
                      viewBox="0 0 452.43 473.97">
                      <defs>
                        <linearGradient id="linear-gradient" x1="1755.8" y1="3091.78" x2="1755.8" y2="1195.9"
                          gradientTransform="matrix(0.25, 0, 0, -0.25, -212.74, 772.95)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stop-color="#97d700" />
                          <stop offset="0.63" stop-color="#50bc25" />
                          <stop offset="1" stop-color="#009f64" />
                        </linearGradient>
                      </defs>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path class="cls-1"
                            d="M448.84,155.05c-6.94-5-20.42-11.87-46.33-18-7.74-1.84-16.63-3.62-26.75-5.2-12.76-2.08-27.56-3.93-44.65-5.47l-2.41-.21c-3.46-8.25-7.05-16.69-10.84-25.57-2-4.76-3.95-9.55-6-14.62-.24-.6-.5-1.23-.75-1.83-7.47-18.66-15.5-37.83-29-54.85C267,10.38,247.07,0,226.13,0s-40.81,10.41-56,29.26c-13.63,17-21.54,36.16-29,54.8l-.78,1.88c-2,5.07-3.95,9.86-6,14.62-3.8,8.88-7.37,17.32-10.85,25.57l-2.38.21c-17.15,1.54-31.95,3.39-44.73,5.49-10.12,1.62-18.95,3.41-26.68,5.21-25.82,6.17-39.41,13-46.33,18a8.42,8.42,0,0,0-3.35,8l2.25,16.85c3.4,25.2,7,54.8,13,85.31a471.88,471.88,0,0,0,18.51,69.14c3.18,8.88,6.72,17.6,10.67,26A203.89,203.89,0,0,0,120,443.68,201.43,201.43,0,0,0,335.11,442a204,204,0,0,0,74.17-84.46c3.05-6.77,5.86-13.69,8.45-20.83,18.43-50,25.54-105.14,31.4-149l3.25-25a8.37,8.37,0,0,0-3.54-7.76ZM226,122.2c-21,0-40.16.39-57.54,1.09.93-2.21,1.88-4.43,2.86-6.71q3.3-7.81,6.36-15.63a279.62,279.62,0,0,1,14.9-33.08,97.62,97.62,0,0,1,8.83-13.23c4.24-5.2,13.1-14.19,24.58-14.19s20.36,8.89,24.62,14.19a98.56,98.56,0,0,1,8.83,13.23A285.33,285.33,0,0,1,274.31,101c2,5.21,4.13,10.42,6.35,15.63,1,2.28,1.92,4.5,2.87,6.71-17.38-.7-36.52-1.09-57.57-1.09Z" />
                        </g>
                      </g>
                    </svg>
                    <div class="button-content px-2">
                      <h6 class="irsa">دریافت از <span>کافه بازار</span></h6>
                    </div>
                  </a>
                  <nuxt-link to="/t/home/" class="apple-store">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"
                      class="bi bi-app-indicator" viewBox="0 0 16 16">
                      <path
                        d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                      <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                    <div class="button-content px-2">
                      <h6 class="irsa">ورود از طریق <span>نسخه وب</span></h6>
                    </div>
                  </nuxt-link>

                </div>

              </div>

            </div>

          </div>
          <div class="row">
            <div class="d-flex flex-column align-items-start">
              <a href="http://127.0.0.1:8000/api/wallet/enamad/" class=" d-flex flex-column align-items-center border rounded-10 p-2" style="">
                <img src="@/assets/inside/images/enamad.png" style="width:70px">
                <div class="d-flex flex-column align-items-center pt-2">
                  <div>برای نمایش اینماد</div>
                  <div>روی تصویر کلیک کنید</div>
                </div>
              </a>
            </div>
            <div class="footer__copy">

              <h6>&copy; SARAN</h6>

              <!-- <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=215981&amp;Code=bxEKNoVWsgjvFYqTUtPG"><img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=215981&amp;Code=bxEKNoVWsgjvFYqTUtPG" alt="" style="cursor:pointer" id="bxEKNoVWsgjvFYqTUtPG"></a> -->
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--footer end-->
  </div>
</template>

<script>
export default {
  layout: "main",

  head() {
    return {
      link: [

        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/style-main.css",
        },

      ],
    };
  },
  data() {
    return {
      clientActive: 1,
      CarouselActive: 1,
    };
  },
  mounted() { },
  methods: {
    alertUpdate() {
      alert('در حال آپدیت')
    }
  }
  // beforeCreate() {
  //   require("~/assets/inside/css/all.min.css");
  //   require("~/assets/inside/css/style-main.css");
  // },
};
</script>

<style scoped>
.container {
  width: 100% !important;
  padding-right: 15px !important;
  padding-left: 15px !important;
  margin-right: auto !important;
  margin-left: auto !important;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px !important;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px !important;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px !important;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px !important;
  }
}

.button {
  background-color: inherit !important;
  box-shadow: none !important;
}

.hover-white:hover div {
  color: white !important;
}

.my-questions-animation {
  width: 100%;

  aspect-ratio: 1 / 1;
  border-radius: 50%;

  background: #f2026b;
  background: linear-gradient(45deg, #f23e02 0%, #ff7a7a 50%, #f23602 100%);
  background-size: 200% 200%;
  background-position: left bottom;

  -webkit-animation-name: animateGradient;
  animation-name: animateGradient;
  -webkit-animation-duration: 2.5s;
  animation-duration: 2.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.my-questions-img {
  z-index: 10;
  position: absolute;

  width: 28rem;

  filter: drop-shadow(0px 20px 10px rgba(75, 80, 84, 0.2));
  -webkit-filter: drop-shadow(0px 20px 10px rgba(75, 80, 84, 0.2));
  -moz-filter: drop-shadow(0px 20px 10px rgba(75, 80, 84, 0.2));
}
</style>