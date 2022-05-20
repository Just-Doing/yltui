//type: today|week|month|''
export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }
  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }
    const beginTime = now.getTime() - day * oneDay;
    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') {
    const year = now.getFullYear();
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    ];
  }

  const year = now.getFullYear();
  return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
}

// 转换时间 为 yyyy-MM-DD hh:mm:ss
export const formate = (inputDate, formateStr = 'yyyy-mm-dd HH:mm:ss') => {
  let time = '';
  if (inputDate) {
    const date = new Date(inputDate);
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
    const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
    const seconds = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;
    switch (formateStr) {
      case 'yyyy-mm-dd':
        time = `${date.getFullYear()}-${month}-${day}`;
        break;
      case 'HH:mm:ss':
        time = `${hours}:${minutes}:${seconds}`;
        break;
      case 'hh:mm:ss':
        time = `${hours > 12 ? hours - 12 : hours}:${minutes}:${seconds} ${hours > 12 ? 'PM' : 'AM'}`;
        break;
      case 'yyyy-mm-dd hh:mm:ss':
        time = `${hours}:${minutes}:${seconds} ${hours > 12 ? hours - 12 : hours}:${minutes}:${seconds} ${hours > 12 ? 'PM' : 'AM'}`;
        break;
      case 'yyyy年mm月dd日':
        time = `${date.getFullYear()}年${month}月${day}日`;
        break;
      case 'yyyy年mm月dd日 hh:mm:ss':
        time = `${date.getFullYear()}年${month}月${day}日 ${hours > 12 ? hours - 12 : hours}:${minutes}:${seconds} ${hours > 12 ? 'PM' : 'AM'}`;
        break;
      default:
        time = `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        break;
    }
  }
  return time;
};

export const getQuarter = (paraDate) => {
  let date = new Date();
  if (paraDate) {
    date = new Date(paraDate);
  }
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return parseInt(`${year}0${Math.ceil(month / 3)}`, 10);
};
