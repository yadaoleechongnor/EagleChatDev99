import moment from 'moment';

export const getStartDate = (filter) => {
    switch(filter) {
      case 'today':
        return moment().startOf('day').toISOString();
      case 'yesterday':
        return moment().subtract(1, 'day').startOf('day').toISOString();
      case 'thisWeek':
        return moment().startOf('week').toISOString();
      case 'lastWeek':
        return moment().subtract(1, 'week').startOf('week').toISOString();
      case 'thisMonth':
        return moment().startOf('month').toISOString();
      case 'lastMonth':
        return moment().subtract(1, 'month').startOf('month').toISOString();
      case 'thisYear':
        return moment().startOf('year').toISOString();
      case 'lastYear':
        return moment().subtract(1, 'year').startOf('year').toISOString();
      default:
        return null;
    }
  };

 export  const getEndDate = (filter) => {
    switch(filter) {
      case 'today':
        return moment().endOf('day').toISOString();
      case 'yesterday':
        return moment().subtract(1, 'day').endOf('day').toISOString();
      case 'thisWeek':
        return moment().endOf('week').toISOString();
      case 'lastWeek':
        return moment().subtract(1, 'week').endOf('week').toISOString();
      case 'thisMonth':
        return moment().endOf('month').toISOString();
      case 'lastMonth':
        return moment().subtract(1, 'month').endOf('month').toISOString();
      case 'thisYear':
        return moment().endOf('year').toISOString();
      case 'lastYear':
        return moment().subtract(1, 'year').endOf('year').toISOString();
      default:
        return null;
    }
  };

  export const ConvertDay = (day) =>{
    let laoday = ""
     switch(day){
        case "today":
         return laoday = "ມື້ນີ້"
        case "yesterday":
         return laoday = "ມື້ວານ"
        case "thisWeek":
         return laoday = "ທິດນີ້"
        case "lastWeek":
         return laoday = "ທິດກອ່ນ"
        case "thisMonth":
         return laoday = "ເດືອນນີ້"
        case "lastMonth":
         return laoday = "ເດືອນກອ່ນ"
        case "thisYear":
         return laoday = "ປີນີ"
        case "lastYear":
         return laoday = "ປີກອ່ນ"
        default :
        return laoday
     } 
  }

  export const  formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }