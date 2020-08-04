<template>
  <section class="course-category-three">
      <img src="/assets/images/circle-stripe.png" class="course-category-three__circle" alt="">
      <div class="container">
          <div class="block-title">
              <h2 class="block-title__title">Browse Our Programs <br>
                  From Top Schools</h2><!-- /.block-title__title -->
          </div><!-- /.block-title -->
          <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="course-category-three__single">
                      <img src="https://picsum.photos/270/304?random=1" alt="">
                      <div class="course-category-three__content">
                          <h3 class="course-category-three__title"><a href="#">Health Science </a></h3>
                          <!-- /.course-category-three__title -->
                          <p class="course-category-three__text">Over 6 Specialties</p>
                          <!-- /.course-category-three__text -->
                      </div><!-- /.course-category-three__content -->
                  </div><!-- /.course-category-three__single -->
              </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
              <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="course-category-three__single">
                      <img src="https://picsum.photos/270/304?random=2" alt="">
                      <div class="course-category-three__content">
                          <h3 class="course-category-three__title"><a href="#">Business Technology </a></h3>
                          <!-- /.course-category-three__title -->
                          <p class="course-category-three__text">Over 24 Specialties</p>
                          <!-- /.course-category-three__text -->
                      </div><!-- /.course-category-three__content -->
                  </div><!-- /.course-category-three__single -->
              </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
              <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="course-category-three__single">
                      <img src="https://picsum.photos/270/304?random=3" alt="">
                      <div class="course-category-three__content">
                          <h3 class="course-category-three__title"><a href="#">Education & Teaching</a></h3>
                          <!-- /.course-category-three__title -->
                          <p class="course-category-three__text">Over 7 Specialties</p>
                          <!-- /.course-category-three__text -->
                      </div><!-- /.course-category-three__content -->
                  </div><!-- /.course-category-three__single -->
              </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
              <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="course-category-three__single">
                      <img src="https://picsum.photos/270/304?random=4" alt="">
                      <div class="course-category-three__content">
                          <h3 class="course-category-three__title"><a href="#"> Language</a></h3>
                          <!-- /.course-category-three__title -->
                          <p class="course-category-three__text">Over 3 Programs</p>
                          <!-- /.course-category-three__text -->
                      </div><!-- /.course-category-three__content -->
                  </div><!-- /.course-category-three__single -->
              </div><!-- /.col-lg-3 col-md-6 col-sm-12 -->
          </div><!-- /.row -->
            <div class="col">
               <div class="col-lg-12">
               <div id="accordion">
     <div style="padding:5px">
  <div class="card">
    <div class="card-header bg-custom-1" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link btn-block" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <span style="color:white"> Health Science Specialties </span> 
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
                   <div class="views-field views-field-nothing" style="padding-top:10px" v-for="item in health" :key="item">
                    <span class="field-content">
                        <h4><a href="#" @click="showin(item)" data-toggle="modal" role="button" data-target="#exampleModalCenter"> {{ item }} <i class="fa fa-arrow-circle-right"></i> 
                        </a> </h4> 
                        </span>
                  </div>
        </div>
    </div>
  </div>
     </div>
      <div style="padding:5px">
  <div class="card">
    <div class="card-header bg-custom-1" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link btn-block  collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <span style="color:white"> Business and Trade Specialties </span>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
            <div class="views-field views-field-nothing" style="padding-top:10px" v-for="item in trade" :key="item">
                    <span class="field-content">
                        <h4><a href="#" @click="showin(item)" data-toggle="modal" role="button" data-target="#exampleModalCenter"> {{ item }}  <i class="fa fa-arrow-circle-right"></i> 
                        </a> </h4> 
                        </span>
                  </div>
        </div>
    </div>
  </div> 
      </div>
       <div style="padding:5px">
  <div class="card">
    <div class="card-header bg-custom-1" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         <span style="color:white"> Legal Assistance </span>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
          <div class="views-field views-field-nothing" style="padding-top:10px" v-for="item in legal" :key="item">
                    <span class="field-content">
                        <h4><a href="#" @click="showin(item)" data-toggle="modal" role="button" data-target="#exampleModalCenter"> {{ item }}  <i class="fa fa-arrow-circle-right"></i> 
                        </a> </h4> 
                        </span>
                  </div>
         </div>
    </div>
  </div>
       </div>
        <div style="padding:5px">
  <div class="card">
    <div class="card-header bg-custom-1" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
         <span style="color:white"> Management Specialties </span>
        </button>
      </h5>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
          <div class="views-field views-field-nothing" style="padding-top:10px" v-for="item in management" :key="item">
                    <span class="field-content">
                        <h4><a href="#" @click="showin(item)" data-toggle="modal" role="button" data-target="#exampleModalCenter"> {{ item }} Program <i class="fa fa-arrow-circle-right"></i> 
                        </a> </h4> 
                        </span>
                  </div>
         </div>
    </div>
  </div>
       </div>
        <div style="padding:5px">
  <div class="card">
    <div class="card-header bg-custom-1" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-block btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
         <span style="color:white"> Education and Technology </span>
        </button>
      </h5>
    </div>
    <div id="collapseFive" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
           <div class="views-field views-field-nothing" style="padding-top:10px" v-for="item in education" :key="item">
                    <span class="field-content">
                        <h4><a href="#" @click="showin(item)" data-toggle="modal" role="button" data-target="#exampleModalCenter"> {{ item }}  <i class="fa fa-arrow-circle-right"></i> 
                        </a> </h4> 
                        </span>
                  </div>
         </div>
    </div>
  </div>
       </div>
        <div style="padding:5px">
  <div class="card">
    <div class="card-header bg-custom-1" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link btn-block collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
         <span style="color:white"> Language </span>
        </button>
      </h5>
    </div>
    <div id="collapseSix" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
          <div class="views-field views-field-nothing" style="padding-top:10px" v-for="item in language" :key="item">
                    <span class="field-content">
                        <h4><a href="#" @click="showin(item)" data-toggle="modal" role="button" data-target="#exampleModalCenter"> {{ item }} Program <i class="fa fa-arrow-circle-right"></i> 
                        </a> </h4> 
                        </span>
                  </div>
         </div>
    </div>
  </div>
       </div>
