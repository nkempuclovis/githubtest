<template>
  <div>
    <NavThree />
    <PageHeader title="Publications" image="/assets/images/inner-bg-1-1-1.jpg"/>
    <Publication />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
 
   import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import Publication from "../components/Publication";
  export default {
    components: {Footer, NavThree, PageHeader, Publication},
    head(){
      return {
        title: "Publications"
      }
    }
  }
</script>
