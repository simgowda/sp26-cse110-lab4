1. Line 12 prints out the number 3, because i is a variable declared with the var keyword, so it is function-scoped and exists for the entire function. Line 12 essentially prints the length of the list of prices, which is 3.
2. Line 13 prints out the number 150, because discountedPrice is declared with the var keyword so it is function-scoped and exists outside of the loop in which it is defined. This line prints the 50% discounted price of the last element in the array prices, which would be 300 * 0.5 = 150.
3. Line 14 prints out the number 150, because finalPrice is declared with the var keyword, so it is function-scoped and exists outside of the loop. During each iteration of the loop, finalPrice is updated to the rounded discounted price, and after the loop finishes, it holds the value from the last iteration. Since the last price is 300 and the discount is 0.5, the final discounted value is 300 * 0.5 = 150.
4. The function will return the array [50, 100, 150], because it iterates through each value in the prices array and applies a 50% discount. For each element, it calculates prices[i] * (1 - discount), which gives 50, 100, and 150 respectively for the inputs 100, 200, and 300. Each of these values is rounded and pushed into the discounted array. After the loop completes, the function returns this updated array.
5. Line 12 will cause a ReferenceError, because i is declared with the let keyword inside the for loop, making it block-scoped. This means i only exists within the for loop and is not accessible outside of it. When line 12 tries to execute console.log(i);, i is not defined in that scope, so the code throws a ReferenceError.
6. Line 13 will cause a ReferenceError, because discountedPrice is declared with the let keyword inside the for loop, making it block-scoped. This means discountedPrice only exists within the for loop and is not accessible outside of it. When line 13 tries to execute console.log(discountedPrice);, the variable is not defined in that scope, so the code throws a ReferenceError.
7. Line 14 prints out the number 150, because finalPrice is declared with the let keyword outside of the loop, so it is still accessible after the loop finishes. During each iteration, finalPrice is updated to the rounded discounted price, and after the final iteration it holds the last computed value. Since the last price is 300 and the discount is 0.5, the final discounted value is 300 * 0.5 = 150.
8. The function will return the array [50, 100, 150], because it iterates through each value in the prices array and applies a 50% discount. For each element, it calculates prices[i] * (1 - discount), which gives 50, 100, and 150 respectively for the inputs 100, 200, and 300. Each value is rounded and pushed into the discounted array. Since all variables are correctly scoped with let and used within their valid scopes, no errors occur, and the final array is returned.
9. Line 11 will cause a ReferenceError, because i is declared with the let keyword inside the for loop, making it block-scoped. This means i only exists within the for loop and is not accessible outside of it. When line 11 tries to execute console.log(i);, the variable is not defined in that scope, so the code throws a ReferenceError.
10. Line 12 prints out the number 3, because length is declared with the const keyword outside of the for loop, making it function-scoped within the function block and accessible after the loop finishes. It was assigned the value prices.length, which for the array [100, 200, 300] is 3. Since const prevents reassignment but still allows access within its scope, the value remains unchanged.
11. The function will return the array [50, 100, 150], because it iterates through each value in the prices array and applies a 50% discount using prices[i] * (1 - discount). The values 100, 200, and 300 become 50, 100, and 150 respectively, and each is pushed into the discounted array.
12. A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
13. A) '32', because the + with a string causes string concatenation, converting 2 to '2'
    B) 1, because - forces numeric conversion, so '3' becomes 3
    C) 3, because null becomes 0
    D) '3null', because + with a string concatenates '3' and 'null'
    E) 4, because true becomes 1
    F) 0, because false and null are both 0
    G)'3undefined', because string concatenation converted undefined to 'undefined'
    H) NaN, because '3' becomes 3 but undefined becomes NaN due to the minus symbol.
14. A) true, because 2 is greater than 1
    B) false, because strings compare lexicographically and '2' comes after '1'
    C) true, because == does type coercion, so '2' becomes 2
    D) false, because === checks value and type
    E) false, because true becomes 1, and 1!=2
    F) true, because Boolean(2) is true, and both type and value match
15. == compares values after type coercion, while === compares both value and type without coercion. === is more strict than ==.
17. The function call will return the array [2, 4, 6], because modifyArray iterates through each element in the input array [1, 2, 3] and applies the doSomething callback to each value. The doSomething function multiplies each number by 2, so 1 becomes 2, 2 becomes 4, and 3 becomes 6. These results are pushed into newArr, which is returned at the end.
19. 1
    4
    3
    2