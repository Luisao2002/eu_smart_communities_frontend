<template>
  <div class="speakers">
    <div>
    <header>
      <!-- Navbar -->
      <MDBNavbar></MDBNavbar>
      <MDBNavbarToggler></MDBNavbarToggler>
      <MDBNavbarNav></MDBNavbarNav>
      <MDBNavbarItem></MDBNavbarItem>
      <!-- Navbar -->
    </header>
  <div v-if="people.length">
    <MDBRow :cols="['1','md-4']" class="g-4">
    <div v-bind:key="people.index" v-for="people in people">
      <MDBCol>
        <MDBCard>
          <MDBCardImg :src="imageLink + people.Image" top alt="..."/>
          <MDBCardBody>
            <MDBCardTitle>{{people.name}}</MDBCardTitle>
            <MDBCardText>
              {{people.biography}}
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
  import { MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg } from 'mdb-vue-ui-kit';
  export default {
    name: 'HelloWorld',
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarNav,
      MDBNavbarItem,
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
        imageLink: "http://localhost:1337/people/"
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
  <style></style>
