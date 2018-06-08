import React from 'react';
import PropTypes from 'prop-types';

export default class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    return (
      <div className="modal-backdrop" style={backdropStyle}>
	      <div className="modal-dialog">
		      <div className="modal-content">
		      	<div className="modal-header">
		      		<h4 className="modal-title">{this.props.title}</h4>
		            <button className="btn btn-default" className="close" onClick={this.props.onClose}>
		            	<span>x</span>
		            	<span className="sr-only">Close</span>
		            </button>
		          </div>
	       		 <div className="modal-body">
	          		{this.props.children}	          
	        	</div>
	        	<div className="modal-footer">
		            <button className="btn btn-default" onClick={this.props.onClose}>
		              Close
		            </button>
		          </div>
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
  title:PropTypes.string
};
