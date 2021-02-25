import React from 'react';
import { connect } from 'react-redux';

const Tracker = ({user}) => {

    return <div>HOME</div>
  
}

const mapStateToProps = ({AuthReducer}) =>({
    user: AuthReducer.user
})

export default connect(mapStateToProps)(Tracker);