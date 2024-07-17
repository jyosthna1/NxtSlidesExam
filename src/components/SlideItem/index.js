import './index.css'

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

const SlideItem = props => {
  const {details, onChangeTab, slideNumber, activeSlide} = props
  const {id, heading, description} = details
  const number = parseInt(slideNumber) + 1

  const backgroundColor = activeSlide ? 'background-lightBlue' : 'transparent'
  const onClickChangeSlide = () => onChangeTab(id)

  return (
    <li
      onClick={onClickChangeSlide}
      testid={`slideTab${number}`}
      className={`slide-number-container ${backgroundColor}`}
    >
      <p className="slide-number">{number}</p>
      <div className="slide-container-item">
        <h1 className="slider-head">{heading}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default SlideItem
