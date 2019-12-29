import React from 'react'

const TodosContext = React.createContext({
    todos: [
     {id: 1, text: 'Eat breakfast', complete: false},
     {id: 2, text: 'Pet the cat', complete: false},
     {id: 3, text: 'Eat ALL the chocolates', complete: true},
    ]
})

export default TodosContext
