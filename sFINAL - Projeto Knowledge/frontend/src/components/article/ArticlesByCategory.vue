<template>
    <div class="articles-by-category">
        <PageTitle icon="fa fa-folder-o" 
            :main="category.name" sub="Categoria" />
        <ul>
            <li :key="article.id" v-for="article in articles"><!--You always use :key to optimize Vue in his search-->
                {{ article.name }} <!-- <==Temporary -->
            </li>
        </ul>
        <div class="load-more">
            <button class="btn btn-lg btn-outline-primary" 
                v-if="loadMore" 
                @click="getArticles">
                Carregar Mais Artigos
            </button>
        </div>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global';
import axios from 'axios';
import PageTitle from '../template/PageTitle';

export default {
    name: 'ArticlesByCategory',
    components: { PageTitle },
    data: function(){
        return {
            category: {},
            articles: [],
            page: 1,
            loadMore: true
        }
    },
    methods:{
        getCategory(){
            const url = `${baseApiUrl}/categories/${this.category.id}`;

            axios(url).then(res => this.category = res.data); //There is no specific type of request, but is get by default
        },
        getArticles(){
            const url = `${baseApiUrl}/categories/${this.category.id}/articles?page=${this.page}`;

            axios(url).then(res =>{
                this.articles = this.articles.concat(res.data);
                this.page++;

                if(res.data.length === 0) this.loadMore = false;
            });
        }
    },
    mounted(){
        this.category.id = this.$route.params.id;

        this.getCategory();
        this.getArticles();
    }
}
</script>

<style>
    .articles-by-category ul{
        list-style-type: none;
        padding: 0px;
    }

    .articles-by-category .load-more{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
    }
</style>