import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import   axios  from 'axios'
export const useMovieStore = defineStore('movie', {
            state:()=>({
                search: ref(null),
                movies: ref([]),
                searchCount : ref(0),
                singelMovie: null
            }),
            getters: {

             },
            actions:{
              async  searchMovies(){
                  if(this.search != ''){
                  const {data} = await axios.get(`http://www.omdbapi.com/?apikey=dc286b6d&s=${this.search}`);
                  // console.log(data)

                  this.movies = data.Search
                  
                  this.searchCount = data.totalResults
                  }

                },

                async  getSingelMovie(id){
                  if(this.search != ''){
                  const {data} = await axios.get(`http://www.omdbapi.com/?apikey=dc286b6d&i=${id}&plot=full`);
                  // console.log(data)

                  this.singelMovie = data;
                  }

                }
                
            }

})
