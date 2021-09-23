import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
 import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'; 
 import { userRows } from '../../dummyData';
 import { Link } from 'react-router-dom';
 

export const UserList = () => {
    const [data,setData]= useState(userRows)
    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id !==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
           
            
            renderCell:(Params)=>{
                return(
                    <div className="userListuser">
                        <img className="userListImg" src={Params.row.avatar} alt=""  />
                          {Params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            
            
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
           
           
        },
        {
            field: 'transaction',
            headerName: 'Transaction  Volume',
            width: 160,
            
         },
            {
                field:'action',
                headerName:'Action',
                width:150,
                renderCell:(Params)=>{
                    return(
                        <div>
                                <Link to={"/user/"+Params.row.id}>
                                
                                    <button className="userListEdit">Edit</button>
                                
                                </Link>
                                
                                <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(Params.row.id)}/>

                        </div>
                    )
                }              
                        
            },
    ];

    
    return (
        <div className="userList">

          
        <DataGrid 
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
        
        />


        </div>                        
    )
}
