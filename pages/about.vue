<template>
  <div>
    <NavThree />
    <PageHeader title="About" image="/assets/images/page-banner-1.jpg" />
    <AboutOne />
    <TeamAdmin />
   
   
    <div class="border-bottom"></div>
   
    <CallToActionOne />
    <Footer />
  </div>
 
</template>
<script>
  import NavThree from "../components/NavThree";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import AboutOne from "../components/AboutOne";
  import TeamAdmin from "../components/TeamAdmin";
 
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
     
      TeamAdmin,
      AboutOne,
      Footer,
      PageHeader,
      NavThree
    },
    head(){
      return {
        title: "HIHB | About Us"
      }
    }
  }
</script>
