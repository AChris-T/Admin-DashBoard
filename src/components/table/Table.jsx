import "./table.scss"
import List from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Table = () => {

    const rows =[
        {
            id:1143155,
            product:"Acer Nitro 5",
            img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
            customer:"John Smith",
            date:"1 March",
            amount:785,
            method:"Cash on Delivery",
            status:"Approved"
        },
        {
            id:2235235,
            product:"Acer Nitro 5",
            img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            customer:"John Smith",
            date:"1 March",
            amount:900,
            method:"Online Payment",
            status:"Pending"
        },
        {
            id:2342353,
            product:"Redragon S101",
            img: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80",
            customer:"John Smith",
            date:"1 March",
            amount:35,
            method:"Cash on Delivery",
            status:"Pending"
        },
        {
            id:2357741,
            product:"Razer Blade 15",
            img: "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            customer:"John Smith",
            date:"1 March",
            amount:920,
            method:"Online",
            status:"Approved"
        },
        {
            id:2342355,
            product:"ASUS ROG Strix",
            img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            customer:"Harold Carol",
            date:"1 March",
            amount:785,
            method:"Cash on Delivery",
            status:"Approved"
        },
        {
            id:114315,
            product:"Acer Nitro 5",
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            customer:"John Smith",
            date:"1 March",
            amount:785,
            method:"Cash on Delivery",
            status:"Approved"
        },
    ]
  return (
    <TableContainer component={Paper} className="table">
      <List sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell" >Product</TableCell>
            <TableCell className="tableCell" >Customer</TableCell>
            <TableCell className="tableCell" >Date</TableCell>
            <TableCell className="tableCell" >Amount</TableCell>
            <TableCell className="tableCell" >Payment Method</TableCell>
            <TableCell className="tableCell" >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tableCell"> {row.id} </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                <img src={row.img} alt="product" className="image"/>
                {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </List>
    </TableContainer>
  )
}

export default Table