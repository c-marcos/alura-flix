
export const convertData = (data: any) => {
   const categoria = data.categoria.split(' ').join('').toLowerCase();
   return {
      id: data.id,
      title: data.titulo,
      category: categoria,
      linkImg: data.imagem,
      linkVideo: data.video,
      description: data.descricao
   }
}
