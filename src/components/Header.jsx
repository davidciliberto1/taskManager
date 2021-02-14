 import PropTypes from 'prop-types';
  import Button from './Button';
const Header = ({title}) => {
    return (
      <header className='Header'>
          <h1 style={headingStyle}>
              {title}
              
              <Button 
              color='green'
              text='ADD'
              />
              </h1>
          
      </header>
    )
}

const headingStyle = {
    color: 'green', 
    backgroundColor: 'black'
}

Header.defaultProps = {
    title: 'Task Tracker...',
}
Header.propTypes = {
    title: PropTypes.string.isRequired

}

export default Header
