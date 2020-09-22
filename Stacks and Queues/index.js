//Stacks
//LIFO
/*
Examples -
    Browser History
Can be built with arrays or Linked Lists
    Both arrays and linked lists work well
    Arrays allow cache locality - Faster to access memory next to each other.
    But linked lists have more dynamic memory ... 


*/

//Queues
//FIFO

/* 
Examples -
    Can be use for Waitlisting
Can be built with arrays or linked lists
    Linked list is better for this as in Array we will need to delete the first index, which 
    will be needing the shifitng of all the items in Array.
*/

// EXTRAAA

//How does JS work ??
/*
    Program needs to allocate memory, parse and execute scripts
    Engine of JS consists of Memory heap and Call stack
        To allocate memory - const a = 1;
        Used up memory heap
    MEMORY LEAK -- Declared alot of variables -- By having unused memory laying around -- Not cleanup the memory heap
                -- Having unused variabls
    Call Stack -- 
                Reads and executes scripts.
                Pushes calls on call stack.
                pops it after it has been run.
                And pushes the next command.

    JS is a single threaded Language that can be non-blocking
        Only one call stack - single threaded
        MultiThreaded languages can have multiple call stacks
            Issues in multiple threaded - Deadlock ...
        NON BLOCKING HOW?
            Asynchronous to the rescue ... 
            JS Run time environment - 
                On top of Engine they have Web apis, callbackqueues, and event loops.



    //Call Stack

    as setTimeout() comes in call stack ... This is in Web api -- it moves to webapi and call stack next process triggered
    //Web api

    A timer for 2 seconds triggered
    callback() added to callback queue

    //Callback queue

    //event loop
    If callstack is empty, the event loop puts the callback into the call stack queue.
    keeps on checking the call stack always

*/
