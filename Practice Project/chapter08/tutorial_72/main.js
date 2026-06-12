console.log("Lab_08_02")

// lấy data và cho data hiển thị lên giao diện 
const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs")
    const data = await res.json();


    // insert data
    const tbody = document.querySelector("#blog tbody")

    if (data && data.length) {
        data.forEach((blog, index) => {
            tbody.innerHTML += `
                    <tr>
                        <td>${blog.id}</td>
                        <td>${blog.title}</td>
                        <td>${blog.author}</td>
                        <td>${blog.content}</td>
                        <td>
                        <button 
                        class="delete-blog"
                        data-id = "${blog.id}"
                        >Delete
                        </button>
                        </td>
                `
        })
    }
}

const addNewRow = (blog) => {
    const tableBody = document.querySelector('#blog tbody');

    // Tạo phần tử dòng mới
    const newRow = document.createElement('tr');

    // Gán HTML cho dòng
    newRow.innerHTML = `
        <tr>
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
             <button
            class="delete-blog"
            data-id = "${blog.id}"
            >Delete
            </button>
            </td>
        </tr>
     `;

    // Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow);
    // gán sự kiện onClick cho row vừa tạo
    const btn = document.querySelector(`[data-id="${blog.id}"]`)
    btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        // DELETE HTML ROW
        const row = btn.closest('tr');
        row.remove();
    })

}

const handleAddNewBlog = () => {
    const title = document.getElementById("title")
    const author = document.getElementById("author")
    const content = document.getElementById("content")

    const btnSave = document.getElementById("btnSave")

    btnSave.addEventListener("click", async () => {
        // call api to create blog
        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });
        const data = await rawResponse.json();
        addNewRow(data)
    })


}

const handleDeleteBtns = () => {
    const btns = document.querySelectorAll(".delete-blog");
    console.log('btns', btns);
    if (btns) {
        btns.forEach((btn, index) => {
            btn.addEventListener("click", async () => {
                const id = btn.getAttribute("data-id");
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                // DELETE HTML ROW
                const row = btn.closest('tr');
                row.remove();
            })
        })
    }
}


fetchBlogs().then(() => {
    handleDeleteBtns();
});
handleAddNewBlog();