# Conversional Take Home Task

This project is the solution to Conversional's code challenge.

# Approach

In trying to solve this challenge, I tried to mimic how conversional's real widget works. Thus, this task will be seen at the click of a button.

Also, I provided link to enable the view to be switched between the two data provide.

(PS: In the demo widget, I saw that users cannot go back to review their choices using the progress bar at the top, is this a delibrate requirement? Wouldn't allowing that enhance user experience?)

In the project directory, you can run:

# Runing the Project
1. Extract the folder
2. Run npm install
3. Run npm start



# Testing

I choose React Testing Library (RTL) (which comes included in create-react-app, so no additional installation is required) as it helps to write test that is closer to user experience than other alternatives (like enzyme, which would have required installing additional dependencies anyway);

I mostly wrote very basic tests for the components.
Test are within the __tests__ folder. They could alternatively be anywhere else as filename.test.js

## Validating proptypes

Unlike Enzyme, RTL doesn't provide direct access to component state and props (if this ever becomes a requirement we can switch to enzyme), thus I used PropTypes to specify prop types for each components receiving props.

For better type security, the project could be written in TypeScript

 
### Modal Component
For the additional requirements, I made two changes to the json data as follows:

1. isOpen (been the control flag for opening and closing the modal) needed to be removed from the props object and placed at the same level with type and props. If left with the props object, it will be ignored as it is not a valid css property.

2. A new flag (activateModal) should be added to any component that is intended to activated the modal. This way, the component can open the modal when clicked.

#### Data Structure
I worked strictly with the data structure provided. As long as any given data follow the given structure, the widget should work.

However, I didn't solve for edge cases where we could have nested components. I provided more comments on this in views/widget.js
