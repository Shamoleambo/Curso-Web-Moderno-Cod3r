<template>
    <div class="user-admin">
        <b-table hover striped :items="users" :fields="fields" >

        </b-table>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global';

import axios from 'axios';

export default {
    name: 'UserAdmin',
    data: function(){ //The data attribute is a function that returns an object
        return {
            mode: 'save',
            user: {},
            users: [],
            fields: [
                {key: 'id', label: 'Código', sortable: true},
                {key: 'name', label: "Nome", sortable: true},
                {key: 'email', label: "E-mail", sortable: true},
                {key: 'admin', label: "Administrador", sortable: true, 
                    formater: value => value ? 'Sim' : "Não"},
                {key: 'actions', label: 'Ações'}
            ]
        };
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`;
            axios.get(url)
                .then(res => this.users = res.data);
        }
    },
    mounted(){ //<=Lifecycle method
        this.loadUsers();
    }
}
</script>

<style>

</style>