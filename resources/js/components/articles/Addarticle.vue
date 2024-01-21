<template>
    <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h4 align="center">Ajouter Produit</h4>
      <form @submit.prevent="ajouterproduit">
        <div class="row">
          <div class="col-md-6">
            <label for="reference" class="form-label">Référence</label>
            <input type="text" class="form-control" placeholder="Référence" v-model="article.reference">
          </div>
          <div class="col-md-6 ms-auto">
            <label for="designation" class="form-label">Désignation</label>
            <input type="text" class="form-control" placeholder="Désignation" v-model="article.designation">
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-6">
            <label for="marque" class="form-label">Marque</label>
            <input type="text" class="form-control" placeholder="Marque" v-model="article.marque">
          </div>
          <div class="col-md-6 ms-auto">
            <label for="qtestock" class="form-label">Qté Stock</label>
            <input type="number" class="form-control" placeholder="Qté Stock" v-model="article.qtestock">
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-6">
            <label for="prix" class="form-label">Prix</label>
            <input type="number" class="form-control" placeholder="Prix" v-model="article.prix">
          </div>
          <div class="col-md-6 ms-auto">
            <label for="scategorie" class="form-label">Sous Catégorie</label>
            <select class="form-control" v-model="article.scategorieID">
              <option v-for="sc in Scategories" :key="sc.id" :value="sc.id">{{sc.nomscategorie}}</option>
            </select>
          </div>
        </div>
  
        <div class="row">
          <file-pond
            name="test"
            ref="pond"
            class-name="my-pond"
            label-idle="Drop files here..."
            allow-multiple="false"
            accepted-file-types="image/jpeg, image/png"
            v-bind:files="myFiles"
            v-on:init="handleFilePondInit"
            :server="serverOptions()"
          />
        </div>
  
        <br/>
  
        <button type="submit" class="btn btn-block btn-primary">Ajouter Produit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import vueFilePond from 'vue-filepond';
  import 'filepond/dist/filepond.min.css';
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
  
  const FilePond = vueFilePond(FilePondPluginImagePreview);
  const myFiles = ref([]);
  
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const Scategories = ref([]);
  
  const getScategories = () => {
    axios.get('/api/scategories')
      .then(res => {
        Scategories.value = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  onMounted(() => {
    getScategories();
  });
  
  const article = {
    reference: "",
    designation: "",
    marque: "",
    prix: "",
    qtestock: "",
    imageart: "",
    scategorieID: "",
  };
  
  const ajouterproduit = () => {
    axios.post("/api/articles", article)
      .then(() => {
        router.push('/articles');
      })
      .catch(error => {
        console.error("Erreur !", error);
      });
  }
  
  const handleFilePondInit = () => {
    console.log('FilePond has initialized');
  }
  
  const serverOptions = () => {
    console.log('server pond');
    return {
      process: (fieldName, file, metadata, load, error, progress, abort) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'Ecommerce_cloudinary');
        data.append('cloud_name', 'E-commerce');
        data.append('public_id', file.name);
        axios.post('https://api.cloudinary.com/v1_1/iset-sfax/image/upload', data)
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            article.value.imageart = data.url;
            load(data);
          })
          .catch((error) => {
            console.error('Error uploading file:', error);
            error('Upload failed');
            abort();
          });
      },
    };
  };
  
  </script>
  