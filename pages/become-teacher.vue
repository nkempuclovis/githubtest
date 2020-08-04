<template>
  <div>
    <NavThree />
    <PageHeader title="Become a Staff" image="/assets/images/inner-bg-1-1-1.jpg" />
    <BecomeTeacher />
    <TeamOne />
   
    <Footer />
  </div>
</template>
<script>

  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import BecomeTeacher from "../components/BecomeTeacher";
  import TeamOne from "../components/TeamOne";
  
  export default {
    components: {TeamOne, BecomeTeacher, Footer, NavThree, PageHeader},
    head(){
      return {
        title: "Kipso | Become Staff"
      }
    }
  }
</script>
