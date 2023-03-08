import axios from "axios";

export const getNfts = async () => {
  try {
    //user wallet address
      const wallet = process.env.REACT_APP_WALLET_ADDRESS;
    //

    //get nft assets from wallet
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}${wallet}`
      );
      // console.log(response?.result);
      const data =  response?.data.assets
      return data;
    } catch (e) {
        //error logged to console
      console.error(e);
    }
};
