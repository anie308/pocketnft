import axios from "axios";

export const getNfts = async () => {
  try {
      const wallet = process.env.REACT_APP_WALLET_ADDRESS;
    //
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}${wallet}`
      );
      // console.log(response?.result);
      const data =  response?.data.assets
      return data;
    } catch (e) {
      console.error(e);
    }
};
