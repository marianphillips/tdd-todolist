
class TodoList {
 constructor() {
     this.list = []
     this.counter = 1
 }

 create(listItem) {
    let listObject = {id:this.counter, text: listItem, status: "incomplete", day: Date().substring(0,15)}
     this.list.push(listObject)
     this.counter++
 }

 getAll() {
    return this.list
 }

setComplete(listID) {
for(let i = 0; i < this.list.length; i++) {
    if(this.list[i].id === listID) {
        this.list[i].status = "complete"
    }
}
}

getIncomplete() {
    let incomplete = []
    for(let i = 0; i < this.list.length; i++) {
        if(this.list[i].status === "incomplete") {
            incomplete.push(this.list[i])
        }
    }
    return incomplete
}

getComplete() {
    let complete = []
    for(let i = 0; i < this.list.length; i++) {
        if(this.list[i].status === "complete") {
            complete.push(this.list[i])
        }
    }
    return complete
}


searchByID(listID) {
 for(let i = 0; i<this.list.length; i++) {
     if(this.list[i].id === listID) {
         return this.list[i]
     }
 }
 return "NOOOOOOOOOO"
}

removeByID(listID) {
    for(let i = 0; i<this.list.length; i++) {
        if(this.list[i].id === listID) {
           this.list.splice(i,1)
        }
    }
}

searchByDay(days) {
    let dayArray = []
    for(let i = 0; i<this.list.length; i++) {
        if(this.list[i].day === days) {
           dayArray.push(this.list[i])
        }
    }

    return dayArray
}


}



const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Add an item to your todo list: \n', (answer) => {
  let todo = new TodoList()
  todo.create(answer)
  console.log(`Here is your current todo list: %j`, todo.list);
  rl.setPrompt('To Add, delete or find an item; type a, d or f: Or to exit type "close":')
  rl.prompt();
  rl.on('line', (answer) => {
      if(answer.trim() === "close") {
          rl.close()
      }
      if(answer.trim() === "a") {
        rl.setPrompt('Add another item to your list:\n')
         rl.prompt()
         rl.on('line', (answer) => {
             todo.create(answer)
             console.log(`Here is your current todo list: %j`, todo.list);
    })
}


      else {
    rl.setPrompt('To Add, delete or find an item; type a, d or f: Or to exit type "close":')
    rl.prompt();
      }
  })
  
  }) 

  rl.on('close',()=> {
      console.log('Your to do list is finished')
  })

module.exports = TodoList


