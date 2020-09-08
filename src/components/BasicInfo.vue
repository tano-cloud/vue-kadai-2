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
        <label><input type="radio" name="sex" value="man" v-model="sex" />男性</label>
        <label><input type="radio" name="sex" value="woman" v-model="sex" />女性</label>
      </tr>
      <br />
      <tr>
        <td>-生年月日-</td>
      </tr>
      <tr>
        <select v-model="year" class="bornyear">
          <option value="1900（明治３３）">1900(明治３３)</option>
          <option value="1901（明治３４）">1901（明治３４）</option>
          <option value="1902（明治３５）">1902（明治３５）</option>
          <option value="1903（明治３６）">1903（明治３６）</option>
          <option value="1904（明治３７）">1904（明治３７）</option>
          <option value="1905（明治３８）">1905（明治３８）</option>
          <option value="1906（明治３９）">1906（明治３９））</option>
          <option value="1907（明治４０）">1907（明治４０）</option>
          <option value="1908（明治４１）">1908（明治４１）</option>
          <option value="1909（明治４２）">1909（明治４２）</option>
          <option value="1910（明治４３）">1910（明治４３）</option>
          <option value="1911（明治４４）">1911（明治４４）</option>
          <option value="1912（大正１）">1912（大正１）</option>
          <option value="1913（大正２）">1913（大正２）</option>
          <option value="1914（大正３）">1914（大正３）</option>
          <option value="1915（大正４）">1915（大正４）</option>
          <option value="1916（大正５）">1916（大正５）</option>
          <option value="1917（大正６）">1917（大正６）</option>
          <option value="1918（大正７）">1918（大正７）</option>
          <option value="1919（大正８）">1919（大正８）</option>
          <option value="1920（大正９）">1920（大正９）</option>
          <option value="1921（大正１０）">1921（大正１０）</option>
          <option value="1922（大正１１）">1922（大正１１）</option>
          <option value="1923（大正１２）">1923（大正１２）</option>
          <option value="1924（大正１３）">1924（大正１３）</option>
          <option value="1925（大正１４）">1925（大正１４）</option>
          <option value="1926（昭和１）">1926（昭和１</option>
          <option value="1927（昭和２）">1927（昭和２）</option>
          <option value="1928（昭和３）">1928（昭和３）</option>
          <option value="1929（昭和４）">1929（昭和４）</option>
          <option value="1930（昭和５）">1930（昭和５）</option>
          <option value="1931（昭和６）">1931（昭和６）</option>
          <option value="1932（昭和７）">1932（昭和７）</option>
          <option value="1933（昭和８）">1933（昭和８）</option>
          <option value="1934（昭和９）">1934（昭和９）</option>
          <option value="1935（昭和１０）">1935（昭和１０）</option>
          <option value="1936（昭和１１）">1936（昭和１１）</option>
          <option value="1937（昭和１２）">1937（昭和１２）</option>
          <option value="1938（昭和１３）">1938（昭和１３）</option>
          <option value="1939（昭和１４）">1939（昭和１４）</option>
          <option value="1940（昭和１５）">1940（昭和１５）</option>
          <option value="1941（昭和１６）">1941（昭和１６）</option>
          <option value="1942（昭和１７）">1942（昭和１７）</option>
          <option value="1943（昭和１８）">1943（昭和１８）</option>
          <option value="1944（昭和１９）">1944（昭和１９）</option>
          <option value="1945（昭和２０）">1945（昭和２０）</option>
          <option value="1946（昭和２１）">1946（昭和２１）</option>
          <option value="1947（昭和２２）">1947（昭和２２）</option>
          <option value="1948（昭和２３）">1948（昭和２３）</option>
          <option value="1949（昭和２４）">1949（昭和２４）</option>
          <option value="1950（昭和２５）">1950（昭和２５）</option>
          <option value="1951（昭和２６）">1951（昭和２６）</option>
          <option value="1952（昭和２７）">1952（昭和２７）</option>
          <option value="1953（昭和２８）">1953（昭和２８）</option>
          <option value="1954（昭和２９）">1954（昭和２９）</option>
          <option value="1955（昭和３０）">1955（昭和３０）</option>
          <option value="1956（昭和３１）">1956（昭和３１）</option>
          <option value="1957（昭和３２）">1957（昭和３２）</option>
          <option value="1958（昭和３３）">1958（昭和３３）</option>
          <option value="1959（昭和３４）">1959（昭和３４）</option>
          <option value="1960（昭和３５）">1960（昭和３５）</option>
          <option value="1961（昭和３６）">1961（昭和３６）</option>
          <option value="1962（昭和３７）">1962（昭和３７）</option>
          <option value="1963（昭和３８）">1963（昭和３８）</option>
          <option value="1964（昭和３９）">1964（昭和３９）</option>
          <option value="1965（昭和４０）">1965（昭和４０）</option>
          <option value="1966（昭和４１）">1966（昭和４１）</option>
          <option value="1967（昭和４２）">1967（昭和４２）</option>
          <option value="1968（昭和４３）">1968（昭和４３）</option>
          <option value="1969（昭和４４）">1969（昭和４４）</option>
          <option value="1970（昭和４５）">1970（昭和４５）</option>
          <option value="1971（昭和４６）">1971（昭和４６）</option>
          <option value="1972（昭和４７）">1972（昭和４７）</option>
          <option value="1973（昭和４８）">1973（昭和４８）</option>
          <option value="1974（昭和４９）">1974（昭和４９）</option>
          <option value="1975（昭和５０）">1975（昭和５０）</option>
          <option value="1976（昭和５１）">1976（昭和５１）</option>
          <option value="1977（昭和５２）">1977（昭和５２）</option>
          <option value="1978（昭和５３）">1978（昭和５３）</option>
          <option value="1979（昭和５４）">1979（昭和５４</option>
          <option value="1980（昭和５５）">1980（昭和５５</option>
          <option value="1981（昭和５６）">1981（昭和５６）</option>
          <option value="1982（昭和５７）">1982（昭和５７）</option>
          <option value="1983（昭和５８）">1983（昭和５８）</option>
          <option value="1984（昭和５９）">1984（昭和５９）</option>
          <option value="1985（昭和６０）">1985（昭和６０）</option>
          <option value="1986（昭和６１）">1986（昭和６１）</option>
          <option value="1987（昭和６２）">1987（昭和６２）</option>
          <option value="1988（昭和６３）">1988昭和６３）</option>
          <option value="1989（平成１）">1989（平成１）</option>
          <option value="1990（平成２）" selected>1990（平成２）</option>
          <option value="1991（平成３）">1991（平成３）</option>
          <option value="1992（平成４）">1992（平成４）</option>
          <option value="1993（平成５）">1993（平成５）</option>
          <option value="1994（平成６）">1994（平成６）</option>
          <option value="1995（平成７）">1995（平成７）</option>
          <option value="1996（平成８）">1996（平成８）</option>
          <option value="1997（平成９）">1997（平成９）</option>
          <option value="1998（平成１０）">1998（平成１０）</option>
          <option value="1999（平成１１）">1999（平成１１）</option>
          <option value="2000（平成１２）">2000（平成１２）</option>
          <option value="2001（平成１３）">2001（平成１３）</option>
          <option value="2002（平成１４）">2002（平成１４）</option>
          <option value="2003（平成１５）">2003（平成１５）</option>
          <option value="2004（平成１６）">2004（平成１６）</option>
          <option value="2005（平成１７）">2005（平成１７）</option>
          <option value="2006（平成１８）">2006（平成１８）</option>
          <option value="2007（平成１９）">2007（平成１９）</option>
          <option value="2008（平成２０）">2008（平成２０）</option>
          <option value="2009（平成２１）">2009（平成２１）</option>
          <option value="2010（平成２２）">2010（平成２２）</option>
          <option value="2011（平成２３）">2011（平成２３）</option>
          <option value="2012（平成２４）">2012（平成２４）</option>
          <option value="2013（平成２５）">2013（平成２５）</option>
          <option value="2014（平成２６）">2014（平成２６）</option>
          <option value="2015（平成２７）">2015（平成２７）</option>
          <option value="2016（平成２８）">2016（平成２８）</option>
          <option value="2017（平成２９）">2017（平成２９）</option>
          <option value="2018（平成３０）">2018（平成３０）</option>
          <option value="2019（令和１）">2019（令和１）</option>
          <option value="2020（令和２）">2020（令和２）</option>
        </select>
        年
        <select name="month" v-model="month">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        月
        <select name="day" v-model="day">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
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
  name: "BasicInfo",
  computed: {
    sex: {
      get() {
        return this.$store.state.sex;},
      set(value) {
        this.$store.commit("updateSex", value);},
    },
    year: {
      get() {
        return this.$store.state.year;},
      set(value) {
        this.$store.commit("updateYear", value);},
    },
    month: {
      get() {
        return this.$store.state.month;},
      set(value) {
        this.$store.commit("updateMonth", value);},
    },
    day: {
      get() {
        return this.$store.state.day;},
      set(value) {
        this.$store.commit("updateDay", value);},
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
  text-align:center;
  color:#626767;
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
