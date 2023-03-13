<template>
  <header class="bg-white d-flex align-items-center main-container border-bottom " style="position:fixed;">
    <div class="header_inner d-flex align-items-center navbar-left">
      <div class="left-side d-flex align-items-center">
        <!-- Logo -->


        <div @click="slideBarActivator" class="d-lg-none px-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <div class="d-none d-sm-block d-sm-block ">
          <img src="@/static/icon.png" style="width: 50px" class="shadow-2" />
        </div>
        <div class="d-none d-sm-block d-sm-block"><img src="@/assets/inside/images/treaget2.png" class="mx-3 pt-1"
            style="width: 61px"></div>
      </div>

      <div class="right-side lg:pr-4 d-flex align-items-center">
        <!-- upload -->
        <div class="drop  -color-lighter drop--down">
          <button> <a id="addPost" class="
          ms-3
            irsa
            rounded-18
            bg-treaget
            p-2
            shadow-2
            bg-red
            d-none d-sm-block
             btn-animation-shadow
          ">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-plus"
                viewBox="0 0 16 16">
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </a></button>

          <div class="drop__content  -transition-slide-in">


            <div class="drop-list -size-large  -position-left -border-rounded">
              <button class="drop-list__btn " v-if="$store.state.ServiceProvider == true">
                <nuxt-link to="/t/addworksample" class="d-flex  mx-3 justify-content-between align-items-center"
                  href="">

                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="transform: scale(0.8)"
                    fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path
                      d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                  </svg>

                  <div class="text-sm ">
                    افزودن نمونه کار
                  </div>
                </nuxt-link>
              </button>
              <button class="drop-list__btn" v-if="$store.state.ServiceProvider == true">
                <nuxt-link to="/t/addservices" class="d-flex  mx-3 justify-content-between align-items-center" href="">

                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="transform: scale(0.8)"
                    fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                    <path
                      d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                  </svg>

                  <div class="text-sm ">
                    افزودن خدمات
                  </div>
                </nuxt-link>

              </button>
              <button class="drop-list__btn" v-if="$store.state.ServiceProvider == true">
                <nuxt-link to="/t/addcv" class="d-flex  mx-3 justify-content-between align-items-center" href="">

                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="transform: scale(0.8)"
                    fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                    <path
                      d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>

                  <div class="text-sm ">
                    افزودن رزومه
                  </div>
                </nuxt-link>

              </button>
              <button class="drop-list__btn" v-if="$store.state.ServiceProvider == false">
                <nuxt-link to="/t/addRequest" class="d-flex  mx-3 justify-content-between align-items-center" href="">

                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                    class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                  </svg>

                  <div class="text-sm ">
                    افزودن درخواست
                  </div>
                </nuxt-link>

              </button>
            </div>
          </div>
        </div>

        <nuxt-link to="/t/desk/notification"
          class="ms-3 p-2 rounded-18 d-none d-sm-block d-sm-block shadow-2 btn-animation"
          style="background-color: rgba(255, 255, 255, 0.4);">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="black" class="bi m-1 bi-bell"
            viewBox="0 0 16 16">
            <path
              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
        </nuxt-link>

        <a class="ms-3 p-2 me-lg-5 me-2  rounded-18 d-sm-block  btn-animation" @click="$router.go(-1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
        </a>
        <nuxt-link to="/t/chat" class="p-1   rounded-full d-block d-sm-none bg-treaget treaget-shadow ">
          <i class="fa fa-paper-plane text-white p-2"></i>
        </nuxt-link>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    slideBarActivator() {
      document.getElementById('wrapper').classList.add("sidebar-active")
    }
  }
};
</script>

<style lang="scss">

$dropArrowOffset: 2px;
$dropArrowRadius: 7px;
$dropMenuBorderRadius: 10px;
$dropSafeZoneOverlap: 10px;
$dropAnimationSpeedMultiplier: 1;

/**********************
 * Drop Block
 **********************/

