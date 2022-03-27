// Funcion para tranformar en datos necesarios para la tabla
export const transformData = (films)=>{
    return films.map((film)=>({
        id: film.id,
        image: film.image,
        title: film.title,
        director: film.director,
        release_date: film.release_date,
        rt_score: film.rt_score, 
    }))
}