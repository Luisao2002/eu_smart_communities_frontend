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
            <!--<button id="myBtn" class="button button2">See Bio</button>-->
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
    },
  }
  </script>
  <style>
    .button2 {
  background-color: #f0ed39; 
  color: white; 
  border: 2px solid #f0ed39;
  border-radius: 5px;
}

.button2:hover {
  background-color: #f0ed39;
  color:black;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
  </style>

