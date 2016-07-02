// https://www.reddit.com/r/dailyprogrammer/comments/4lpygb/20160530_challenge_269_easy_basic_formatting/?ref=share&ref_source=link

// setup the input string.
var input = `12
····
VAR I
·FOR I=1 TO 31
»»»»IF !(I MOD 3) THEN
··PRINT "FIZZ"
··»»ENDIF
»»»»····IF !(I MOD 5) THEN
»»»»··PRINT "BUZZ"
··»»»»»»ENDIF
»»»»IF (I MOD 3) && (I MOD 5) THEN
······PRINT "FIZZBUZZ"
··»»ENDIF
»»»»·NEXT`;

// Split the input string at the newlines.
var codeBody = input.split(/\r?\n/);

// Remove two elements starting at [0] and set them as two vars.
var [lineCount, indentChar] = codeBody.splice(0,2);

var indentLevel = 0;

for (lineNum in codeBody) {
    codeBody[lineNum] = codeBody[lineNum].replace(/[·»]/g, '');
    if ((codeBody[lineNum].startsWith('ENDIF') == true) || (codeBody[lineNum].startsWith('NEXT') == true)){
        indentLevel -= 1;
    }
    console.log(indentChar.repeat(indentLevel) + codeBody[lineNum]);
    if ((codeBody[lineNum].startsWith('IF') == true) || (codeBody[lineNum].startsWith('FOR') == true)){
        indentLevel += 1;
    }
}
