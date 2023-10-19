import React from "react";
import profileReducer, { addPostActionCreator } from "./profileReducer";



test('length of posts should be incremented', () => {
    // 1. test.data
    let action = addPostActionCreator('programmer');
    let state = {
        posts: [
          { id: 1, message: "Hi, how are you?", likesCount: 10 },
          { id: 2, message: "Its my first post", likesCount: 20 },
        ]
      };
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length === 5).toBe(5);
  });

 
  test('after deleting length of messages should be decrement', () => {
    // 1. test.data
    let action = deletePost(1);
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
  });



