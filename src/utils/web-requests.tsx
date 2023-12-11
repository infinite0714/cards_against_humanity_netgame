import { Auth, API } from 'aws-amplify';
import axios from 'axios';

const endpoint = 'https://fqwut0e1fl.execute-api.us-east-1.amazonaws.com/dev';

export async function fetchData() {
    console.log("fetchData; ");

    let token = (await Auth.currentSession()).getIdToken().getJwtToken();

    console.log("token: ", token)

    //*
    // userpool method
    const myInit = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }; //*/

      /*
      // custom authorization
    const myInit = {
        headers: {
          Authorization: token
        }
      };*/

      const response = await API.get("getNewCards", "/new-cards", myInit);
      console.log("response: ", response);

    /*
    const response = await axios.post(endpoint +"/new-cards", myInit);
    console.log("response: ", response);
    //*/
}