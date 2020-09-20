<template>
  <div id="summarize">
    <table>
      <br />
      <thead>
        <tr>
          <th colspan="2">以下の内容をご確認ください</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-性別-</td>
        </tr>
        <br>
        <tr>
          {{$store.state.sex}}
        </tr>
      </tbody>
      <br />

      <tbody>
        <tr>
          <td>-生年月日-</td>
        </tr>
        <br>
        <tr>
          {{$store.state.year.slice(0,4)}}年{{$store.state.month}}月{{$store.state.day}}日
        </tr>
      </tbody>
      <br />

      <tbody>
        <tr>
          <td>-現在、生命保険に加入されていますか？-</td>
        </tr>
        <br>
        <tr>
          {{ $store.state.lifeInsurance }}
      </tr>
      </tbody>
      <br />

      <tbody>
        <tr>
          <td>
            -現在入院中ですか。または、最近３ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-
          </td>
        </tr>
        <br>
      <tr>
          {{ $store.state.hospitalWithIn3months }}
      </tr>
      </tbody>
      <br />

      <tbody>
        <tr>
          <td>
            -過去５年以内に、病気やけがで、手術を受けたことをまたは継続して７日以上の入院をしたことがありますか？-
          </td>
        </tr>
        <br>
      <tr>
          {{ $store.state.hospitalWithIn5years}}
      </tr>
      </tbody>
      <br />

      <tbody>
        <tr>
          <td>-ご相談内容-</td>
        </tr>
        <br>
      <tr>
          {{ $store.state.consultationContent}}
      </tr>
      </tbody>
      <br />
    </table>

    <button>
      <router-link to="/Survey">前へ戻る ></router-link>
    </button>
    
    <input class="submit" type="submit" value="送信>">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src(srcディレクトリまでのパス)

export default {
  name: "BasicInfo",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#summarize {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
#summarize table {
  text-align: left;
  width: 500px;
  border: solid 1px #d7f3f3;
  margin: 0 auto;
}
#summarize table tr th {
  text-align: center;
  color: #626767;
  background-color: #d7f3f3;
}
#summarize table tr td {
  color: rgb(136, 175, 200);
}
#summarize table tr textarea {
  resize: none;
  width: 500px;
  height: 300px;
}
#summarize button {
  background-color: #01d1b2;
  border: none;
  margin-top: 20px;
}
#summarize button a {
  text-decoration: none;
  color: white;
}
#summarize button:nth-child(1) {
  margin-left: 20px;
}
#summarize button:nth-child(2) {
  margin-right: 20px;
}

#summarize .submit{
  background-color: #01d1b2;
  border: none;
  color: white;
}
</style>
