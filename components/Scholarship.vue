<template>
  <section class="about-one ">
      <img src="/assets/images/circle-stripe.png" class="about-one__circle" alt="">
      <div class="container text-center">
          <div class="block-title text-center">
              <h2 class="block-title__title"> Helping You <br> Succeed
                  </h2><!-- /.block-title__title -->
          </div><!-- /.block-title -->
          <div class="about-one__img">
             
             
          </div><!-- /.about-one__img -->
           <p class="about-one__text">
              College is an investment in you – one of the biggest you will ever make. <br>
If you need help to pay for college, we are here to guide and support you
as you explore your options.
               </p><!-- /.about-one__text -->
               <p>
                   Browse through the list below to learn more about our nationally ranked programs.
               </p>
           

           
         
         
      </div><!-- /.container -->
        <ScholarshipOne />    
  </section>

</template>


<script>
 import ScholarshipOne from "../components/ScholarshipOne";
    export default {
        name: "Majorsbanner",

        components: { ScholarshipOne}
    }
</script>

<style scoped>

.bg-custom-1 {
    background-color: #b95c00;
}

</style>
