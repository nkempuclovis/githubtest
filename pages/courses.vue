<template>
  <div>
    <NavThree />
    <PageHeader title="Courses" image="/assets/images/inner-bg-1-1-1.jpg"/>
    <Course />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import Course from "../components/Course";
  export default {
    components: {Course, Footer, NavThree, PageHeader},
    head(){
      return {
        title: "Kipso | Course"
      }
    }
  }
</script>
