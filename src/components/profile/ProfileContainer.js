import React from 'react'
import {connect} from 'react-redux'
import Profile from "./Profile";
import {
    addPostActionCreator,
    likePressActionCreator,
    getProfileThunkCreator,
    getStatusThunkCreator,
    putStatusThunkCreator,
    uploadPhotoThunkCreator,
    saveProfileThunkCreator
} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {RedirectContainer} from "../common/redirect/RedirectContainer";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedId
        }
            this.props.setProfile(userId);
        this.props.getStatus(userId)
    }

    render =() => {
        let isOwner = (!this.props.match.params.userId);
            return (
                <Profile {...this.props} isOwner={isOwner}/>
            )
    }
}

let mapStateToProps = (state)=>{
    return {
        profile: state.profileData.profile,
        data: state.profileData.postData,
        isAuth: state.auth.isAuth,
        status: state.profileData.status,
        authorisedId: state.auth.userId
    }
};

export default compose(
    connect(mapStateToProps, {
        AddNewPost: addPostActionCreator,
        likePress: likePressActionCreator,
        setProfile: getProfileThunkCreator,
        getStatus: getStatusThunkCreator,
        putStatus: putStatusThunkCreator,
        uploadPhoto: uploadPhotoThunkCreator,
        saveProfile: saveProfileThunkCreator
    }),
    withRouter,
    RedirectContainer
)(ProfileContainer);