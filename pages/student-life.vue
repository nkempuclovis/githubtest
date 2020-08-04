<template>
  <div>
    <NavThree />
    <PageHeader title="Life On Campus" image="/assets/images/inner-bg-1-1-1.jpg" />
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
        title: "Kipso | Gallery"
      }
    }
  }
</script>
