
// everthing in the redux application statrts by event triggering like clicking or hovering over. 
// all of these events can optionally call the action creator. 
// action creator is a function that returns an action. So if a person clicks on a button, it calles an action creator and the action vreator then returns the objects 
// THAT OBJECT IS THEN SENT TO ALL THE REDUCERS. It doesn't matter how many reducers are there. There might be 20 different reducers but it the action creator will pass through all of them.
//Reducers can  choses(depending on the action ) to return a different state. 
// That new state then gets passed through the application state and then that application states goes to the react application and all the sates are then rerendered. 

// THE SECOND STEP BELOW IS DONE IN THE CONTAINER FILE AS 'mapDispatchToProps'  FUNCTION. 

// 1)     Event occurs
// 2)     action creator rETURNS that object
// 3)     object is sent to the reducers 
// 4)     reducers might or might not change the state. 
// 5)     If state change, that new state is passed through the react app to render in the application 


//In detail explanation on the above Method  

// The object that the action creators renders has a 'type' that describes the type of action that was triggered.(THAT DOESN'T MEAN THE ACTUAL EVENT THAT IS HAPPENING LIKE CLICKING A BUTTON OR HOVERING OVER THOUGHT. ) 
// That object will also have some data that decsribes the type of action that has been done. Probably the props.
// Then that object is sent to all the reducers. In all our different reducers we create a 'switch' statement(Goolgl switch statement in js if you don't know. It is the method in js kinda like if statement)
// As mention on the above line, the switch statement goes though different lines depending on the type of the action. 
// If the reducer doesn't care about the action(basically it means that the state in  not changing) in that case it returns it corrent state. 
// If the reducer does care about the change in state, then it passes the state to the react and then that new value will be the value of state. 
// 


 
export function selectBook(book) {
    // SelectBooks is an action creator, it need to return an action, an object with a type property. 
    // actions have 2 properties, a type and a payload.  
    // payload describes the purpose of the action and the type is what we use in them switch statement to recognise the different actions. 
    // Actions is the user selecting a book. 

    // type is always in the upper case! 
    
    return{
        type: 'BOOK_SELECTED',
        payload: book
    };
}