.drop {
  cursor: pointer;
  display: inline-block;
  min-width: $dropArrowRadius * 2;
  overflow: visible;
  position: relative;
  text-align: center;

  // Fixes a font rendering issue in Safari



  &.is-disabled {
    cursor: not-allowed;
  }
}

/**********************
 * Drop Content Element
 **********************/

.drop__content {
  & {
    position: absolute;
    visibility: hidden;
    width: 100%;
    
  }

  // Position depends on the current drop variation.
  .drop--down & {
    top: 100%
  }

  .drop--up & {
    bottom: 100%
  }

  // Make visible when drop is open.
  .drop:not(.is-disabled).is-open &,
  .drop:not(.is-disabled):hover & {
    visibility: visible;
  }

  // Fade In Transition Modifier

  &.-transition-fade-in {
    opacity: 0;
    transition: visibility 0s linear, opacity 0.25s * $dropAnimationSpeedMultiplier ease-in;
    transition-delay: 0.1s;
  }

  .drop.is-open &.-transition-fade-in,
  .drop:hover &.-transition-fade-in {
    opacity: 1;
    transition-delay: 0s;
  }

  // Slide In Transition Modifier

  &.-transition-slide-in {
    opacity: 0;
    transition: visibility 0s linear, opacity 0.25s * $dropAnimationSpeedMultiplier ease, transform 0.25s * $dropAnimationSpeedMultiplier ease;
    transition-delay: 0.1s;
  }

  .drop--up &.-transition-slide-in {
    transform: translateY(-10px)
  }

  .drop--down &.-transition-slide-in {
    transform: translateY(10px)
  }

  .drop.is-open &.-transition-slide-in,
  .drop:hover &.-transition-slide-in {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0s;
  }
}

/**********************
 * Drop Arrow
 **********************/



/**********************
 * Drop List
 **********************/

.drop-list {
  & {
    min-width: 100%;
    background-color: rgb(255, 255, 255);
    
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 0;
    padding: 5px;
    position: absolute;
    white-space: nowrap;
  }



  // Outside effects
  .drop--down & {
    top: 100%;
  }

  .drop--up & {
    bottom: 100%;
  }

  // Pull Modifiers
  &.-position-left.-pull-left {
    margin-right: $dropArrowRadius * 1.5
  }

  &.-position-left.-pull-right {
    margin-right: -$dropArrowRadius * 1.5
  }

  &.-position-center.-pull-left {
    margin-left: -$dropArrowRadius * 1.5
  }

  &.-position-center.-pull-right {
    margin-left: $dropArrowRadius * 1.5
  }

  &.-position-right.-pull-left {
    margin-left: -$dropArrowRadius * 1.5
  }

  &.-position-right.-pull-right {
    margin-left: $dropArrowRadius * 1.5
  }

  // Position Modifier
  &.-position-center {
    left: 50%;
    transform: translateX(-50%)
  }

  &.-position-left {
    right: 0
  }

  &.-position-right {
    left: 0
  }

  // Size Modifier
  &.-size-medium {
    width: 150px
  }

  &.-size-large {
    width: 225px
  }

  // Rounded Borders Modifier
  &.-border-rounded {
    border-radius: $dropMenuBorderRadius
  }

  // Safe Zone Element

  .drop--down &::before,
  .drop--up &::after {
    content: " ";
    height: $dropArrowRadius + $dropArrowOffset + $dropSafeZoneOverlap;
    left: 0;
    position: absolute;
    width: 100%;
  }

  .drop--down &::before {
    bottom: 100%
  }

  .drop--up &::after {
    top: 100%
  }
}

/**************************
 * Drop List Item Element
 **************************/

.drop-list__item {
  display: block;
}

/**************************
 * Drop List Button Element
 **************************/

.drop-list__btn {
  border-radius: 5px;
  cursor: pointer;
  display: block;
  font-weight: 450;
  outline: none;
  padding: 4px;
  width: 100%;
}

.drop-list__btn.is-selected {
    background-color: rgba(237, 237, 237, 0.541);

}

.drop-list__btn:hover {
    background-color: rgba(241, 241, 241, 0.541);

}
</style>