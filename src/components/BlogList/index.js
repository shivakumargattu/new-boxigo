import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('http://test.api.boxigo.in/sample-data/')
    const data = await response.json()
    console.log(data.Customer_Estimate_Flow)

    const formattedData = data.Customer_Estimate_Flow.map(eachItem => ({
      estimateId: eachItem.estimate_id,
      movingFrom: eachItem.moving_from,
      movingTo: eachItem.moving_to,
      propertySize: eachItem.property_size,
      orderDate: eachItem.order_date,
      newFloorNo: eachItem.new_floor_no,
      movingOn: eachItem.moving_on,
      userId: eachItem.user_id,
      distance: eachItem.distance,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogsData.map(eachBlogItem => (
              <BlogItem
                key={eachBlogItem.estimateId}
                blogItemDetails={eachBlogItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
