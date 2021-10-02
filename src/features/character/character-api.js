import { axios } from "../../common/axios";
// to get the list of character
export const listCharacters = (page,pageSize) => {
    return axios({
      method: "get",
      url: "https://www.anapioficeandfire.com/api/characters",
      params:{page,pageSize}
    });
  };

export const getCharacter = (characterId) =>{
    return axios({
        method:'get',
        url:`https://www.anapioficeandfire.com/api/characters/${characterId}`
    })
}