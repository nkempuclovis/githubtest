<template>
  <div>
    <NavThree />
    <PageHeader title="Scholarships" image="/assets/images/inner-bg-1-1-1.jpg"/>
     <ScholarshipSubmit  />
    <CallToAction />
    <Footer />
  </div>
</template>
<script>

  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import ScholarshipSubmit from "../components/ScholarshipSubmit";
  
   import CallToAction from "../components/CallToAction";
  
  export default {
    components: { ScholarshipSubmit, Footer, NavThree, PageHeader, CallToAction},
    head(){
      return {
        title: "Scholarship"
      }
    }
  }
</script>
