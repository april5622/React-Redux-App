import React from "react";
import {connect} from "react-redux";
import { getAdvice } from "../store/actions/index";

const Advice = ({ getAdvice, advice, isFetching, error}) => {
    if(isFetching) {
        return <h2>Fetching advice</h2>;
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h2>advice: {advice} </h2>
            <button onClick={getAdvice}>Get new advice</button>
        </div>
    );

};

const mapStateToProps = state => {
    return {
        advice: state.advice,
        isFetching: state.isFetching,
        error: state.error
        
    };
};

export default connect(mapStateToProps,{getAdvice})(Advice);