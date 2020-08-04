<template>
  <header class="site-header site-header__home-three ">
      <div class="topbar-one">
          <div class="container">
              <div class="topbar-one__left">
                  <a href="#">STEM Higher Institue of Health & Business</a>
                  <a href="#">+237 678 924 746</a>
                   <a href="#">+237 671 177 552</a>
              </div><!-- /.topbar-one__left -->
             <div class="topbar-one__right">
                <!--  <a href="#">Login</a>
                  <a href="#">Register</a> -->
                     <a href="#"><i class="fab fa-facebook-square"></i></a>
                     
                      <a href="#"><i class="fab fa-instagram"></i></a>
              </div> <!-- /.topbar-one__right -->
          </div><!-- /.container -->
      </div><!-- /.topbar-one -->
      <nav class="navbar navbar-expand-lg navbar-light header-navigation stricky">
          <div class="container clearfix">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="logo-box clearfix">
                 <a class="navbar-brand" href="/">
                      <img src="/assets/images/hihb-logo5.jpg" class="main-logo"  alt="Awesome Image" />
                      
                 <!-- <span style="font-weight:bold; color:#ff944d"> HIHB </span> -->
                  </a> 
                  
                  <button class="menu-toggler" data-target=".main-navigation">
                      <span class="kipso-icon-menu"></span>
                  </button>
              </div><!-- /.logo-box -->
              <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="main-navigation"> 
                                          <ul class=" navigation-box">
                                              <li class="current">
                                                  <a href="/">Home</a>
                                                 
                                              </li>
                                              <li>
                                                  <a href="#">About</a>
                                                  <ul class="sub-menu">
                                                      <li><nuxt-link to="/about">About Page</nuxt-link></li>
                                                      <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                                        <!--  <li><nuxt-link to="/pricing">Pricing Plans</nuxt-link></li> -->
                                                      <li><nuxt-link to="/faq">FAQ'S</nuxt-link></li>
                                                  </ul><!-- /.sub-menu -->
                                              </li>
                                              <li>
                                                  <nuxt-link to="#">Prospective Students</nuxt-link>
                                                  <ul class="sub-menu">
                                                      <li><nuxt-link to="/admission">Adminssion</nuxt-link></li>
                                                      <li><nuxt-link to="/apply-now">Apply Now</nuxt-link></li>
                                                      <li><nuxt-link to="/majors">Specialities</nuxt-link></li>
                                                      <li><nuxt-link to="/programs">Programs</nuxt-link></li>
                                                      <li><nuxt-link to="/schools">Schools</nuxt-link></li>
                                                      <li><nuxt-link to="/tuition">Tuition</nuxt-link></li>
                                                      <li><nuxt-link to="/scholarships">Scholarships</nuxt-link></li>
                                                      <li><nuxt-link to="/calendar">Academic Calendar</nuxt-link></li>
                                                      <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                                                        </ul><!-- /.sub-menu -->
                                              </li>
                                              <li>
                                                  <nuxt-link to="#">Current Students</nuxt-link>
                                                  <ul class="sub-menu">
                                                       <li> <a href="https://elearning.africaeducationnetwork.com/" target="blank">E-learning Platform</a></li>
                                                      <li><a href="https://elearning.africaeducationnetwork.com/" target="blank">Email</a></li>
                                                       <li><a href="https://elearning.africaeducationnetwork.com/" target="blank">Library</a></li>
                                                      <li><nuxt-link to="/tuition">Tuition & Fees</nuxt-link></li>
                                                       <li><nuxt-link to="/student-life">Student Life</nuxt-link></li>
                                                      <li><nuxt-link to="/calendar">Calendar</nuxt-link></li>
                                                      <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                                                      </ul><!-- /.sub-menu -->
                                              </li>
                                               <li>
                                                  <nuxt-link to="/teachers">Faculty & Staffs</nuxt-link>
                                                  <ul class="sub-menu">
                                                      <li><a href="https://elearning.africaeducationnetwork.com/" target="blank">E-learning </a></li>
                                                      <li><a href="https://elearning.africaeducationnetwork.com/" target="blank">Email</a></li>
                                                      <li><a href="https://elearning.africaeducationnetwork.com/" target="blank">Library</a></li>
                                                      <li><nuxt-link to="/become-teacher">Human Resource</nuxt-link></li>
                                             <li><nuxt-link to="/teachers">Faculty</nuxt-link></li>
                                                       <li><nuxt-link to="/calendar">Calendar</nuxt-link></li>
                                                  </ul><!-- /.sub-menu -->
                                              </li>
                                              <li>
                                                  <nuxt-link to="/publication">Publications</nuxt-link>
                                                  <ul class="sub-menu">
                                                      <li><nuxt-link to="/publication">Published Papers</nuxt-link></li>
                                                   <!--   <li><nuxt-link to="/news-details">News Details</nuxt-link></li> -->
                                                  </ul><!-- /.sub-menu -->
                                              </li>
                                             
                                          </ul>
                                      </div><!-- /.navbar-collapse -->
              <div class="right-side-box">
                 <div class="header__social">
                     
                      <nuxt-link to="/contact">Contact</nuxt-link>
                  </div> 
              </div>  <!-- /.right-side-box -->
          </div>
          <!-- /.container -->
      </nav>
  </header>
</template>

<script>
    export default {
        name: "NavThree"
    }
</script>

<style scoped>



.main-logo{
      width: 70px;
     height: 60px;
}

</style>
