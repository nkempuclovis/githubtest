<template>
  <section class="become-teacher">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="become-teacher__content">
                    <h2 class="become-teacher__title"> Helping You Succeed</h2><!-- /.become-teacher__title -->
                    <p class="become-teacher__text">College is an investment in you – one of the biggest you will ever make.
If you need help to pay for college, we are here to guide and support you
as you explore your options.</p><!-- /.become-teacher__text -->
                    <h2 class="become-teacher__subtitle">Ways To Apply For Scholarship</h2><!-- /.become-teacher__subtitle -->
                    <p class="become-teacher__text">All applicants follow the same basic steps to apply to HIHB (although there are variations for transfer and international students).
                        <br> First, you need to fill out and submit the Common Application online or in person at one of our campuses.
                        <br> The application must include a soft copy of all accompanying documents, this can be uploaded and submited using the form here.
                        <br> For inperson applications a copy of all required documents must be submitted on campus</p><!-- /.become-teacher__text -->
                       
                        <a href="/assets/files/STEM complete  scholarships.pdf" target="blank">Complete Scholarship Application form</a> <br>
                        <a href="/assets/files/STEM partial scholarship.pdf" target="blank">Partial Scholarship Application form</a>
                  
                </div><!-- /.become-teacher__content -->
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-6">
                <div class="become-teacher__form">
                    <div class="become-teacher__form-top">
                        <h2 class="become-teacher__form-title">
                            Apply For Scholarship
                        </h2><!-- /.become-teacher__form-title -->
                    </div><!-- /.become-teacher__top -->
                    <form action="#" class="become-teacher__form-content contact-form-validated" novalidate="novalidate">
                        <input type="text" placeholder="First Name" name="name">
                          <input type="text" placeholder="Last Name" name="last name">
                        <input type="text" placeholder="Email Address" name="email">
                        <input type="text" placeholder="Phone Number" name="phone">
                        <input type="file"  id="myFile" name="filename" multiple>
                        
                        <button type="submit" class="thm-btn become-teacher__form-btn">Submit Application</button>
                    </form><!-- /.become-teacher__form-content -->
                    <div class="result text-center"></div><!-- /.result -->
                </div><!-- /.become-teacher__form -->
            </div><!-- /.col-lg-6 -->
        </div><!-- /.row --> 
    </div><!-- /.container -->
     <ScholarshipOne /> 
</section>
</template>

<script>
 import ScholarshipOne from "../components/ScholarshipOne";
    export default {
        name: "BecomeTeacher",

         components: { ScholarshipOne}
    }

   
</script>

<style scoped>

           
.become-teacher__text ul {
  list-style: none;
}

.become-teacher__text ul li::before {
  content: "\2022";
 
  color: #024794;
  font-size: 30px;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}


</style>
