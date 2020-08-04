<template>
  <section class="team-one team-one__become-teacher">
      <div class="container d-none  d-md-block">
          <div class="block-title text-center">
              <h2 class="block-title__title">Admission Requirements + Deadlines 
                  </h2><!-- /.block-title__title -->
          </div><!-- /.block-title -->
         <div class="row ">
  <div class="col-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Freshment</a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Transfer Students</a>
      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">International Students</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">HND Program</a>
       <a class="nav-link" id="v-pills-programs-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-programs" aria-selected="false">BSC Program</a>
   
    </div>
  </div>

  <div class="col-9">
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
         <Requirementfreshment /> 
      </div>
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
           <RequirementTransfer /> </div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
           <RequirementInternational /> 
      </div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
          <RequirementHND /> 
      </div>
      <div class="tab-pane fade" id="v-pills-programs" role="tabpanel" aria-labelledby="v-pills-programs-tab">
         bachelor goes here
      </div>
    </div>
  </div>
</div><!-- /.row -->
      </div><!-- /.container -->

       <div class="container d-block d-md-none"> <!-- container mobile -->
          <div class="block-title text-center">
              <h2 class="block-title__title">Admission Requirements + Deadlines 
                  </h2><!-- /.block-title__title -->
          </div><!-- /.block-title -->
         <div class="row ">

            <div id="accordion">
    <div class="card">
      <div class="card-header">
        <a class="card-link" data-toggle="collapse" href="#collapseOne">
          Collapsible Group Item #1
        </a>
      </div>
      <div id="collapseOne" class="collapse show" data-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
        Collapsible Group Item #2
      </a>
      </div>
      <div id="collapseTwo" class="collapse" data-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
          Collapsible Group Item #3
        </a>
      </div>
      <div id="collapseThree" class="collapse" data-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
 
  </div><!-- /.row -->
      </div><!-- /.container -->
  </section>
</template>

<script>
import Requirementfreshment from "../components/Requirementfreshment";
import RequirementTransfer from "../components/RequirementTransfer";
import RequirementInternational from "../components/RequirementInternational";
import RequirementHND from "../components/RequirementHND";

    export default {
        name: "AdmissionRequirement",

         components: {
      Requirementfreshment,
      RequirementTransfer,
      RequirementInternational,
      RequirementHND }

        
    }

</script>

<style scoped>
.nav-pills .nav-link.active, .nav-pills .show>.nav-link
 {
    background-color:#03073d;
}

.requirement ul {
  list-style: none;
}

.requirement ul li::before {
  content: "\2022";
 
  color: #024794;
  font-size: 30px;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}

.importantDates {
    padding: 0;
    border: 1px solid #CCCCCC;
    margin-left: 5px;
}

.importantDates li.imp-date {
    padding-right: 5px;
    padding-bottom: 5px;
}

.importantDates ul li {
    list-style-type: none;
    clear: both;
    margin: 10px 0;
    border-bottom: 1px dotted #CCCCCC;
    min-height: 70px;
    padding: 10px 0;
    overflow: hidden;
    font-family: "Raleway";
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #444444;
}

.imp-date .date {
    width: 50px;
    height: 50px;
    background-color: #024794;
    color: yellow;
    padding: 3px;
    text-align: center;
}

.pull-left {
    float: left !important;
}

.imp-date .date .month {
    font-size: 12px;
   
    font-weight: bold;
    line-height: 12px;
    text-transform: uppercase;
}

.imp-date .date .day {
    
    font-size: 20px;
    line-height: 12px;
}

</style>
