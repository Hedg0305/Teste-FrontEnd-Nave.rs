import moment from 'moment';

export function formatDate(date) {
  return moment.utc(date).format('DDMMYYYY');
}

export function getAge(date) {
  return moment().diff(date, 'years');
}
