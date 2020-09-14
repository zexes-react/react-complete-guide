import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch= (error, errorInfo) =>{
        this.setState({hasError: true, errorMessage: error});
    }

    // componentDidCatch(error, errorInfo) {
    //     this.setState({hasError: true, errorMessage: error});
    // }

    render() {
        if(this.setState.hasError){
            return <h1>Something went wrong</h1>
        }else{
            return this.props.children;
        }

    }
}

export default ErrorBoundary;