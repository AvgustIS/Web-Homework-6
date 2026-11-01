# Assignment #6. jQuery (Selectors, Effects, Animations)

**Student Name:** Isaali Abdunabi  
**Group:** IT-2502


## Part 1. Getting Started with jQuery

### Task 0. Setup
Included jQuery from CDN and added `$(document).ready()` function that prints `"jQuery is ready!"` in the browser console.

<img width="1610" height="795" alt="Screenshot 2026-11-01 224702" src="https://github.com/user-attachments/assets/9c6c8fec-e5ec-49c1-a829-8bee318c34c1" />


### Task 1. Selectors & CSS
Created the portfolio profile section. Used tag (`h1`), ID (`#student-name`), and class (`.headline`, `.intro-text`) selectors. Implemented text/HTML updates with `.text()` and `.html()`, and theme switching (Light/Dark) with `.css()`.

<img width="1257" height="478" alt="image" src="https://github.com/user-attachments/assets/e72cc4d0-3363-4128-8998-8ef5e482a003" />


## Part 2. jQuery Effects

### Task 2. Visibility Methods
Created the "About Me" section with biography, status message, and fun facts. Added Hide, Show, and Toggle buttons using `.hide()`, `.show()`, and `.toggle()`.

<img width="989" height="451" alt="image" src="https://github.com/user-attachments/assets/9a9b3f47-b1e6-4895-9aaa-c969dff7191c" />


### Task 3. Fade Methods
Added a gallery section with two images and implemented `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()` buttons.

<img width="1001" height="435" alt="image" src="https://github.com/user-attachments/assets/36da2221-610f-4ba2-bffb-b084fddc044a" />


### Task 4. Slide Methods
Created three clickable headings with collapsible panels underneath. Used `.slideToggle()`, `.slideUp()`, and `.slideDown()` to control panel visibility.

<img width="1007" height="644" alt="image" src="https://github.com/user-attachments/assets/cbd24f6f-45bb-4478-96ac-000afd1bb094" />


## Part 3. DOM Manipulation with jQuery

### Task 5. Add & Remove Elements
Created a list of four initial technical skills and an input field. Used `.append()` to add a skill to the end, `.prepend()` to add to the beginning, and `.remove()` to delete the last skill. Added validation to prevent empty inputs.

<img width="956" height="314" alt="image" src="https://github.com/user-attachments/assets/573ade18-ea37-4376-b932-cd7572dc234b" />


### Task 6. Modifying Attributes
Added a GitHub profile link and a button that dynamically updates the `href` attribute using `.attr()`.

<img width="889" height="223" alt="image" src="https://github.com/user-attachments/assets/8adcacaf-ed75-41a9-a1cc-6506e6e7f5e0" />


### Task 7. Form Interaction
Created a contact form with Name and Email inputs. Used `.val()` and `.text()` to display live input below the form as the user types.


<img width="884" height="359" alt="image" src="https://github.com/user-attachments/assets/1fb38071-cd80-450e-871f-c97914af8999" />


## Part 4. Animations

### Task 8. Basic Animation
Created three skill bars with an initial width of `0px`. Used `.animate()` to smoothly expand each bar to different percentages (`85%`, `70%`, `80%`) on click, and animate them back to `0%` when clicked again.

<img width="914" height="383" alt="image" src="https://github.com/user-attachments/assets/f98ebff2-1c50-43a7-8c33-0c493dfbfc39" />


## Summary of Work Process
In this assignment, I learned how to connect jQuery via CDN and wait for the DOM to load using `$(document).ready()`. I practiced selecting elements by tag, class, and ID, changing styles dynamically with `.css()`, and applying built-in jQuery effects (`hide/show`, `fade`, and `slide`). Finally, I practiced DOM manipulation (`.append()`, `.prepend()`, `.remove()`, `.attr()`, `.val()`) and created smooth width transitions for skill bars using `.animate()`.
