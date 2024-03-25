<script setup>
import { onMounted } from 'vue';
import { useMovieStore } from '../stores/movie';
import { useRoute } from 'vue-router';

const movieStore = useMovieStore();
const route = useRoute()
onMounted(()=>{
    movieStore.getSingelMovie(route.params.id);
})
</script>

<template>
     <div class="movie-detail">
         <h3>{{ movieStore.singelMovie.Title }}</h3>
         <p>{{ movieStore.singelMovie.Year }}</p>
         <img :src="movieStore.singelMovie.Poster" alt="" class="movie-image" />
         <p>{{ movieStore.singelMovie.Plot }}</p>
    </div>
</template>

<style lang="scss">
    .movie-detail{
        padding: 16px;

        h3{
            color: #fff;
            font-style: 28px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .movie-image{
            display: block;
            min-width: 200px;
            margin-bottom: 16px;
        }

        p{
            color: #fff;
            font-style: 28px;
            line-height: 24px;
        }
    }
</style>
