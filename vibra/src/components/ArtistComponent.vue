<template>
  <div class="artist-search">
    <div class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar artista..."
        @input="filterArtists"
        class="search-input"
      />
      <button @click="showModal = true" class="search-button">Buscar</button>
    </div>

    <div class="checkbox-container">
      <label>
        <input type="checkbox" v-model="isChecked" />
        Usar nombre como filtro
      </label>
    </div>

    <modal v-if="showModal" @close="showModal = false">
      <template #header>
        <h3>Artistas Encontrados</h3>
      </template>

      <template #body>
        <ul class="artist-list">
          <li v-if="filteredArtists.length === 0" class="no-results">No se encontraron artistas.</li>
          <li v-for="artist in filteredArtists" :key="artist.id" class="artist-item">
            <strong>Nombre:</strong> {{ artist.name }}<br />
            <strong>Género:</strong> {{ artist.genre }}
          </li>
        </ul>
      </template>

      <template #footer>
        <button @click="showModal = false" class="close-button">Cerrar</button>
      </template>
    </modal>
  </div>
</template>

<script>
import axios from 'axios';
import Modal from './Modal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      artists: [],
      searchQuery: '',
      filteredArtists: [],
      showModal: false,
      isChecked: false,
    };
  },
  methods: {
    async fetchArtists() {
      try {
        const response = await axios.get('http://localhost:8000/artists');
        this.artists = response.data;
        this.filteredArtists = this.artists;
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    },
    filterArtists() {
      if (this.isChecked) {
        this.filteredArtists = this.artists.filter(artist =>
          artist.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredArtists = this.artists;
      }
    },
  },
  mounted() {
    this.fetchArtists();
  },
};
</script>

<style scoped>
.artist-search {
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 10px;
}

.search-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background-color: #0056b3;
}

.checkbox-container {
  margin-bottom: 20px; 
}

.artist-list {
  list-style-type: none;
  padding: 0;
}

.artist-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.artist-item:last-child {
  border-bottom: none;
}

.no-results {
  padding: 10px;
  color: #999;
}

.close-button {
  padding: 10px 15px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #c82333;
}
</style>
