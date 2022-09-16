import "./singlepage.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"

const SinglePage = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
          <div className="item">
              <img src="https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2014/12/1-thick-twists-for-black-girls.jpg?resize=500%2C600&ssl=1 " 
              alt="img"
              className="itemImg" 
              />
              <div className="details">
              <h1 className="itemTitle">Isaac</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">isaac003@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">08023360971</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Orogun, Ibadan Oyo State</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Nigeria</span>
              </div>
              </div>
          </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default SinglePage