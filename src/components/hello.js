import React from 'react';

class Hello extends React.Component {
	render() {
		return <div>
			<h1>Hello {this.props.name} {this.props.lastName} from hello.js
			</h1>
			</div>;
	}
}

export default Hello;