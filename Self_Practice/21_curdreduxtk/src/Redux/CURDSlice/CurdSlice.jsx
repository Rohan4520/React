import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

//Read data
export const fetchShowData = createAsyncThunk ('showData' ,async (args)=> {
        let response = await fetch("http://localhost:3000/PersonData")
        try {
            let showResult = response.json();
            return showResult
        }
        catch(error) {
                return error 
        }
}) ;

// insert data 
export const insertData = createAsyncThunk ('insertdata' ,async (data)=> {
    // console.log(data)
    let response = await fetch("http://localhost:3000/PersonData" , {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    });

    try {
        const insertUserData = await response.json() ;
        return insertUserData;
    } catch  (error) {
        return isRejectedWithValue(error );
    }
});

//update data
export const fetchUpdateData = createAsyncThunk('updatedata', async(data)=>{
    let response= await fetch(`http://localhost:3000/PersonData/${data.id}`,{
        method: "PUT",
        headers:{
            "content-type" : "application/json"
        },
        body: JSON.stringify(data)

    })
    try{
        let updateresult = response.json;
        return updateresult;
    }
    catch{error}
    return error;
});

export const deleteData = createAsyncThunk('deletedata', async(data)=>{
    let response= await fetch(`http://localhost:3000/PersonData/${data.id}`,{
        method: "DELETE",
        headers:{
            "content-type" : "application/json"
        },
        body: JSON.stringify(data)

    })
    try{
        let deleteresult = response.json;
        return deleteresult;
    }
    catch{error}
    return error;
});
   

export const CurdSlice = createSlice( {
    name : "CURD" ,

    initialState :  {
        isLoading : false ,
        data : [] ,
        error : null 
    },

    extraReducers : (builder)=> {
        //show  all data 
        builder.addCase(fetchShowData.pending , (state  )=> {
            state.isLoading =true ;
        });
        builder.addCase(fetchShowData.fulfilled , (state , action )=> {
            state.isLoading = false ;
            state.data  = action.payload
        });
        builder.addCase(fetchShowData.rejected , (state , action   )=> {
            state.isLoading = false ;
            state.error = action.payload;
        });

        //insert  data
        builder.addCase(insertData.pending , (state)=> {
            state.isLoading =true;
        });
        builder.addCase(insertData.fulfilled , (state , action)=> {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(insertData.rejected , (state , action)=> {
            state.isLoading = false ;
            state.error = action.payload;
        });
    
        // //update data
        builder.addCase(fetchUpdateData.pending,(state)=>{
            state.isLoading= true;
        })

        builder.addCase(fetchUpdateData.fulfilled,(state,action)=>{
            state.isLoading= false;
            const{id} = action.payload;
            state.data=state.data.map((value)=>value.id=== id );
        })
        builder.addCase(fetchUpdateData.rejected,(state,action)=>{
            state.isLoading= false;
            state.error=action.payload
        });

        // delete user data
        builder.addCase(deleteData.pending,(state)=>{
            state.isLoading= true;
        })

        builder.addCase(deleteData.fulfilled,(state,action)=>{
            state.isLoading= false;
            const{id} = action.payload;
            state.data=state.data.map((value)=>value.id=== id );
        })
        builder.addCase(deleteData.rejected,(state,action)=>{
            state.isLoading= false;
            state.error=action.payload
        });
    
    
    
    
    
    
    
    }
})

export default CurdSlice.reducer ;