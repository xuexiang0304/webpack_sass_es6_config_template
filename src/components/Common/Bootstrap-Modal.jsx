import React from 'react';
import PropTypes from 'prop-types';

class ModalFooter extends React.Component{
  render(){
    return(
      <div className="modal-footer">
        {this.props.children}  
        <button className="btn btn-default" onClick={this.props.onClose}>
          Close
        </button>
      </div>
    )
  }
}
class ModalHeader extends React.Component{
  render(){
    return(
        <div className="modal-header">
          <h4 className="modal-title">{this.props.title}</h4>
          {this.props.children}
          <button className="btn btn-default" className="close" onClick={this.props.onClose}>
            <span>x</span>
            <span className="sr-only">Close</span>
          </button>
        </div>
    )
  }
}

class ModalBody extends React.Component{
  render(){
    return(
      <div className="modal-body">
          {this.props.children}           
      </div>
    )
  }
}

export default class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
      overflow: 'auto'
    };

    return (
      <div className="modal-backdrop" style={backdropStyle}>
	      <div className="modal-dialog">
		      <div className="modal-content">
	          	{this.props.children}	          
	        </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};
ModalHeader.propTypes ={
  onClose: PropTypes.func.isRequired,
  title:PropTypes.string,
  children: PropTypes.node
}
ModalBody.propTypes ={
  children: PropTypes.node,
}
ModalFooter.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export {ModalHeader, ModalBody, ModalFooter}