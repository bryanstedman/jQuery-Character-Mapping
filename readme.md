In Progress
==============

A jQuery plugin for character mapping



A jQuery plugin to add str.maketrans(intab, outtab]);

Character mapping

Parameters:
Here is the detail of parameters:
  str: string to translate
  intab: string having actual characters.
  outtab: string having corresponding mapping character.



Return Value:
It returns a translate table to be used translate() function.
Example:
This example every vowel in a string is replaced by its vowel position:
#!/usr/bin/python

from string import maketrans   # Required to call maketrans function.

intab = "aeiou"
outtab = "12345"
trantab = maketrans(intab, outtab)

str = "this is string example....wow!!!";
print str.translate(trantab);
This will produce following result:
th3s 3s str3ng 2x1mpl2....w4w!!!

http://www.tutorialspoint.com/python/string_maketrans.htm