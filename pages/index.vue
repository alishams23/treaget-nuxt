<template>
  <div  >
    <NavbarMain />
  

    <div style='position:relative' >
      <section class="hero rtl ">
        <div class="hero__wrapper">
          <div class="container">
            <div class="row align-items-lg-center">
              <div class="col-lg-6">
                <h1 class="main-heading color-black mb-3 irsa">تریگـت</h1>
                <div class="fs-3 text-center">
                  پلتفرم برون سپاری خدمات برنامه نویسی و خدمات تحت وب
                  <br />
                  <p class="px-4 py-4 fs-5 text-right">
                    تریگت سعی دارد یک ارتباط حرفه ای را بین خدمات دهنده و کارفرما ایجاد کند و همچنین امکان کسب درآمد از طریق دورکاری را برای فریلنسر ها و ثبت درخواست خدمات و پروژه را برای کارفرمایان و صاحبان کسب و کار بوجود بیاورد.
                  </p>
                </div>
                <div class="download-buttons mb-3">
                  <div>
                    <nuxt-link to="/t/signUp" target="_blank"
                      class="google-play col-12">
                      <i class="fad fa-pen fs-3"></i>
                      <div class="button-content px-3">
                        <h6 class="irsa">  ثبت نام   <span class="fs-4 fw-bold"> رایگان شروع کنید </span></h6>
                      </div>
                    </nuxt-link>
                    <nuxt-link tag="a" to="/t/home/" class="apple-store col-12">
                      <i class="fad fa-sign-in fs-2"></i>
                      <div class="button-content px-3">
                        <h6 class="irsa">  از قبل اکانتی دارم <span class="fs-4 fw-bold">ورود </span></h6>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
  
              <div class="col-lg-6 d-none d-lg-block">
                <div class="
                  
                  d-flex
                  justify-content-end
                  align-items-end
                  mt-5
                  
         
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
    </div>
   
    <!--hero section end-->

    <!--feature section start-->
    <section class="feature " id="intro">
      <div class="container">
        <h1 class="fw-bold fs-1 rtl irsa"> خدمات پرطرفدار تریگت</h1>
        <div class="row my-5 pt-5 rtl">
          <div class="col-lg-3 col-md-6">
            <div class="feature__box feature__box--1">
              <div class="icon icon-1">
                <i class="fad fa-laptop-code"></i>
              </div>
              <div class="feature__box__wrapper">
                <div class="feature__box--content feature__box--content-1">
                  <h3 class="irsa"> خدمات وب و سئو</h3>
                  <p class="paragraph dark">
                    طراحی وبسایت - خدمات سئو - ربات های خزنده وب - وردپرس - ui,ux
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="feature__box feature__box--2">
              <div class="icon icon-2">
                <i class="fad fa-mobile"></i>
              </div>
              <div class="feature__box__wrapper">
                <div class="feature__box--content feature__box--content-2">
                  <h3 class="irsa">نرم افزار و اپلیکیشن</h3>
                  <p class="paragraph dark">
                    اپ های اندروید و ios - اپلیکشن های دسکتاپ - بازی سازی
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="feature__box feature__box--3">
              <div class="icon icon-3">
                <i class="fad fa-lock"></i>
              </div>
              <div class="feature__box__wrapper">
                <div class="feature__box--content feature__box--content-3">
                  <h3 class="irsa">امنیت و پشتیبان</h3>
                  <p class="paragraph dark">
                    devops - cloud - حفاظت از  داده - تست امنیت
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="feature__box feature__box--4">
              <div class="icon icon-4">
                <i class="fad fa-robot"></i>
              </div>
              <div class="feature__box__wrapper">
                <div class="feature__box--content feature__box--content-4">
                  <h3 class="irsa"> مهندسی داده و هوش مصنوعی</h3>
                  <p class="paragraph dark">
                    ماشین لرنینگ - پردازش داده - توسعه چت بات
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--feature section end-->
<div></div>
    <!--video section start-->
    <div class="video mt-5 d-none d-lg-block" id="video">
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
          <div class="d-none d-lg-block">
            <div class="button__wrapper d-flex   justify-content-center align-items-center">
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
    <Footer />
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
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/tailwind.css"
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