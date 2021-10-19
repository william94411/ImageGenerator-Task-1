var array=["https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg","https://polarr-ppe-assets.s3-us-west-1.amazonaws.com/onboarding/01_02_preview_2x.jpg","https://cdn.vox-cdn.com/thumbor/NKqmT9bcuZM8r-Q-6XlNbesqBxg=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/69797630/jbareham_181010_2989_0323.0.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xZClrXPFcFRsEL9pxbQcJ-mSefWz46O7Cw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7p864jgKRqUvMFo51wi9enU8ZHu_08ZR6w&usqp=CAU"];
let picture=document.getElementById("pic");
let button=document.getElementById("btn");
let i=0;
button.addEventListener("click",function(){
    picture.src=array[i++];
    if(i==array.length){i=0;}
});
