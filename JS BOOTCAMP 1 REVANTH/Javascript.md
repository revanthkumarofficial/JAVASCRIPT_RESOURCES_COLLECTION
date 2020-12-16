# JAVASCRIPT
<br>


### INDEX
- [INTRO]
- [EXECUTION-CONTEXT](EXECUTION-CONTEXT)
- [CALL-STACK](CALL-STACK)


##### INTRO

JS is Synchronous, Single Threaded Language

It executes step by step line by line

Everything in JS happens inside the Execution Context

How execution Context works internally


##### EXECUTION-CONTEXT
1. MEMORY COMPONENT => VARIABLE ENVIRONMENT
2. CODE COMPONENT => THREAD OF EXECUTION

* MEMORY-COMPONENT <br>
Here all variables, functions got registered. <br>
Variables and Functions are  stored as key value pairs in Memory Component

* CODE-COMPONENT <br>
It is a single thread which means code executes step by step so called single threaded. <br>
It executes one command at a time.

##### EXECUTION-CONTEXT-PHASES
1. MEMORY CREATION PHASE
2. CODE EXECUTION PHASE

* MEMORY-CREATION PHASE
It will allocate memory to all Variables and Functions.
For Variables, it stores and allocates undefined value to them.
For functions, it stores entire function code.

* CODE-EXECUTION PHASE
Here the code gets executed Line by Line.
Here the varibales allocated with undefined will be assigned with initialized values.
Here the called functions code will be executed line by line.

##### CALL-STACK






