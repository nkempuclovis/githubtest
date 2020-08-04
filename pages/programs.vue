<template>
  <div>
    <NavThree />
    <PageHeader title="Programs" image="/assets/images/inner-bg-1-1-1.jpg" />
     <Program />
    <CallToAction />
    <Footer />
  </div>
</template>
<script>

  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import Program from "../components/Program";
   import CallToAction from "../components/CallToAction";
  
  export default {
    components: { Program, Footer, NavThree, PageHeader, CallToAction},
    head(){
      return {
        title: "Programs"
      }
    }
  }
</script>
