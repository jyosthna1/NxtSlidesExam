import './index.css'
import {Component} from 'react'

import {v4} from 'uuid'
import SlideItem from '../SlideItem'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {
    activeTab: initialSlidesList[0],
    slideList: initialSlidesList,
    changeHead: initialSlidesList[0].heading,
    changeDescription: initialSlidesList[0].description,
    onModifyHead: false,
    onModifyDescription: false,
  }

  onChangeTab = id => {
    const {slideList} = this.state
    const changeSlide = slideList.find(eachOne => eachOne.id === id)
    const newHead = changeSlide.heading
    const newDes = changeSlide.description

    this.setState({
      activeTab: changeSlide,
      changeHead: newHead,
      changeDescription: newDes,
    })
  }

  onClickNewTab = () => {
    const {activeTab, slideList} = this.state
    const activeSlideIndex = slideList.indexOf(activeTab) + 1
    const length1 = slideList.length
    const firstHalf = slideList.slice(0, activeSlideIndex)
    const secondHalf = slideList.slice(activeSlideIndex, length1)

    const newSlide = {
      id: v4(),
      heading: 'Heading',
      description: 'Description',
    }

    firstHalf.push(newSlide)
    firstHalf.push(secondHalf)
    const newSlideList = firstHalf.flat()

    this.setState({
      slideList: newSlideList,
      activeTab: newSlide,
      changeHead: newSlide.heading,
      changeDescription: newSlide.description,
    })
  }

  onChangeHead = event => {
    const {slideList, activeTab} = this.state

    const valueHead = event.target.value
    this.setState({changeHead: valueHead})
    this.setState(prevState => ({
      slideList: prevState.slideList.map(eachItem => {
        if (eachItem.id === activeTab.id) {
          return {...eachItem, heading: valueHead}
        }
        return eachItem
      }),
    }))
  }

  onChangeDescription = event => {
    const {activeTab} = this.state
    const valueDes = event.target.value
    this.setState({changeDescription: valueDes})

    this.setState(prevState => ({
      slideList: prevState.slideList.map(eachItem => {
        if (eachItem.id === activeTab.id) {
          return {...eachItem, description: valueDes}
        }
        return eachItem
      }),
    }))
  }

  onClickChangeHeadStatus = () => {
    this.setState(prevState => ({onModifyHead: !prevState.onModifyHead}))
  }

  onClickChangeDescriptionStatus = () => {
    this.setState(prevState => ({
      onModifyDescription: !prevState.onModifyDescription,
    }))
  }

  render() {
    const {
      activeTab,
      slideList,
      changeHead,
      changeDescription,
      onModifyHead,
      onModifyDescription,
    } = this.state

    return (
      <div className="nxt-slides-container">
        <nav className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="nxt-slides-logo"
          />
          <h1 className="head">Nxt Slides</h1>
        </nav>
        <button
          type="submit"
          className="new-button"
          onClick={this.onClickNewTab}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="new-plus-icon"
          />
          New
        </button>
        <div className="side-bar-container">
          <ol className="un-order-list-slides">
            {slideList.map(eachSlide => (
              <SlideItem
                key={eachSlide.id}
                details={eachSlide}
                onChangeTab={this.onChangeTab}
                slideNumber={slideList.indexOf(eachSlide)}
                activeSlide={eachSlide.id === activeTab.id}
              />
            ))}
          </ol>
          <div className="active-slide-container">
            {onModifyHead ? (
              <input
                value={changeHead}
                type="text"
                onChange={this.onChangeHead}
                className="head-input"
                onBlur={this.onClickChangeHeadStatus}
              />
            ) : (
              <h1 className="head" onClick={this.onClickChangeHeadStatus}>
                {changeHead}
              </h1>
            )}
            {onModifyDescription ? (
              <input
                value={changeDescription}
                onChange={this.onChangeDescription}
                className="description-input"
                onBlur={this.onClickChangeDescriptionStatus}
              />
            ) : (
              <p
                className="description"
                onClick={this.onClickChangeDescriptionStatus}
              >
                {changeDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default NxtSlides
