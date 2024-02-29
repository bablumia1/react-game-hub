import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "606b009689664172a5ffe9966c5ed4f4",
  },
});
