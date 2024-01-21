<Menu></Menu>
<template>
    <div>
        <center><h1>Categories Liste</h1></center>
        <router-link :to="{name: 'createCategory'}" class="btn btn-warning">New
Category</router-link>
        <table class="table table-striped">
            <thead>
                <tr>
                    <td>Nom Categorie</td>
                    <td>Image</td>
                    <td>Update</td>
                    <td>Delete</td>

                </tr>
            </thead>
            <tbody>
                <tr v-for="categorie in categories" :key="categorie.id">
                    <td>{{ categorie.nomcategorie }}</td>
                    <td><img :src="categorie.imagecategorie" :alt=categorie.nomcategorie width="100" /></td>

                    <td>
                        <div class="btn-group" role="group">
                            <button class="btn btn-warning" @click="updateCategorie(categorie.id)">Modifier</button>

                        </div>
                    </td>
                    <td>
                        <div class="btn-group" role="group">
                            <button class="btn btn-danger" @click="deleteCategorie(categorie.id)">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const categories = ref([])//tableau vide 

const getcategories = async () => {//méthode qui get les données du backend
    await axios.get("http://localhost:8000/api/categories")
        .then(res => {
            categories.value = res.data
        })
        .catch(error => {
            console.log(error)
        });
}
const deleteCategorie=async (id)=> {
await axios
.delete(`http://localhost:8000/api/categories/${id}`)
.then(() => {
let i = categories.value.map(data =>
data.id).indexOf(id);
categories.value.splice(i, 1)
});
}


onMounted(() => {
    getcategories();
});

</script>

<style lang="css" scoped></style>
