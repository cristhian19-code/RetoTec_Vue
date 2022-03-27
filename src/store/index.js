import axios from "axios";
import { createStore } from "vuex";
import { transformData } from "../helpers/transformData";

const store = createStore({
  state: {
    films: [],
    isLoading: false,
    total_page: 0,
    filmsPaginated: []
  },
  mutations: {
    setFilms(state, films) {
      state.films = films;
    },
    setLoading(state, loading) {
      state.isLoading = loading;
    },
    setTotalPage(state,total){
      state.total_page = total;
    },
    setFilmsPage(state,filmsPaginated){
      state.filmsPaginated = filmsPaginated;
    }
  },
  actions: {
    async getFilms({ commit,dispatch }) {
      // Commit setLoadin para mostrar el componente Loading
      commit("setLoading", true);

      // Obteniedo los datos de endpoint por medio de axios
      const resp = await axios.get("https://ghibliapi.herokuapp.com/films");

      // Commit setFilms enviando los datos
      commit("setFilms", resp.data);

      // llamando la accion para el numero de paginas
      dispatch('totalPages')

      // Commit setLoadin para ocultar el componente Loading
      commit("setLoading", false);
    },
    totalPages({commit,state}){
      commit("setTotalPage", Math.ceil(state.films.length / 5));
    },
    getFilmsPage({commit,state},page){
      const arrFilms = [...state.films].slice(page*5, (page+1)*5);

      commit('setFilmsPage',arrFilms);
    }
  },
  getters: {
    searchFilm:
      (state) =>
      (search = "") => {
        // Verificando si el valor de search es vacio
        if (search.trim().length == 0 && search) {
          return transformData(state.films).slice(0, 5);
        }

        // Filtrando los datos por el valor de search
        const searchData = state.films.filter((film) =>
          film.title.toLowerCase().includes(search.trim().toLowerCase())
        );
        
        return transformData(searchData).slice(0, 5);
      },
    getFilmByID: (state) => (id) => {
      // Buscando el film por su id
      return state.films.find((film) => film.id === id);
    },
    
  },
});

export default store;
