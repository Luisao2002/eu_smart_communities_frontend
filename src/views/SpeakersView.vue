<template>
  <div class="speakers">
    <h1>Speakers</h1>
    <div>
  <div v-if="people.length">
    <MDBRow :cols="['1','md-4']" class="g-4">
    <div v-bind:key="people.index" v-for="people in people">
      <MDBCol>
        <MDBCard>
          <MDBCardImg v-if="people.image" :src="imageLink + people.image.url" top alt="..."/>
          <MDBCardBody>
            <MDBCardTitle>{{people.name}}</MDBCardTitle>
            <MDBCardText>
              {{people.function}}
            </MDBCardText>
            <button class="button button2">See Bio</button>
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
        people: [],
        imageLink: "http://localhost:1337"
      }
    },
      mounted() {
      fetch("http://localhost:1337/people")
        .then((res) => res.json())
        .then((data) => {
          this.people = data;
        });
    }
  }
  </script>
  <style>
    .button2 {
  background-color: #008CBA; 
  color: white; 
  border: 2px solid #008CBA;
  border-radius: 5px;
}

.button2:hover {
  background-color: #008CBA;
  opacity: 70%;
  color:white;
}
  </style>
