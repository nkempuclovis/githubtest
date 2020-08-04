<template>
   <section class="become-teacher">
    <div class="container">
        <v-row>
            <v-col>
                <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="dropup">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
   {{ typeToLabel[type] }}
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="javascript:void(0);" @click="type = 'day'">Day</a>
    <a class="dropdown-item" href="javascript:void(0);" @click="type = 'week'">Week</a>
    <a class="dropdown-item" href="javascript:void(0);" @click="type = 'month'">Month</a>
  
  </div>
</div>
       <!--   <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
        </v-toolbar>
      </v-sheet>
      <v-sheet  height="600">
        <v-calendar
          ref="calendar"
        
          v-model="start"
         show-week="true"
          :events="events"
           :type="type"
           :event-color="getEventColor"
            :event-text-color="getTextColor"
          interval-count="16"
          first-interval="6"
          interval-minutes="60"
          color="#3399ff"
           @click:event="viewDay"
          @click:more="viewDay"
          @click:date="viewDay"
         
        ></v-calendar>
      </v-sheet>
            </v-col>
        </v-row>
    </div><!-- /.container -->
</section>
</template>

<script>
  export default {
    data: () => ({
      today: '2020-10-07',
      start: '2020-10-07',
      title: '',
      focus: '',
      type: 'week',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      events: [
        {
          name: 'Staff Officially Resume work',
          start: '2020-10-07 08:00',
          end: '2020-10-07 09:00',
          color:'#ff9933'
        },
         {
          name: 'Course Registration for year one and degree students',
          start: '2020-10-07 09:00',
          end: '2020-10-07 14:00',
          color:'#3399ff'
        },
        {
          name: 'Career Orientation, Academic Planning',
          start: '2020-10-13 09:00',
          end: '2020-10-13 14:00',
          color:'#3399ff'
        },
        {
          name: 'Career Orientation, Academic Planning',
          start: '2020-10-14 09:00',
          end: '2020-10-14 14:00',
          color:'#3399ff'
        },
        {
          name: 'Career Orientation, Academic Planning',
          start: '2020-10-15 09:00',
          end: '2020-10-15 14:00',
          color:'#3399ff'
        },
        
      ],
    }),
    mounted () {
      this.$refs.calendar.scrollToTime('6:00')

      this.title = this.$refs.calendar.title

      console.log( this.$refs.calendar )
    },

    methods: {

         viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
       getTextColor (event) {
           var color
           color = "#ffffff"
        return color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
    }
  }
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>