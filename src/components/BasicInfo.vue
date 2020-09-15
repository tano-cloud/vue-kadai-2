<template>
  <div id="basicInfo">
    <table>
      <thead>
        <tr>
          <th colspan="2">お客様の情報を入力してください</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-性別-</td>
        </tr>
        <tr>
          <label>
            <input type="radio" name="sex" value="man" v-model="sex"/>男性</label>
          <label>
            <input type="radio" name="sex" value="woman" v-model="sex"/>女性</label>
        </tr>
        <br />
        <tr>
          <td>-生年月日-</td>
        </tr>
        <tr>
          <select name="year" v-model="year" class="bornyear">
            <option v-for="(year,index) of list" :key="index" :value="year" >
              {{ year }}
            </option>
          </select>
          年
          <select name="month" v-model="month">
            <option v-for="n of 10" :key="n" :value="n">{{ n }}</option>
          </select>
          月
          <select name="day" v-model="day">
            <option v-for="n of 31" :key="n" :value="n">{{ n }}</option>
          </select>
          日
        </tr>
      </tbody>
    </table>

    <button>
      <router-link to="/Survey">次へ進む ></router-link>
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
  //elは指定しない
  name: 'BasicInfo',
  data: function() {
    return{ list: [], }
  },
  created() {
    const Year = new Date().getFullYear()+1;
    for (let i = 1910; i < Year; i++) {
      //1900年4月1日だと、明治33/4/1
      const japanCalender = new Date(i, 4, 1).toLocaleDateString("ja-JP-u-ca-japanese", { era: "long" });
       //明治33/4/1から、明治33/4/1だけ取り出す
      const japanCalenderYear = japanCalender.match(/(.*)\/(\d+)\/(\d+)/)[1];
      //1900年(明治33)
      const optionMyBornYear = i + '年' + '(' + japanCalenderYear + ')';
      this.list.unshift(optionMyBornYear);}
  },
  computed: {
    sex: {
      get() {
        return this.$store.state.sex;},
      set(value) {
        this.$store.commit('updateSex', value);},
    },
    year: {
      get() {
        return this.$store.state.year;
        },
      set(value) {
        this.$store.commit('updateYear', value);
        },
    },
    month: {
      get() {
        return this.$store.state.month;
        },
      set(value) {
        this.$store.commit('updateMonth', value);
      },
    },
    day: {
      get() {
        return this.$store.state.day;
        },
      set(value) {
        this.$store.commit('updateDay', value);
      },
    },
  },
};
</script>

<style scoped>
#basicInfo {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
#basicInfo table {
  text-align: left;
  width: 500px;
  border: solid 1px #d7f3f3;
  margin: 0 auto;
}
#basicInfo table tr th {
  text-align: center;
  color: #626767;
  background-color: #d7f3f3;
}
#basicInfo table tr .bornyear {
  width: 120px;
}
#basicInfo button {
  background-color: #01d1b2;
  border: none;
  margin-top: 20px;
}
#basicInfo button a {
  text-decoration: none;
  color: white;
}
#basicInfo button:nth-child(1) {
  margin-left: 20px;
}
#basicInfo button:nth-child(2) {
  margin-right: 20px;
}
</style>
