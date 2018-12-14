import moment from 'moment'
let dateFor = {
    dateFormat(time){
      let date = time;
      if (date == undefined || date == 0) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    }
  }
  
  export {
    dateFor
  }