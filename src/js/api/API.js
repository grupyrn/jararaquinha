import config from "../config.json"
import axios from "axios";

const axiosConfig = {
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8',
    // "Authorization": `Token ${config.api_key}`,
  }
};

export const subevents = (event_id) => {
  return axios.get(config.api_url + `/subevents/?event=${event_id}`, axiosConfig);
};

export const events = () => {
  return axios.get(config.api_url + `/events/`, axiosConfig);
};

export const current_events = () => {
  return axios.get(config.api_url + `/currentevents/`, axiosConfig);
};

export const checkout_allsubevents = (attendee) => {
  const data = {'attendee': attendee.hash};
  console.log("checkout1", attendee);
  console.log("checkout2", data);
  return axios.post(config.api_url + `/subeventcheckoutall/`, data, axiosConfig);
};

export const checkin_event = (event_id, attendee, check) => {
  const data = {'attendee': attendee.hash, 'event': event_id, 'check': check};
  return axios.post(config.api_url + `/check/`, data, axiosConfig);
};

export const checkin_subevent = (subevent_id, attendee, check) => {
  var data = {force: true};
  data = {...data, 'attendee': attendee.hash, 'subevent': subevent_id, 'check': check};
  return axios.post(config.api_url + `/subeventcheck/`, data, axiosConfig);
};
