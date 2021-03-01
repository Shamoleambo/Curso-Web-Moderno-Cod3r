<template>
    <div class="category-admin">
        <b-form>
            <input type="hidden" id="category-id" v-model="category.id">

            <!-- Field for Name And Paths-->
            <b-row>
                <b-col>
                    <b-form-group label="Categoria:" label-for="category-name">
                        <b-form-input id="category-name" type="text"
                        v-model="category.name"
                        :readonly="mode === 'remove'"
                        required
                        placeholder="Informe o Nome da Categoria..." />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row v-show="mode === 'save'">
                <b-col>
                    <b-form-group label="Categoria Pai:" label-for="category-parentId">
                        <b-form-select id="category-parentId" 
                            :options="categories" 
                            v-model="category.parentId" />
                    </b-form-group>
                </b-col>
            </b-row>
            
            <!-- Buttons -->
            <b-row>
                <b-col xs="12">
                    <b-button variant="primary"
                        v-if="mode === 'save'"
                        @click="save">
                        Salvar
                    </b-button>
                    <b-button variant="danger" 
                        v-if="mode === 'remove'"
                        @click="remove">
                        Excluir
                    </b-button>
                    <b-button
                        class="ml-2"
                        @click="reset">
                        Cancelar
                    </b-button>
                </b-col>
            </b-row>

        </b-form>
        
        <hr />

        <b-table hover striped :items="categories" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button class="mr-2" variant="warning" @click="loadCategory(data.item)">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>

    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';

import axios from 'axios';

export default {
    name: 'CategoryAdmin',
    data: function(){
        return {
            mode: 'save',
            category: {},
            categories: [],
            fields: [
                {key: 'id', label: 'Código', sortable: true},
                {key: 'name', label: 'Categoria', sortable: true},
                {key: 'path', label: 'Caminho', sortable: true},
                {key: 'actions', label: 'Ações'}
            ]
        }
    },
    methods: {
        loadCategories(){
            const url = `${baseApiUrl}/categories`;
            axios.get(url).then(res =>{
                this.categories = res.data.map(category =>{
                    return {...category, value: category.id, text: category.path};
                });
                
            });
        },
        reset(){
            this.mode = 'save';
            this.category = {};
            this.loadCategories();
        },
        save(){
            const method = this.category.id ? 'put' : 'post';
            const idUrl = this.category.id ? `/${this.category.id}` : '';

            axios[method](`${baseApiUrl}/categories${idUrl}`, this.category)
                .then(()=>{
                    this.$toasted.global.defaultSuccess();
                    this.reset();
                })
                .catch(showError);
        },
        remove(){
            const id = this.category.id;

            axios.delete(`${baseApiUrl}/categories/${id}`)
                .then(()=>{
                    this.$toasted.global.defaultSuccess();
                    this.reset();
                })
                .catch(showError);
        },
        loadCategory(category, mode="save"){
            this.mode = mode;
            this.category = {...category};
        }
    },
    mounted(){
        this.loadCategories();
    }
}
</script>

<style>

</style>