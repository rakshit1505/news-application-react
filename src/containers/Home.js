import React, { Component } from 'react';
import { connect } from 'react-redux';
import { latestNews,otherNews,latestGallery } from '../actions'
import { bindActionCreators } from 'redux';

// COMPONENTS
import LatestNews from '../components/home/Latest'
import OtherNews from '../components/home/OtherNews'
import Gallery from '../components/home/Gallery'

class Home extends Component {

    componentDidMount(){
        console.log("====componentDidMount=====")
        console.log(this.props)
        console.log("====componentDidMount=====")
        this.props.latestNews();
        this.props.otherNews();
        this.props.latestGallery();
    }

    render() {
        return (
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews otherNews={this.props.articles.other}/>
                <Gallery latestGallery={this.props.gallery.latestGallery}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("====mapStateToProps for home=====")
    console.log(state.articles)
    console.log("====mapStateToProps for home=====")
    return {
        articles:state.articles,
        gallery:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    console.log("====mapDispatchToProps for home=====")
    console.log(dispatch)
    console.log("====mapDispatchToProps for home=====")
    return bindActionCreators({latestNews,otherNews,latestGallery}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
