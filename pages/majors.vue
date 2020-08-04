<template>
  <div>
    <NavThree />
    <PageHeader title="Specialities" image="/assets/images/inner-bg-1-1-1.jpg"/>
     <MajorsBanner />
    <CallToAction />
    <Footer />
  </div>
</template>
<script>

  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import MajorsBanner from "../components/MajorsBanner";
   import CallToAction from "../components/CallToAction";
  
  export default {
    components: { MajorsBanner, Footer, NavThree, PageHeader, CallToAction},
    head(){
      return {
        title: "Majors"
      }
    }
  }
</script>
