import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    { id: 0 , name: 'Dude Lebowski', date: sub( new Date(),{minutes:10}).toISOString(), reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        coffee:0
    }},
    { id: 1 , name: 'neil young', date: sub( new Date(), {minutes:5}).toISOString(), reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        coffee:0
    }},
    { id: 2 , name: 'Dave Gray' , date: sub( new Date(),{minutes:4}).toISOString(), reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        coffee:0
    }},
    { id: 3 , name:'oliver boss',date: sub( new Date(),{minutes:5}).toISOString(), reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        coffee:0
    }}
]
const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
      addUser:{
        reducer(state,action){
            state.push(action.payload)
        },
        prepare(name,id){
            return{
                payload:{
                    id,
                    name,
                    date: new Date().toISOString(),
                    reactions:{
                        thumbsUp:0,
                        wow:0,
                        heart:0,
                        coffee:0
                    }
                }
            }
        }
      },
      addReactions(state,action){
        const {id,reaction} = action.payload;
        const existsItem = state.find((emoji) => emoji.id === id)
        if(existsItem){
            existsItem.reactions[reaction]++;
        }
      }
    }
})

export const selectAllUsers = state => state.users;
export const {addUser,addReactions} = usersSlice.actions
export default usersSlice.reducer;