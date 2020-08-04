<template>
  <div>
    <NavThree />
    <PageHeader title="FAQ" image="/assets/images/inner-bg-1-1-1.jpg"/>
    <Faq />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import Faq from "../components/Faq";
  export default {
    components: {Faq, Footer, NavThree, PageHeader},
    head(){
      return {
        title: "HIHB | FAQ"
      }
    }
  }
</script>
