<template>
  <div>
    <NavThree />
    <PageHeader title="Academic Calendar" image="/assets/images/inner-bg-1-1-1.jpg"/>
    <Calendar />
     <CallToActionOne />
    <Footer />
  </div>
</template>
<script>

  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import Calendar from "../components/Calendar3";
   import CallToActionOne from "../components/CallToActionOne";
  
  export default {
    components: { Calendar, Footer, NavThree, PageHeader, CallToActionOne},
    head(){
      return {
        title: "Academic Calendar"
      }
    }
  }
</script>
