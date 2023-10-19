import axios from "axios"
import {
  TST_TC473_ZPZCGQTNRO_USERNAME,
  TST_TC473_ZPZCGQTNRO_PASSWORD
} from "react-native-dotenv"
const tSTTCzpzcgqtnro = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC473_ZPZCGQTNRO_USERNAME,
    password: TST_TC473_ZPZCGQTNRO_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function tsttc473zpzcgqtnro_get_getUserDetails_read(payload) {
  return tSTTCzpzcgqtnro.get(`/getUser${payload.Details}`)
}
export const apiService = { tsttc473zpzcgqtnro_get_getUserDetails_read }
