import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineHome} from 'react-icons/ai'

import {ImOffice} from 'react-icons/im'
import {GiPathDistance} from 'react-icons/gi'
import {TbTruckDelivery} from 'react-icons/tb'
import {TfiAlert, TfiArrowRight} from 'react-icons/tfi'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`http://test.api.boxigo.in/sample-data/{id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      estimateId: data.estimate_id,
      movingFrom: data.moving_from,
      movingTo: data.moving_to,
      propertySize: data.property_size,
      orderDate: data.order_date,
      newFloorNo: data.new_floor_no,
      movingOn: data.moving_on,
      userId: data.user_id,
      distance: data.distance,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {
      estimateId,
      movingTo,
      movingFrom,
      propertySize,
      orderDate,
      newFloorNo,
      movingOn,
      distance,
    } = blogData

    return (
      <div className="blog-info">
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
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
