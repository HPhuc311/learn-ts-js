const saveBtn = document.getElementById("btnSave")
const inputName = document.getElementById("name")

//random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


if (saveBtn) {
    // Lắng nghe sự kiện on Click
    saveBtn.addEventListener("click", () => {

        const myTodo = {
            id: getRandomInt(0, 999),
            name: inputName.value
        }

        // lưu vào local storage
        // trong js đối với localStorage luôn nhận string 
        // JSON.stringify convert 1 kiểu object sang string 


        const currentTodoStr = localStorage.getItem("todo");


        // Đã tồn tại todo trước đây
        if (currentTodoStr) {
            // convert from string to object
            const currentTodo = JSON.parse(currentTodoStr)
            // push them todo
            currentTodo.push(myTodo)
            localStorage.setItem("todo", JSON.stringify(currentTodo))
        } else {
            localStorage.setItem("todo", JSON.stringify([myTodo]))
        }

        // điều hướng về trang được chỉ định
        window.location.href = "succes_page.html"
    })
}

const tableCheck = document.getElementById("toDoList")

if (tableCheck) {

    const generateTodoTable = () => {
        const toDoListStr = localStorage.getItem("todo")
        if (toDoListStr) {
            const toDoList = JSON.parse(toDoListStr);
            console.log(toDoList)
            const tbody = document.querySelector("#toDoList tbody");

            if (toDoList && toDoList.length) {
                toDoList.forEach((todo, index) => {
                    tbody.innerHTML += `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.name}</td>
                        <td>
                        <button 
                            data-id=${todo.id}
                            class="btnDelete"
                        >Delete</button></td>
                    </tr>
                `
                })
            }
        }

    }

    generateTodoTable()
}

const deleteBtns = document.querySelectorAll(".btnDelete")

if (deleteBtns) {
    deleteBtns.forEach((btn, index) => {
        console.log('✌️btn, index --->', btn, index);
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id")
            handleDeleteToDo(id);
        })
    })
}

const handleDeleteToDo = (id) => {
    const toDoListStr = localStorage.getItem("todo")
    if (toDoListStr){
        const toDoList = JSON.parse(toDoListStr);

        const newTodo = toDoList.filter((todo, index) => todo.id + "" !== id)

        localStorage.setItem("todo", JSON.stringify(newTodo))
        // tải lại trang sau khi xoá
        window.location.reload()
    }
}