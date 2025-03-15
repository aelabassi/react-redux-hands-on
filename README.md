# Hands on React/Redux
## 1. React
### 1.1. React Basics
#### 1.1.1. Introduction
- React is a JavaScript library for building user interfaces.
- React is used to build single page applications.
- React allows us to create reusable UI components.
- React is created by Facebook.
- React was first deployed on Facebook's newsfeed in 2011 and on Instagram.com in 2012.
- React allows us to create components by using the `React.createClass()` method.
- React allows us to create components by using the `class` keyword.
- React allows us to create components by using the `function` keyword.
- React allows us to create components by using the `arrow function` keyword.
- React allows us to create components by using the `hooks` feature.
- React allows us to create components by using the `functional components` feature.
- React allows us to create components by using the `class components` feature.

#### 1.1.2. JSX
- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.
- JSX makes it easier to write and add HTML in React.
- JSX allows us to write JavaScript expressions in React.

#### 1.1.3. Components
- Components are the building blocks of any React application.
- Components are reusable and can be nested inside other components.
- Components can be created by using the `React.createClass()` method.

#### 1.1.4. Props
- Props are short for properties.
- Props are used to pass data from parent to child components.
- Props are read-only and cannot be modified by the child components.
- Props are passed to components like HTML attributes.

#### 1.1.5. State
- State is an object that is owned by the component.
- State is used to store data that the component can change.
- State is initialized in the constructor method.
- State is updated by using the `setState()` method.
- State is used to re-render the component when the state changes.

# 2. Redux
## 2.1. Redux Basics
### 2.1.1. Introduction
- Redux is a predictable state container for JavaScript apps.
- Redux is used to manage the state of the application.
- Redux is used to store the state of the application in a single object.
- Redux is used to update the state of the application by dispatching actions.
- Redux is used to update the state of the application by using reducers.
- Redux is used to update the state of the application by using middleware.
- Redux is used to update the state of the application by using the store.

### 2.1.2. Actions
- Actions are payloads of information that send data from the application to the Redux store.
- Actions are plain JavaScript objects.
- Actions must have a `type` property that indicates the type of action being performed.

### 2.1.3. Reducers
- Reducers are pure functions that take the current state and an action as arguments and return a new state.
- Reducers specify how the application's state changes in response to actions.
- Reducers are used to update the state of the application.

### 2.1.4. Store
- Store is an object that holds the application's state.
- Store allows access to the state via the `getState()` method.
- Store allows the state to be updated via the `dispatch()` method.
- Store allows the state to be updated by using the `subscribe()` method.

### 2.1.5. Redux toolkit
- Redux toolkit is a package that provides tools and best practices for writing Redux code.
- Redux toolkit provides a `configureStore()` function to create a Redux store.
- Redux toolkit provides a `createSlice()` function to create a slice of the Redux state.
- Redux toolkit provides a `createAsyncThunk()` function to create async actions.
- Redux toolkit provides a `createEntityAdapter()` function to create an entity adapter.

# Resources
- The starting code for this hands-on is from udemy course: [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
by Maximilian Schwarzmüller.



