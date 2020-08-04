<template>
  <div>
    <NavThree />
    <PageHeader title="Schools" image="/assets/images/inner-bg-1-1-1.jpg"/>
 
    <Schools />
     <CallToAction />
    <Footer />
  </div>
</template>
<script>

  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import AboutOne from "../components/AboutOne";
    import CallToAction from "../components/CallToAction";
    import Schools from "../components/Schools";
  
  export default {
    components: { CallToAction, Footer, NavThree, PageHeader, AboutOne, Schools},
    head(){
      return {
        title: "Schools"
      }
    }
  }
</script>