import { axios } from "../../common/axios";
// to get the list of character
export const listHouses = (page,pageSize) => {
    return axios({
      method: "get",
      url: "https://www.anapioficeandfire.com/api/houses",
      params:{page,pageSize}
    });
  };

export const getHouse = (houseId) =>{
    return axios({
        method:'get',
        url:`https://www.anapioficeandfire.com/api/houses/${houseId}`
    })
}