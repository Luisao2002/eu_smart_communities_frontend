<template>
    <div class="speakers">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
      <h1>Agenda</h1>
    <h3 style="color: cornflowerblue;">More to come soon! Stay tunned</h3>
      <div>
    <div v-if="sessions.length">
      <MDBRow :cols="['1','md-4']" class="g-4">
      <div v-bind:key="session.index" v-for="session in sessions">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>{{session.name}}</MDBCardTitle>
              <MDBCardText>
                Day:
                {{session.date}}<br>
                {{session.iso_utc_time_start}}-{{session.iso_utc_time_end}}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
      </MDBRow>
      </div>
    </div>
    </div>
  </template>
  
  <script>
    import {MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdb-vue-ui-kit';
    export default {
      name: 'HelloWorld',
      components: {
        MDBCol,
        MDBRow,
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
      },
      data(){
        return {
          sessions: [],
          imageLink: "http://localhost:1337/sessions/"
        }
      },
        mounted() {
        fetch("http://localhost:1337/sessions")
          .then((res) => res.json())
          .then((data) => {
            this.sessions = data;
          });
      }
    }
    </script>
