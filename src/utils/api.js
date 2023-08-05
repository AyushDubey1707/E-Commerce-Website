import axios from "axios";


// const options = {
//   method: 'GET',
//   url: 'https://aliexpress-datahub.p.rapidapi.com/item_detail',
//   params: {
//     itemId: '3256804591426248'
//   },
//   headers: {
//     'X-RapidAPI-Key': '8b1ecdd474msh6681043830c3302p1725b9jsn8efb88b43ba0',
//     'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
//   }
// };


// export const fetchDataFromApi = async () => {
//     try {
//         const response = await axios.request(options);
//         const data= response.json();
//         console.log(data)
//     } catch (error) {
//         console.error(error);
//     }
// };
    export const fetchDataFromApi = async () => {
      try {

        const response = await axios.get('https://amazon-pricing-and-product-info.p.rapidapi.com/', {
          headers: {
            'x-rapidapi-key': '8b1ecdd474msh6681043830c3302p1725b9jsn8efb88b43ba0',
            'x-rapidapi-host': 'amazon-pricing-and-product-info.p.rapidapi.com',
          },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };





