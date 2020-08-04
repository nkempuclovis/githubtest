<template>
  <div>
    <NavThree />
    <PageHeader title="Course Details" image="/assets/images/inner-bg-1-1-1.jpg"/>
    <CourseDetails />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
 import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import CourseDetails from "../components/CourseDetails";
  export default {
    components: {CourseDetails, Footer, NavThree, PageHeader},
    head(){
      return {
        title: "Kipso | Course Details"
      }
    }
  }
</script>
