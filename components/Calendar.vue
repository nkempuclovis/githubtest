<template>
  <section class="become-teacher">
    <div class="container">
        <div class="row">
        <FullCalendar  defaultView="dayGridMonth" :plugins="calendarPlugins" :events="events" />
        </div>
    </div><!-- /.container -->
</section>
</template>
 
<script>
 import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
//import interactionPlugin from '@fullcalendar/interaction'

    export default {
        components: {
            FullCalendar // make the <FullCalendar> tag available
        },
        data() {
            return {
                calendarPlugins: [ 
                    dayGridPlugin,
                     
                   timeGridPlugin,
                  //  interactionPlugin // needed for dateClick
                    
                    ],
                events: [ 

{"id":"46_l","title":"Staff Officially Resume work & Course Registration for year one and degree students","start":"2020-10-07","textColor":"white"},
{"id":"46_l","title":"Course Registration for year one and degree students","start":"2020-10-07","textColor":"white"},

{"id":"46_d","title":"Exam Start date","start":"2020-06-04","textColor":"white", "backgroundColor": "orange"}

]
            }
        }
    }

   
</script>

<style lang='scss'>

@import '~/node_modules/@fullcalendar/core/main.css';
@import '~/node_modules/@fullcalendar/daygrid/main.css';

@import '~/node_modules/@fullcalendar/timegrid/main.css';
</style>
