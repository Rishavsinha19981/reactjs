import React from 'react'
import"./productlist.css";
import { DataGrid } from '@material-ui/data-grid';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'; 
export const ProductList = () => {
    const [data,setData] = useState(productRows)
    
    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
           
            
            renderCell:(Params)=>{
                return(
                    <div className="productListItem">
                        <img className="productListImg" src={Params.row.img} alt=""  />
                          {Params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200,
            
            
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
           
           
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
            
         },
            {
                field:'action',
                headerName:'Action',
                width:150,
                renderCell:(Params)=>{
                    return(
                        <div>
                                <Link to={"/product/"+Params.row.img}>
                                
                                    <button className="productListEdit">Edit</button>
                                
                                </Link>
                                
                                <DeleteOutlineIcon className="productListDelete" onClick={()=>handleDelete(Params.row.id)}/>

                        </div>
                    )
                }              
                        
            },
    ];

    return (
        <div className="productList">
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
