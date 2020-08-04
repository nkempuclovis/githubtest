<template>
  <section class="become-teacher">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="become-teacher__content">
                    <h2 class="become-teacher__title">Become A Student At HIHB</h2><!-- /.become-teacher__title -->
                    <p class="become-teacher__text">Once you've made the decision to become a student at HIHB,
                         you will need to apply to one specific school or college, or for dual enrollment in two schools or colleges.</p><!-- /.become-teacher__text -->
                    <h2 class="become-teacher__subtitle">Ways To Apply</h2><!-- /.become-teacher__subtitle -->
                    <p class="become-teacher__text">All applicants follow the same basic steps to apply to HIHB (although there are variations for transfer and international students).
                        <br> First, you need to fill out and submit the Common Application online or in person at one of our campuses.
                        <br> The application must include a soft copy of all accompanying, this can be uploaded and submited using the form here.
                        <br> For inperson applications a copy of all required documents must be submitted on campus</p><!-- /.become-teacher__text -->
                    <h2 class="become-teacher__subtitle">The Schools open for admission are:</h2><!-- /.become-teacher__subtitle -->
                    <div class="become-teacher__text" style="padding-bottom:40px">
                         <ul>
                    <li> <a href="#">School OF Health Sciences <span style="padding-left:5px; color:black"> (HND Program) </span></a>
                         </li>
                    <li> <a href="#">School OF Health Sciences <span style="padding-left:5px; color:black">(BSC Program) </span></a> </li>
                    <li> <a href="#">School OF Business Technology <span style="padding-left:5px; color:black">(HND Program) </span></a> </li>
                     <li>  <a href="#">School OF Business Technology <span style="padding-left:5px; color:black">(BSC Program) </span></a> </li>
                      <li>  <a href="#">School OF Education And Teaching <span style="padding-left:5px; color:black">(HND Program) </span></a> </li>
                       <li> <a href="#">School OF Education And Teaching <span style="padding-left:5px; color:black">(BSC Program) </span></a> </li>
                        <li> <a href="#">Study Abroad Program </a> </li>
                </ul>
                        
                        </div><!-- /.become-teacher__text -->
                </div><!-- /.become-teacher__content -->
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-6">
                <div class="become-teacher__form">
                    <div class="become-teacher__form-top">
                        <h2 class="become-teacher__form-title">
                            Apply For Admission
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
</section>
</template>

<script>
    export default {
        name: "BecomeTeacher"
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
