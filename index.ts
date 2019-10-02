
/* Séries d'exemples sur l'utilité du Typscript   
    uncomment les différents codes et lancer : ts-node index.ts
*/


// ====================================== EXEMPLE n°1  ERROR ==================================== //

/* Exercice montrant une erreur typescript valable en JS, 
Avec le code ci-dessous il y a une erreur console "undefined" :
The Todo With ID : undefined
Has a tittle : undefined
Is it finished ? undefined */

/* L'erreur viens ici du lowercase et du nom de la variable "finished" qui n'as pas été respecté. 
'code visible sur le liens const url */

// ========================================CODE===================================================//
// ===============================================================================================//

/* import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1"

axios.get(url).then(response=> {
  const todo = response.data;

  const ID = todo.ID;
  const title = todo.Title; 
  const finished = todo.finished;

  console.log (`
  
  The Todo With ID : ${ID}
  Has a tittle : ${title}
  Is it finished ? ${finished}
  `);

}); */

// ============================================================================================//
// ============================================================================================//



// =================================== EXEMPLE n°1 With TS =================================== //

/* Coorection du code JS ci-dessus avec :
    Remplacement du lowercase et de la variable "finished" en "completed"
    Ajout de l'intreface Todo
    ajout de la response.data as Todo 
*/

// =======================================CODE================================================//
// ===========================================================================================//

/* import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1"

// on note ici les proprieté et les typages de l'objet Todo

interface Todo {
  id: number; 
  title: string; 
  completed: boolean; 
}

axios.get(url).then(response=> {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title; 
  const completed = todo.completed;

  console.log (`
  
  The Todo With ID : ${id}
  Has a tittle : ${title}
  Is it finished ? ${completed}
  `);

}); */

// ==============================================================================================//
// ==============================================================================================//

// ====================================== EXEMPLE n°2 Error =====================================//

/* Ajout du const logTodo 
  Message console : 
    The Todo With ID : 1
    Has a tittle : false
    Is it finished ? delectus aut autem

    Erreur de placement dans la fonction (id, complete, title  // id, title, completed)

*/

// ========================================CODE=================================================//
// =============================================================================================//

/* import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1"

// on note ici les proprieté et les typages de l'objet Todo

interface Todo {
  id: number; 
  title: string; 
  completed: boolean; 
}

axios.get(url).then(response=> {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title; 
  const completed = todo.completed;

  logTodo(id, completed, title);

});

const logTodo = (id, title, completed) => {

    console.log (`
    
    The Todo With ID : ${id}
    Has a tittle : ${title}
    Is it finished ? ${completed}
    `);

}; */

// =============================================================================================//
// =============================================================================================//


// ================================ EXEMPLE N°2 WITH TYPESCRIPT ================================//

/* 
    Ajout du code typescript pour repérer les erreurs. 
    On passe le typage dans la fonction et un message d'erreur se décalre dans le code 
    (sur completed) que l'on peut corriger. 
*/

// ========================================CODE=================================================//
// =============================================================================================//

import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1"

// on note ici les proprieté et les typages de l'objet Todo

interface Todo {
  id: number; 
  title: string; 
  completed: boolean; 
}

axios.get(url).then(response=> {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title; 
  const completed = todo.completed;

  logTodo(id, title, completed);

});

const logTodo = (id: number, title:string, completed: boolean) => {

    console.log (`
    
    The Todo With ID : ${id}
    Has a tittle : ${title}
    Is it finished ? ${completed}
    `);

};