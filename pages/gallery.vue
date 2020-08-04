<template>
  <div>
    <NavThree />
    <PageHeader title="Gallery" image="/assets/images/page-banner-2.jpg"/>
    <Gallery /> 
    <Footer />
  </div>
</template>
<script>
  import Gallery from "../components/Gallery";
  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, NavThree, PageHeader, Gallery},
    head(){
      return {
        title: "HIHB | Gallery"
      }
    }
  }
</script>
