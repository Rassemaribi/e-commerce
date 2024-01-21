<template>
    <div>
    <h3 class="text-center">Create Category</h3>
    <div class="row">
    <div class="col-md-6">
    <form @submit.prevent="addCategorie">
    <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control" vmodel="categorie.nomcategorie">
    </div>
    <div class="form-group">
    <label>Image</label>
    <input type="text" class="form-control" vmodel="categorie.imagecategorie">
    </div>
    <button type="submit" class="btn btn-primary"  @click="addCategorie()">Create</button>
    </form>
    </div>
    </div>
    </div>
    </template>
    <script setup>
    import axios from 'axios';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    let categorie= {nomcategorie:'',imagecategorie:''}
    const addCategorie=async ()=> {
    await axios
    .post('http://localhost:8000/api/categories', categorie)
    .then(() => (
    router.push({ name: 'homeCategories' })
    ))
    .catch(err => console.log(err))
    }
    </script>