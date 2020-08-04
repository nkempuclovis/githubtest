<template>
  <div>
    <NavThree />
    <PageHeader title="Admission" image="/assets/images/page-banner-1.jpg"/>
    <AdmissionComponent />
    <AdmissionRequirement /> 
   
    <div class="border-bottom"></div>
    
    <CallToAction />
    <Footer />
  </div>

</template>
<script>
  import NavThree from "../components/NavThree";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import AdmissionComponent from "../components/AdmissionComponent";
  import AdmissionRequirement from "../components/AdmissionRequirement";
  import VideoOne from "../components/VideoOne";
  import ClientsLogoOne from "../components/ClientsLogoOne";
  import Testimonial from "../components/Testimonial";
  import CallToAction from "../components/CallToAction";
  export default {
    components: {
      CallToAction,
      Testimonial,
      ClientsLogoOne,
      VideoOne,
      AdmissionRequirement,
      AdmissionComponent,
      Footer,
      PageHeader,
      NavThree
    },
    head(){
      return {
        title: "HIHB | About Us"
      }
    }
  }
</script>
