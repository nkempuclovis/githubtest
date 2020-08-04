<template>
  <div>
    <NavThree />
    <PageHeader title="Apply Now" image="/assets/images/inner-bg-1-1-1.jpg"/>
    <ApplyNow />
     <CallToActionOne />
    <Footer />
  </div>
</template>
<script>

  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import ApplyNow from "../components/ApplyNow";
   import CallToActionOne from "../components/CallToActionOne";
  
  export default {
    components: { ApplyNow, Footer, NavThree, PageHeader, CallToActionOne},
    head(){
      return {
        title: "HIBH | Become Teacher"
      }
    }
  }
</script>
