import axios from "axios";

const config = {
    apiKey:'3c6939a029074c4eb39251db468f2e9f',
    page_size:10
}
export const loadRecents = async({page}) =>{
    const resd = await axios.request( {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        // url : `https://newsapi.org/v2/top-headlines`,
        params:{q:'recent',lang:'en',page:page,page_size:config.page_size} ,
        headers: {
            'X-RapidAPI-Key': '93d3c35f0amshbd3e6efc056a387p19ca5ejsndd92da991081',
            'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
          }
        
        }).then((res)=>{
        
            
            return res.data.articles;
        }).catch((err)=>{
            return [];
        })

    return resd
}

export const searchResults = async({keyWord,page}) => {
    
    
    
     const resd =  await axios.request( {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        // url : `https://newsapi.org/v2/everything`,
        params: {q: keyWord,page:page,page_size:config.page_size},
        headers: {
            'X-RapidAPI-Key': '93d3c35f0amshbd3e6efc056a387p19ca5ejsndd92da991081',
            'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
          }
        }).then((res)=>{
        
        
        return [...res.data.articles];
        }).catch((err)=>{
            return [];
        })
    return resd;

  };


  export const categoryResults = async({keyWord,page}) => {
    
    const resd =  await axios.request( {
       method: 'GET',
       url: 'https://free-news.p.rapidapi.com/v1/search',
    //    url : `https://newsapi.org/v2/top-headlines`,
       params: {q: keyWord,page:page,page_size:config.page_size},
       headers: {
        'X-RapidAPI-Key': '93d3c35f0amshbd3e6efc056a387p19ca5ejsndd92da991081',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
      }
       
       }).then((res)=>{
       
       
       return [...res.data.articles];
       }).catch((err)=>{
           return [];
       })
   return resd;

 };