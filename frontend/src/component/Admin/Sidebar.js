

import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import "./Header.css"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";


const Sidebar = () => {
  return (
    <Fragment>
     <div class="navigation">
      <nav class="nav">
        <div>
        <Link to="/admin/dashboard" class="logo">
            <span class="logo-icon">
              <ion-icon name="globe-outline"></ion-icon>
            </span>
            <span class="logo-text" >BD SHOP</span>
          </Link>
         

          <ul class="nav-list">

          
            <Link to="/admin/dashboard" class="nav-link">
              <p  className="nav-text">
                <DashboardIcon /> &nbsp;   Dashboard
              </p>
            </Link>

             <Link to="/admin/products" class="nav-link">
              <p className="nav-text">
                <PostAddIcon /> &nbsp;   All Products
              </p>

             </Link>

            <Link to="/admin/product" class="nav-link">
              <p className="nav-text">
                <AddIcon /> &nbsp;   Add Products
              </p>
            </Link>





            <Link to="/admin/orders" class="nav-link">
              <p className="nav-text">
                <ListAltIcon /> &nbsp;
                Orders
              </p>
            </Link>
            <Link to="/admin/users" class="nav-link">
              <p className="nav-text">
                <PeopleIcon /> &nbsp; Users
              </p>
            </Link>
            <Link to="/admin/reviews" class="nav-link">
              <p className="nav-text">
                <RateReviewIcon  /> &nbsp;
                Reviews
              </p>
            </Link>
          
           
          
          </ul>
        </div>
       
      </nav>
    </div>
    
    </Fragment>
  )
}

export default Sidebar


















// import React from 'react'
// import "./sidebar.css"
// import logo from "../../images/logo.png";
// import { Link } from "react-router-dom";
// import { TreeView, TreeItem } from "@material-ui/lab";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import PostAddIcon from "@material-ui/icons/PostAdd";
// import AddIcon from "@material-ui/icons/Add";
// import ImportExportIcon from "@material-ui/icons/ImportExport";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import PeopleIcon from "@material-ui/icons/People";
// import RateReviewIcon from "@material-ui/icons/RateReview";


// const Sidebar = () => {
//   return (
//    <div className="sidebar">
//       <Link to="/">
//         <img src={logo} alt="Ecommerce" />
//       </Link>
//       <Link to="/admin/dashboard">
//         <p>
//           <DashboardIcon /> Dashboard
//         </p>
//       </Link>
//       <Link>
//         <TreeView className="tClass"
//           defaultCollapseIcon={<ExpandMoreIcon />}
//           defaultExpandIcon={<ImportExportIcon />}
//         >
//           <TreeItem nodeId="1" label="Products"  >
//             <Link to="/admin/products">
//               <TreeItem nodeId="2" className="tClass" label="All" icon={<PostAddIcon />} />
//             </Link>

//             <Link to="/admin/product">
//               <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
//             </Link>
//           </TreeItem>
//         </TreeView>
//       </Link>
//       <Link to="/admin/orders">
//         <p>
//           <ListAltIcon />
//           Orders
//         </p>
//       </Link>
//       <Link to="/admin/users">
//         <p>
//           <PeopleIcon /> Users
//         </p>
//       </Link>
//       <Link to="/admin/reviews">
//         <p>
//           <RateReviewIcon />
//           Reviews
//         </p>
//       </Link>
//     </div>
//   )
// }

// export default Sidebar





