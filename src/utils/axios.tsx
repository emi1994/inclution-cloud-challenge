import axios from 'axios'
export const getCurrentStatus = async (state?: any, endpoint?:any) => {
    try {
      return (await axios.get(`https://api.factoryfour.com/${endpoint}/health/status`)).data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        state({
          message: `OUTAGE`,
          body: e.message,
        })
      }
    }
  }
