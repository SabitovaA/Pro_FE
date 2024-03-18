const form = document.querySelector('#personForm')

function personNameLocal() {
    localStorage.setItem("names",JSON.stringify(names));
}
function getFromLocal() {
    const localName = localStorage.getItem("names")
    if(localName) {
        return JSON.parse(localName)
    }else {
        return[];
    }
}

let names;

if(localStorage.getItem("names")) {
    names = getFromLocal()
}else {
    names = []
}

function addName(name) {
    const personName = {
        id:Date.now(),
        name: name,
        show: true,
    }
    names.push(personName);
    personNameLocal(names);
    rerender();
}

function rerender() {
    const personList = document.querySelector('#personList')
    personList.innerHTML = ''
    names.map((item) => {
        if(item.show) {
            const listName = `ID: ${item.id},${item.name}`
            personList.append(listName);
        }
    })
}

const personForm = document.querySelector('#personForm')
personForm.addEventListener('submit',function(event) {
    event.preventDefault()
    const personName = document.querySelector('#personName').value;

    if(personName) {
        addName(personName);

        document.querySelector('#personName').value = '';
    }else{
        alert("false")
    }
})

rerender()

    
    



