


// const task1=(callback)=>{
//     setTimeout(() => {
//         console.log("Task 1 completed");
//         callback();
//     }, 3000);
// };


// const task2=(callback)=>{
//     setTimeout(() => {
//         console.log("Task 2 completed");
//         callback();
//     }, 2000);
// };


// const task3=(callback)=>{
//     setTimeout(() => {
//         console.log("Task 3 completed");
//         callback();
//     }, 1000);
// };

// task1(function(){
//     task2(function(){
//         task3(function(){
//             console.log("all tasks completed");
//         })
//     })
// })


//----fetch user data(dummy)

const userData={id:1,name:"Agnes "}
const userPosts=[{id:101,content:"post 1"},
                 {id:101,content:"post 1"}]
const postComments={101:["comment 1","comment 2"],102:["comment 1","comment 2"]}


//----fetch user data
const fetchUserData=(userId, callback)=>{
    console.log("Fetching user data...");
    setTimeout(() => {
        callback(userData)
    }, 1000);
}


//----fetch user posts
const fetchUserPosts=(userId, callback)=>{
    console.log("Fetching user post...");
    setTimeout(() => {
        callback(userPosts)
    }, 1000);
}


//----fetch post comment
const fetchPostComment=(postId, callback)=>{
    console.log("Fetching post comments...");
    setTimeout(() => {
        callback(postComments[postId] || [])
    }, 1000);
}

//initiate the process

fetchUserData(1,function(userData){
    console.log("user Data",userData);
    fetchUserPosts(userData.id,function(userPosts){
        console.log("User Posts",userPosts);
        userPosts.forEach(function(post) {
            console.log("Post",post);
            fetchPostComment(post.id,function(comment){
                console.log("comments",comment);
            })
        });
    })
});
