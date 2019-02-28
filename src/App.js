import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Jamie's Portfolio">
        <header className="Navigation">
      
      <ul class="Navigation">
      <li><a href="#">Home</a></li>
      <li><a href="#project">Projects</a></li>
      <li><a href="#aboutme">About Me</a></li>
      </ul>
      </header>

      <body className="body">
      <div>
      <p class="Review">
          Welcome to my portfolio website. Here I will demonstrate my web development background and programming knowledge via small projects and tasks I have completed. I would like to improve on my web development skills by creating websites and improve my knowledge of programming in Java, Node, Angular JS, HTML, CSS, C# and C++ as well as other technologies.
          I have a BSc degree in information technology as a practitioner. I managed to achieve a first class honours degree at Coventry University. I have always enjoyed using computers and learning to program. I have managed to complete various projects within university and outside of my studies I have designed programs in C++ and C#. I have also completed a sample shopping website using HTML, CSS. 
          </p>
      </div>
     
    <div className="Projects">
    <ul class="Project-Title">
      <li id="project">Projects</li>
      </ul>
    
    <h4>App Inventor tutorial</h4>

    <p class="Review">
       This was a application I designed for a phone which was a quiz. It enabled the user to select the correct answer and it enabled the user to change the colour, text size and included text to speech function. In addtion, I was able to create different level varying from easy to hard. It would caluclate the amount of questions you got right and wrong.
      </p>

<div class="wrapper">
<div class="videowrapper">
<iframe src="https://www.youtube.com/embed/nCDdHbUkRLk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowfullscreen></iframe>
</div>
  

</div>
      
    </div>
      
<h4>Web shopping website</h4>

<p class="Review">
This is a website I designed in HTML and CSS. It was a shopping website which enabled the users to select products from the images and it would calculate the total. It enabled the user to remove or add products to the basket.
</p>

<a href="https://jamies-shopping-website.netlify.com/"> Shopping Website
<img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a33d7450726913.58d847da0cc52.jpg"
/>
</a>

<div class="xyzlondon">
<a href="http://xyzlondon.co.uk/"> XYZ London
<img class="xyzlondon"src="https://scontent.flhr2-2.fna.fbcdn.net/v/t1.0-9/49536018_1657209191047065_7600924509880713216_n.jpg?_nc_cat=111&_nc_ht=scontent.flhr2-2.fna&oh=817795f8d42c45b6602f532109958841&oe=5D2618EA"
/>
</a>
</div>


<div className="About Me">
    <ul class="Project-Title">
      <li id="aboutme">About Me</li>
      </ul>

      <div class="AboutMe">
      
      </div>
      <img class="jamie"
      src="https://scontent.flhr2-1.fna.fbcdn.net/v/t1.0-9/13886900_133448257097911_4861442436171259254_n.jpg?_nc_cat=109&_nc_ht=scontent.flhr2-1.fna&oh=d3461f46e07933fccea52a5f031da8d2&oe=5D1E5D91"
      />
      </div>
        
      
      <p class="Review">
          I enjoy listening to music playing football and going to the gym. I also support Arsenal FC and enjoy watching basketball and support the Raptors in Canada. I also enjoy travelling the world and seeing various cultures and meeting new people. I enjoy learning new things and I am open to trying new stuff. I have a clothing business which I run, we print, embriod and design.
      </p>
    
      <div className="About Me">
    <ul class="Project-Title">
      <li id="aboutme">Contact Me</li>
      </ul>
      </div>
     
      <iframe class="form" src="https://docs.google.com/forms/d/e/1FAIpQLSdQPsBtWba2Gu5ccyQzfWLpiugFSd71x8r7Nizg5OgYJfCcEg/viewform?embedded=true" width="auto" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>      
        
      </body>
        

      </div>
    );
  }
}

export default App;
