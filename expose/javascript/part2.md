1) The code prints out 3, which is the length of the array. It is because I is declared as a Var which lets you acess it outside the loop.
2) It prints 150 since discounted price was declared as a var, so it becomes accessible outside the for loop. 150 is the last thing discounted Price was set to.
3) FinalPrice was declared as a global variable within the function. It was set to 150 by the for loop. Due to its declaration you are able to print the last value it was assigned.
4) It does not error out, it returns an array filled with the discounted prices.
5) You are unable to print out the for loop variable because it was defined as a let variable, and let does not let you acess the variable outside the blockj.
6) discountedPrice was also declared as a let variable so it will not allow you to access it outside the given block.
7) This code does not print out an error, but prints out the last final price which is 150.
8) This prints out the array containing the final prices.
9) Error because the variable I was not defined outside the scope of the for loop.
10) The legnth variable is a constant with value 3.
11) It returns the discounted values of the array.
12) A) student.name
12) B) student["Grad Year"]
12) C) student.greeting()
12) D) student['Favorite Teacher'].name
12) E) student.courseLoad[0]
13) A) This is because ints map to their exact string representation, which results in a string concat.
13) B) This is because with substraction the '3' maps to 3 and regular int subtraction occurs.
13) C) A number added with null is itself
13) D) The output is '3null' since it results in a string concat
13) E) The true evalutes to 1, and then regular addition applies.
13) F) False Evaluates to 0, and any number added with null is itself.
13) G)'3undefined' the three is taken as a string literal same with the undefined and the result is concated.
14) A) "True" The value for 2 is greater than one. 2 Becomes a number.
14) B) "False" Since both values are strings. The msb gets compared first.
14) C) "True" The string '2' get converted into its int representation. Then regular comparison takes place
14) D) "False" The number is being compared to the tring representation which is not equal.
14) E) "False" Since the true is being evaluated as 1, and 1 is not equal to 2.
14) F) "True" The boolean of any non-zero number evaulates to true. Which is equal to true. 
15) The "==" evaluates things based on their non-literal value. For example it converts strings of ints into their int then compare, while "===" compares using a "as-is" or "what you see is what you get" comparison.
17) The code returns an array with values 2,4,6. What is happening is the function upon completion calls doSomething upon exit, a callback.
19) The code prints out values 1,4,3,2
