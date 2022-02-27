import Player1Slice from './slice/player1';


const {configureStore} = require('@reduxjs/toolkit');


export default configureStore({
    reducer: {
        player1: Player1Slice
    }
})

