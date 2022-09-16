export const userColumns =[
    { field: 'id', headerName: 'ID', width: 70 },
    { field: "user", headerName:"User", width:230, renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img}  alt="avatar"/>
                {params.row.username}
            </div>
        )
    } 
},
{
    field:"email",
    headerName:"Email", width:230,
},
{
    field:"age",
    headerName:"age", width:100,
},
{
    field:"status",
    headerName:"status", 
    width:160,
    renderCell:(params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
}
    
]
export const userRows=[
    {
        id:1,
        username:"Snow",
        img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
        status:"active",
        email:"akinfenwataiwo2019@gmail.com",
        age:35,
    },
    {
        id:2,
        username:"Sulaimon",
        img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
        status:"passive",
        email:"Sulaimontemitope@gmail.com",
        age:50,
    },
    {
        id:3,
        username:"Yusuff",
        img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
        status:"pending",
        email:"yusuf@gmail.com",
        age:25,
    },
    {
        id:4,
        username:"Isaac",
        img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
        status:"passive",
        email:"isaac003@gmail.com",
        age:35,
    },
    {
        id:5,
        username:"grace",
        img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
        status:"active",
        email:"grace@yahoo.com",
        age:35,
    },
    {
        id:6,
        username:"lala",
        img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
        status:"passive",
        email:"lalaboy@gmail.com",
        age:75,
    },
    {
        id:7,
        username:"Slender",
        img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
        status:"pending",
        email:"idris9@gmail.com",
        age:35,
    },
    {
        id:8,
        username:"sulai",
        img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
        status:"active",
        email:"sulia12@gmail.com",
        age:90,
    },
    {
        id:9,
        username:"Snow",
        img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
        status:"active",
        email:"akinfenwataiwo2019@gmail.com",
        age:35,
    },
    {
        id:10,
        username:"Femi",
        img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
        status:"passive",
        email:"femiarogafar@gmail.com",
        age:3,
    }
]