</div>
               </div>
           </div>
           
         
      </div><!-- /.container -->

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header bg-primary">
        <h5 style="color:white" class="modal-title" id="exampleModalLongTitle">{{ item2}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style="color:white" aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="col-md-12">
        <div class="text-center">
        <h3 style="color:black"> Program Requirements </h3>
        </div>

         <table class="table table-striped">
    <thead>
      <tr>
        <th>Course</th>
        <th>Credit</th>
        <th>Prerequisites</th>
         <th>Minimum Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Course name</td>
        <td>4</td>
        <td>course name 2</td>
         <td>C-</td>
      </tr>
      <tr>
        <td>Course name</td>
        <td>4</td>
        <td>course name 2</td>
         <td>C-</td>
      </tr>
       <tr>
        <td>Course name</td>
        <td>4</td>
        <td>course name 2</td>
         <td>C-</td>
      </tr>
    </tbody>
  </table>

     <div class="text-center" style="padding:20px 5px">
        <h3 style="color:black"> {{ item2}} Sample Schedule </h3>
        </div>

          <table class="table table-striped">
   
    <tbody>
      <tr>
        <td></td>
        <td>Total</td>
        <td>Terms</td>
        <td></td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>

      </tr>
      <tr>
        <td></td>
        <td>Credit Hours</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
      </tr>
       <tr>
        <td style="color:blue">Subjects Required</td>
        <td></td>
        <td></td>
        <td></td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
       <tr>
        <td>Mathematics 115+, 116+, 215+, 216+</td>
        <td>16</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>-</td>
        <td>- </td>
        <td>- </td>
        <td>- </td>
      </tr>
       <tr>
        <td>English</td>
        <td>4</td>
        <td>4</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>- </td>
        <td>- </td>
        <td>- </td>
      </tr>
       <tr>
        <td>Economics</td>
        <td>4</td>
        <td>-</td>
        <td>4</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>- </td>
        <td>- </td>
        <td>- </td>
      </tr>
       <tr>
        <td style="color:blue"> Total </td>
        <td style="color:blue">12</td>
        <td style="color:blue">4</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>- </td>
        <td>- </td>
        <td>- </td>
      </tr>
    </tbody>
  </table>
        
      </div>
      </div>
    </div>
  </div>
</div>
      
  </section>
</template>

<script>
    export default {
        name: "CourseCatThree",
       data: () => ({
      health: ['Midwifery', 'Nursing', 
      'Medical Laboratory Technology', 'Physiotherapy',
       'Nutrition and Dietetics', 'Pharmacy Technology'],
       trade:['Accounting', 'Banking and Finance', 'Marketing',
        'Insurance', 'Micro Finance', 'Management', 'International Trade'],
        legal: ['Legal Assistance', 'Business Law', 'Land Law',
        'Custom and Transit','Tax Management', 'Stock Markey Career'],
        management: [ 'Assistant Management', 'Management of NGO`s', 'Project Management',
        'Human Resource', 'Quality Management', 'Logistic and Transportation Management',
         'Sport Management', 'Information System Management', 'Local Government Management',
          'Event Management', 'Port Shipping Management'],
          education: ['Didatics', 'Curriculum Development and Teaching',
           'Education Management and Administration', 'Special Education', 'Distance and Continuing Education',
           'Vocational Guidance and Counselling', 'Andragogy'],
           language: ['TOFEL', 'TOEIC', 'IELTS', 'For Education', 'For Business'],
      item2: ''
    }),

    methods: {
      showin(value) {
        this.item2 = value
      }
    }
    }
</script>

<style scoped>

.bg-custom-1 {
    background-color: #b95c00;
}

.nounderline {
  text-decoration: none !important
}



</style>
