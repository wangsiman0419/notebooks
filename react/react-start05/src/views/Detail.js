import React, { Component } from 'react';
// import queryString from 'query-string'
class Detail extends Component {
    render() {
        return (
            <div>
                详情页
            </div>
        );
    }
    /* cdm */
    componentDidMount() {
        // var url=this.props.location.search;
        // console.log(queryString.parse(url))
        console.log(this.props.match.params)
    }
}

export default Detail;