<template>
    <div class="speakers">
      <div>
    <div v-if="sessions.length">
      <MDBRow :cols="['1','md-4']" class="g-4">
      <div v-bind:key="session.index" v-for="session in sessions">
        <MDBCol>
          <MDBCard>
            <MDBCardImg :src="imageLink + sessions.Image" top alt="..."/>
            <MDBCardBody>
              <MDBCardTitle>{{session.name}}</MDBCardTitle>
              <MDBCardText>
                {{session.date}}
                Start:
                {{session.iso_utc_time_start}}
                End:
                {{session.iso_utc_time_end}}
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
    import {MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg } from 'mdb-vue-ui-kit';
    export default {
      name: 'HelloWorld',
      components: {
        MDBCol,
        MDBRow,
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardImg
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