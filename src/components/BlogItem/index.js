import {Link} from 'react-router-dom'

import {AiOutlineHome} from 'react-icons/ai'

import {ImOffice} from 'react-icons/im'
import {GiPathDistance} from 'react-icons/gi'
import {TbTruckDelivery} from 'react-icons/tb'
import {TfiAlert, TfiArrowRight} from 'react-icons/tfi'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {
    estimateId,
    movingTo,
    movingFrom,
    propertySize,
    orderDate,
    newFloorNo,
    movingOn,
    distance,
  } = blogItemDetails

  return (
    <li className="blog-item">
      <div className="blog-item-container">
        <div>
          <div className="cards">
            <div className="itemsa">
              <p className="each-items">FROM</p>
              <p>{movingTo}</p>
            </div>

            <div className="itemsa">
              <br />
              <br />
              <TfiArrowRight size="30px" padding-top="70px" />
            </div>
            <div className="itemsa">
              <p className="each-items">TO</p>
              <p>{movingFrom}</p>
            </div>
            <div className="itemsa">
              <p className="each-items">Request#</p>
              <h5>{estimateId}</h5>
            </div>
          </div>
          <div className="card2">
            <div className="home-card">
              <AiOutlineHome size="40px" className="bg-color" />
              <p className="para">{propertySize}</p>
            </div>
            <div className="home-card">
              <ImOffice size="40px" />
              <p className="para">{newFloorNo}</p>
            </div>
            <div className="home-card">
              <GiPathDistance size="40px" />
              <p className="para">{distance}</p>
            </div>
            <div className="home-card">
              <TbTruckDelivery size="40px" />
              <p className="para">{movingOn}</p>
            </div>

            <div className="button-container">
              <Link to={`/blogs/${estimateId}`} className="blog-item-link">
                <button type="button">View Move Details</button>
              </Link>
              <button type="button" className="button1">
                Qouest Watings
              </button>
            </div>
          </div>
          <div className="card3">
            <TfiAlert size="40px" />
            <p1 className="para">
              Disclamer:<sanp>Please Updtae moves days befrore 2 days</sanp>
            </p1>
          </div>
        </div>
      </div>
    </li>
  )
}

export default BlogItem
