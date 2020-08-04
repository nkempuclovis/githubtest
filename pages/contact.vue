<template>
  <div>
    <NavThree />
    <PageHeader title="Contact"  image="/assets/images/inner-bg-1-1-1.jpg"/>
    <Contact />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
 import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import Contact from "../components/Contact";
  export default {
    components: {Contact, Footer, NavThree, PageHeader},
    head(){
      return {
        title: "HIHB | Contact"
      }
    }
  }
</script>
