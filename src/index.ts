interface User {
    firstName: string, 
    lastName: string,
    age: number
}

function check(a: User[]): User[] {
    let ans: User[] = [];
    for(let i = 0; i < a.length; i++){
        if (a[i].age > 18) {
            ans.push(a[i])
        }
    }

    return ans
}

console.log(check([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));