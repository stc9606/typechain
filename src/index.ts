const name = "Seung Chul",
    age = 26,
    gender = "male"

const info = (name: string, age: number, gender: string) : string => {
    return `Hi ${name}, You are ${age}, You Are a ${gender}!`;
}

console.log(info(name, age, gender));

export {};