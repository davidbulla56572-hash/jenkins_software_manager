import { defineStore } from "pinia";

export default defineStore('kart', {
    state: () => ({
        products: JSON.parse(JSON.stringify([
            {
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            },
            {
                "albumId": 1,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "https://via.placeholder.com/600/771796",
                "thumbnailUrl": "https://via.placeholder.com/150/771796"
            }, {
                "albumId": 1,
                "id": 3,
                "title": "officia porro iure quia iusto qui ipsa ut modi",
                "url": "https://via.placeholder.com/600/24f355",
                "thumbnailUrl": "https://via.placeholder.com/150/24f355"
            }, {
                "albumId": 1,
                "id": 4,
                "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                "url": "https://via.placeholder.com/600/d32776",
                "thumbnailUrl": "https://via.placeholder.com/150/d32776"
            }, {
                "albumId": 1,
                "id": 5,
                "title": "natus nisi omnis corporis facere molestiae rerum in",
                "url": "https://via.placeholder.com/600/f66b97",
                "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
            }, {
                "albumId": 1,
                "id": 6,
                "title": "accusamus ea aliquid et amet sequi nemo",
                "url": "https://via.placeholder.com/600/56a8c2",
                "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
            }
        ])),
        selectedProducts:[]
    }),
    actions:{
        addToKart({idProduct}){
            const validateExistInKart = this.selectedProducts.some(({id}) => Number(id) === Number(idProduct));

            if(validateExistInKart){
                this.selectedProducts = this.selectedProducts.map( product => (
                        Number(product.id) === Number(idProduct) ?
                            {
                                ...product,
                                cuantity: product.cuantity + 1
                            }
                        : product
                    )
                );
                return;
            };
            const findProduct = this.products.find(({id}) => Number(id) === Number(idProduct));
            if(!findProduct) return;

            this.selectedProducts = [...this.selectedProducts, {
                ...findProduct,
                cuantity: 1
            }];
        },
        removeProductToKart({idProduct}){
            this.selectedProducts = this.selectedProducts.filter(({id}) => Number(id) !== Number(idProduct));
        }
    },
    getters:{
        totalKart(state){
            return state.selectedProducts.reduce((init, {cuantity}) => {
                return init + cuantity;
            },0);
        }
    }
});