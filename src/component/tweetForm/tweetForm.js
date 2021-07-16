import React from 'react';
import { Icon } from '../icon';
import { Tweet } from '../tweet';
import {setState} from 'react';


const TweetForm = (props) => {
    const { tweetText, onChangeTweetForm, handleTweetSubmit} = props;


    // const handleTweetSubmit = (e) => {
    //     e.preventDefault();
    //     const currentUser = JSON.parse(localStorage.getItem("isLoggedIn"));
    //     debugger
    //     const newTweet = {
    //         "id": "7c7b6e90-1b5d-4f67-be97-357861e69ca4",
    //         "name": currentUser[0].name,
    //         "username": currentUser[0].username,
    //         "tweetContent": tweetText,
    //         "likeCount": 0,
    //         "retweetCount": 0,
    //         "replyCount": 0,
    //         "dateTime": Date().toLocaleString()
    //     };

    //     // [props.tweets].concat(newTweet);

    //     props.tweets.unshift(newTweet);

          
       
    //   };

    return (
        <div className="tweetField">
            <div className="tweetField__profilePic">
                <Icon size={46} iconName="user" />
            </div>
            <div className="tweetField__inputContainer">
                <input
                    className="tweetField__input"
                    onChange={onChangeTweetForm}
                    placeholder="What's Happening"
                    value={tweetText}
                />
                <div className="tweetField__options">
                    <div className="tweetField__tools">
                        <button className="tweetField__items">
                            <Icon size={20} iconName="image" />
                        </button>
                        <button className="tweetField__items">
                            <Icon size={20} iconName="bar-chart-2" />
                        </button>
                    </div>
                    <div className="tweetField__submit">
                        <button onClick={handleTweetSubmit} className="tweetField__submitButton">
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TweetForm