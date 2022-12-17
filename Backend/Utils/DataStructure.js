const GetCurrentDate = () => {
    const Data = new Date();
    const getDate = Data.getDate();
    const getMonth = Data.getMonth() + 1;
    const getyear = Data.getFullYear();
    return getDate + "/" + getMonth + "/" + getyear;
  };
  
  const GetCurrentTime = () => {
    const Data = new Date();
    const hours = Data.getHours() % 12 || 12;
    const minuts = Data.getMinutes();
    return hours + ":" + minuts;
  };
  
  module.exports={
    GetCurrentDate,GetCurrentTime
  }

//   module.exports = {
//     GetCurrentDate,GetCurrentTime
// };