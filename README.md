# Assignment #6. jQuery (Selectors, Effects, Animations)

**Student Name:** Isaali Abdunabi  
**Group:** IT-2502


## Part 1. Getting Started with jQuery

### Task 0. Setup
Included jQuery from CDN and added `$(document).ready()` function that prints `"jQuery is ready!"` in the browser console.



### Task 1. Selectors & CSS
Created the portfolio profile section. Used tag (`h1`), ID (`#student-name`), and class (`.headline`, `.intro-text`) selectors. Implemented text/HTML updates with `.text()` and `.html()`, and theme switching (Light/Dark) with `.css()`.



## Part 2. jQuery Effects

### Task 2. Visibility Methods
Created the "About Me" section with biography, status message, and fun facts. Added Hide, Show, and Toggle buttons using `.hide()`, `.show()`, and `.toggle()`.



### Task 3. Fade Methods
Added a gallery section with two images and implemented `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()` buttons.



### Task 4. Slide Methods
Created three clickable headings with collapsible panels underneath. Used `.slideToggle()`, `.slideUp()`, and `.slideDown()` to control panel visibility.



## Part 3. DOM Manipulation with jQuery

### Task 5. Add & Remove Elements
Created a list of four initial technical skills and an input field. Used `.append()` to add a skill to the end, `.prepend()` to add to the beginning, and `.remove()` to delete the last skill. Added validation to prevent empty inputs.



### Task 6. Modifying Attributes
Added a GitHub profile link and a button that dynamically updates the `href` attribute using `.attr()`.



### Task 7. Form Interaction
Created a contact form with Name and Email inputs. Used `.val()` and `.text()` to display live input below the form as the user types.




## Part 4. Animations

### Task 8. Basic Animation
Created three skill bars with an initial width of `0px`. Used `.animate()` to smoothly expand each bar to different percentages (`85%`, `70%`, `80%`) on click, and animate them back to `0%` when clicked again.



## Summary of Work Process
In this assignment, I learned how to connect jQuery via CDN and wait for the DOM to load using `$(document).ready()`. I practiced selecting elements by tag, class, and ID, changing styles dynamically with `.css()`, and applying built-in jQuery effects (`hide/show`, `fade`, and `slide`). Finally, I practiced DOM manipulation (`.append()`, `.prepend()`, `.remove()`, `.attr()`, `.val()`) and created smooth width transitions for skill bars using `.animate()`.
