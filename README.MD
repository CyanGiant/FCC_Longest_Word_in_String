###FREE CODE CAMP###
####Bonfire 105: Find The Longest word in a string####
<p>
[Link to Test](http://freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string)
<p>
In this test we are tasked with returning the length of the longest words in the provided sentences.
<p>
It was clear to me that I needed to take a few steps here:
<li>Convert the string to an array(.split(" ") being sure to leave a space between the quotations so as to split array into words, not letters.)</li>
<li>Find and compare each arrays length with a for loop.</li>
<p>
I started by establishing the variables wordArray as str.split() and lWord (longest word) set to 0 for comparison in the for loop.<p>![image](https://cloud.githubusercontent.com/assets/12467136/9415713/0da9b942-47f6-11e5-89c5-17491ac9dded.png)
<p>
As I am learning JS, I have found for loops to be a bit daunting.  Which, of course, just means I need to practice them more! So with that in mind I am going to really break down each step of the loop here to help enforce what I am learning.
<p>
![image](https://cloud.githubusercontent.com/assets/12467136/9415927/63ea0720-47f7-11e5-8f89-e1412118a145.png)
<p>
<ol>So this loop will run until the length of wordArray is no longer greater than the value of i.  in the case of the sample string: 'The quick brown fox jumped over the lazy dog' I know that the array will be <strong>split</strong> into 9 pieces (0-8). so the loop will run 9 times, i = 0, i = 1, i = 2 etc... until i is no longer less than the length of wordArray (9 in the sample case).</ol>
<p>

![image](https://cloud.githubusercontent.com/assets/12467136/9416023/0e9c98b8-47f8-11e5-825e-77887fc4eeb5.png)
<p>
<ol>In this stage we are saying that: if wordArray[i].length(i being the position of the word within the array as defined in the previous line, the length being the length of that word) is greater than the variable lWord (initially 0 as set in the variable) then run the next code block:</ol>
![image](https://cloud.githubusercontent.com/assets/12467136/9416208/119f1ab2-47f9-11e5-814c-7667d3165729.png)
<p>
<ol>which is setting the length of the word in the defined position in the array to lWord (in the case of the first word {the} in the sample array lWord now equals 3)</ol>
<p>
The loop will run this until the length of the array is completed, and in this case lWord will equal to 6 ('jumped') as no other word will have a higher value length. 
All we need to do now is close off the code blocks and return lWord and we are all set!
<ol>![image](https://cloud.githubusercontent.com/assets/12467136/9416358/0fb2e2be-47fa-11e5-9e3f-8e9873fa7d5f.png)
