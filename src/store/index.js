import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    sex:'',
    year:'1990（平成２）',
    month:'1',
    day:'1',
    lifeInsurance:'',
    hospitalWithIn3months:'',
    hospitalWithIn5years:'',
    consultationContent:'',
  },
  mutations: {
    updateSex(state,sex){
      state.sex = sex;
    },
    updateYear(state,year){
      state.year = year;
    },
    updateMonth(state,month){
      state.month = month;
    },
    updateDay(state,day){
      state.sex = day;
    },
    updateLifeInsurance(state,lifeInsurance){
      state.lifeInsurance = lifeInsurance;
    },
    updateHospitalWithIn3months(state,hospitalWithIn3months){
      state.hospitalWithIn3months = hospitalWithIn3months;
    },
    updateHospitalWithIn5years(state,hospitalWithIn5years){
      state.hospitalWithIn5years = hospitalWithIn5years;
    },
    updateconsultationContent(state,consultationContent){
      state.consultationContent = consultationContent;
    },
    
  },
  actions: {
  },
  modules: {
  }
})
