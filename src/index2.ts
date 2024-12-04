interface User2 {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

type UpdateProps = Pick<User2, 'name' | 'age' | 'email'>
type UpdatePropsOptional = Partial<UpdateProps>