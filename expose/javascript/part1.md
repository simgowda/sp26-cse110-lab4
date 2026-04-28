1. values added: 20
2. final result: 20
3. You should not use var because this keyword is function-scoped, which can lead to variables leaking outside of specific blocks, values being accidentally overwritten, and bugs being harder to catch. Block-scoped keywords are more predictable and safe.
4. values added: 20
5. Line 13 throws an error because the 'let' keyword is block-scoped, so the result variable only exists inside of the if block. Since line 13 is outside of that block, it returns an error.
6. Line 9 throws an error because the const keyword prevents the result variable from being reassigned a value. So this if block throws an error due to line 7 and is unable to execute the lines after 7.
7. Line 13 is never reached because of the error thrown at line 7, due to the attempt at reassigning a constant variable.