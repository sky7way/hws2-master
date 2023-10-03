import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType []// need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (
    name: string,
    setError: React.Dispatch<React.SetStateAction<string | null>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    addUserCallback: (name: string) => void
) => {
    if (name.trim().length === 0) {
        setError('error');
    } else {
        addUserCallback(name);
        setName('');
    }
};


export const pureOnBlur = (name: string, setError: (error: string | null) => void) => { // если имя пустое - показать ошибку
    if (name.trim().length === 0) {
        setError('error')
    }
}
    export const pureOnEnter = (e: React.KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
        if (e.key === 'Enter') {
            addUser();
        }
    }

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
     const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                                users,
                                                                                addUserCallback,
                                                                            }) => {
        // деструктуризация пропсов
        const [name, setName] = useState<string>(''); // need to fix any
        const [error, setError] = useState<string | null>(null); // need to fix any

        const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
            setName(e.target.value) // need to fix

            error && setError('')
        }
        const addUser = () => {
            pureAddUser(name, setError, setName, addUserCallback)
        }

        const onBlur = () => {
            pureOnBlur(name, setError)
        }

        const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
            pureOnEnter(e, addUser)
        }

        const totalUsers = users.length; // need to fix
        const lastUserName = users.length > 0 ? users[users.length - 1].name : ''; // need to fix

        return (
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                onBlur={onBlur}
                onEnter={onEnter}
                error={error}
                totalUsers={totalUsers}
                lastUserName={lastUserName}
            />
        )
    }
    export default GreetingContainer

