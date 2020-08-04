<template>
  <div>
    <NavThree />
    <PageHeader title="Tuition" image="/assets/images/inner-bg-1-1-1.jpg"/>
    <TuitionPage />
    <CallToAction />
    <Footer />
  </div> 
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import TuitionPage from "../components/TuitionPage";
  import CallToAction from "../components/CallToAction";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, CallToAction, TuitionPage, NavThree, PageHeader},
    head(){
      return {
        title: "tution"
      }
    }
  }
</script>

<style scoped>
  .block-title .block-title__title {
    display: none;
  }
</style>
