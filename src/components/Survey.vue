<template>
  <div id="survey">
    <table>
      <br />
      <thead>
        <tr>
          <th colspan="2">以下にお答えください</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>現在生命保険に加入されていますか？</td>
        </tr>
        <tr>
          <label><input type="radio" name="lifeInsurance" value="はい" v-model="lifeInsurance"/>はい</label>
          <label><input type="radio" name="lifeInsurance" value="いいえ" v-model="lifeInsurance"/>いいえ</label>
        </tr>
      </tbody>
      <br />

      <tbody v-if="lifeInsurance">
        <tr>
          <td>
            現在入院中ですか。または、最近３ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
          </td>
        </tr>
        <tr>
          <td>
            <label><input type="radio" value="はい" name="hospitalWithIn3months" v-model="hospitalWithIn3months"/>はい</label>
            <label><input type="radio" value="いいえ" name="hospitalWithIn3months" v-model="hospitalWithIn3months"/>いいえ</label>
          </td>
        </tr>
      </tbody>
      <br />

      <tbody v-if="hospitalWithIn3months">
        <tr>
          <td>
            過去５年以内に病院やけがで、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？
          </td>
        </tr>
        <tr>
          <td>
            <label><input type="radio" value="はい" name="hospitalWithIn5years" v-model="hospitalWithIn5years"/>はい</label>
            <label><input type="radio" value="いいえ" name="hospitalWithIn5years" v-model="hospitalWithIn5years"/>いいえ</label>
          </td>
        </tr>
      </tbody>
      <br />
    </table>

    <button>
      <router-link to="/">前へ戻る ></router-link>
    </button>
    <button>
      <router-link to="/Consultation">次へ進む ></router-link>
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "survey",
  computed: {
    lifeInsurance: {
      get() {
        return this.$store.state.lifeInsurance;},
      set(value) {
        this.$store.commit("updateLifeInsurance", value);},},
    hospitalWithIn3months: {
      get() {
        return this.$store.state.hospitalWithIn3months;},
      set(value) {
        this.$store.commit("updateHospitalWithIn3months", value);},},
    hospitalWithIn5years: {
      get() {
        return this.$store.state.hospitalWithIn5years;},
      set(value) {
        this.$store.commit("updateHospitalWithIn5years", value);},},
  },
};
</script>

<style scoped>
#survey {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
#survey table {
  text-align: left;
  width: 500px;
  border: solid 1px #d7f3f3;
  margin: 0 auto;
}
#survey table tr th {
  text-align:center;
  color:#626767;
  background-color: #d7f3f3;
}
#survey button {
  background-color: #01d1b2;
  border: none;
  margin-top: 20px;
}
#survey button a {
  text-decoration: none;
  color: white;
}
#survey  button:nth-child(1) {
  margin-left: 20px;
}
#survey  button:nth-child(2) {
  margin-right: 20px;
}
</style>
