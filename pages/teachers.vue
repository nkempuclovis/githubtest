<template>
  <div>
    <NavThree />
    <PageHeader title="Meet Our Team" image="/assets/images/inner-bg-1-1-1.jpg"/>
    <Teachers />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import Teachers from "../components/Teachers";
  export default {
    components: {Teachers, Footer, NavThree, PageHeader},
    head(){
      return {
        title: "Kipso | Staff"
      }
    }
  }
</script>
