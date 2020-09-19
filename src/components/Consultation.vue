<template>
  <div id="consultation">
    <table>
      <br />
      <thead>
        <tr>
          <th colspan="2">ご相談内容をご記入ください</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-ご相談内容-</td>
        </tr>
        <tr>
         <textarea name="consultationContent" v-model="consultationContent"></textarea>
        </tr>
        </tbody>
      <br />
    </table>

        <button>
      <router-link to="/Survey">前へ戻る ></router-link>
    </button>
    <button>
      <router-link to="/">次へ進む ></router-link>
    </button>

    <router-view />
  </div>
</template>

<script>
export default {
name: "consultation",
  computed: {
    consultationContent: {
      get() {
        return this.$store.state.consultationContent;},
      set(value) {
        this.$store.commit("updateconsultationContent", value);},
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#consultation {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
#consultation table {
  text-align: left;
  width: 500px;
  border: solid 1px #d7f3f3;
  margin: 0 auto;
}
#consultation table tr th {
  text-align:center;
  color:#626767;
  background-color: #d7f3f3;
}
#consultation table tr td{
    color:rgb(136,175,200);
}
#consultation table tr textarea {
  resize: none;
  width:500px;
  height:300px;
}
#consultation button {
  background-color: #01d1b2;
  border: none;
  margin-top: 20px;
}
#consultation button a {
  text-decoration: none;
  color: white;
}
#consultation button:nth-child(1) {
  margin-left: 20px;
}
#consultation button:nth-child(2) {
  margin-right: 20px;
}
</style>
