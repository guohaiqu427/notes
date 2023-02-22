# Flex under the hood 

1. It first looks at the content size which is what we would get if by declaring width: max-content on an element. 

	- max-content allows content itself to define the width of the element
	 
2. flex-shrink is also doing some work allowing the items to be smaller, but only if needed.

	- flex-shrink: is a ratio, has a default value of 1, 

	- how does flex-shrink work on the flex items:

		1. check the partent width 

		2. check the flex-items' max-content width 

		3. if the total of the max-content width is less than the partent width, done

		4. else, shrink all the flex-items in percentage until it all fits in one row


	
3. Different methods to columns equal: 

	- flex: 1 , short hand for  flex: 1 1 0%; 	

		- \+ : after max-content and flex-shrink has done its job, the columns will now fill up the entire width of the flex-container. when write flex:1, what actually happened is we also set flex-basis to 0%, now all the flex-items has the same width instead of the max-content ratio.  

		- \- : IN SHORT: padding and border are not taken into account, it will be added back to the element afterwards

			> We have 600 - 32 = 568px to divide equally, instead of 600px. All the divs want to grow at an equal rate, so 568 / 3 = 189.3333px. 

				flex: 1 1 0%; // short hand
				flex-grow: 1;
				flex-shrink:1;
				flex-basis: 0%;

	- flex-grow: 100%;
		
		- core: makes all the flex-item to start at the same size!

		- \-: IN SHORT: padding and border are not taken into account, it will be added back to the element afterwards




	
