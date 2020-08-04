<template>
  <div>
    <NavThree /> 
    <PageHeader title="Publication Details" image="/assets/images/inner-bg-1-1-1.jpg"/>
    <NewsDetails />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
   import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import NewsDetails from "../components/NewsDetails";
  export default {
    components: {NewsDetails, Footer, NavThree, PageHeader},
    head(){
      return {
        title: "HIHB | Publication Details"
      }
    }
  }
</script>
