<template>
  <div>
    <h1>Écrivez-nous !</h1>
    <form name="contactForm" v-on:submit="validateForm()">
      Pseudo : 
      <input class="inputBox" type="text" v-model="pseudo">
      <br>
      Sujet : 
      <select class="inputBox" v-model="subject">
        <option v-for="item in this.subjects">{{ item }}</option>
      </select>
      <br>
      Commentaire : 
      <input class="inputBox bigBox" type="text" v-model="comment">
      <br>
      <input class="btnSubmit" type="submit" value="Soumettre">
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pseudo: null,
      subject: null,
      comment: null,
      subjects: ['Histoire de votre BA', 'Une idée de BA']
    }
  },
  methods: {
    validateForm: function () {
      console.log('coucou')
      console.log(this.subject)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  margin: 0;
  padding: 0;
}
h1 {
  text-align: center;
  margin: 6vh;
}
form {
  width: 65vw;
  margin: 0 auto;
}
.inputBox {
  background-color: #FFEFAA;
  width: 100%;
}
.bigBox {
  height: 40vh;
}
.btnSubmit {
}
</style>
