const form = document.forms["form"];
// console.log(form)

const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];
// console.log(button)



formArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validFormArr.push(el);
    }
});

form.addEventListener("input", inputHandler);
form.addEventListener("submit", formCheck);

function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    console.log(inputValue)
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    console.log(reg)
    if (reg.test(inputValue)) {
        console.log(reg.test(inputValue))
        el.setAttribute("is-valid", "1");
        el.style.border = "2px solid #00cc00";
    } else {
        console.log(reg.test(inputValue))
        el.setAttribute("is-valid", "0");
        el.style.border = "2px solid #d01013";
    }
}
// ***start1*******************************************************
// function formCheck(e) {
//     e.preventDefault();
//     const allValid = [];
//     validFormArr.forEach((el) => {
//         allValid.push(el.getAttribute("is-valid"));
//     });
//     const isAllValid = allValid.reduce((acc, current) => {
//         return acc && current;
//     });
//     if (!Boolean(Number(isAllValid))) {
//         console.log(!Boolean(Number(isAllValid)))
//         alert("Заполните поля правильно!");
//         return;
//     }
//     formSubmit();
// }

function formCheck(e) {
    e.preventDefault();
    const allValid = [];
    validFormArr.forEach((el) => {
        allValid.push(el.getAttribute("is-valid"));
    });
    const isAllValid = allValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isAllValid))) {
        console.log(!Boolean(Number(isAllValid)))
        alert("Заполните поля правильно!");
        return;
    }

    // Добавляем проверку на наличие выбранных файлов перед отправкой формы
    if (fileInput.files.length === 0) {
        // Если ни один файл не выбран, отправляем форму без файлов
        formSubmit();
    } else {
        // Если выбран хотя бы один файл, проверяем валидность их расширений
        const fileExtensions = ['jpg', 'jpeg', 'png', 'pdf']; // Укажите допустимые расширения файлов
        for (const file of fileInput.files) {
            const extension = file.name.split('.').pop().toLowerCase();
            if (!fileExtensions.includes(extension)) {
                alert("Недопустимое расширение файла!");
                return;
            }
        }
        // Если все файлы прошли проверку, отправляем форму
        formSubmit();
    }
}
// ***end1**********************************************************

// ***start2********************************************************
// async function formSubmit() {
//     const data = serializeForm(form);
//     console.log(data)
//     const response = await sendData(data);
//     console.log(response)
//     if (response.ok) {
//         let result = await response.json();
//         alert(result.message);
//         formReset();
//     } else {
//         alert("Код ошибки: " + response.status);
//     }
// }

async function formSubmit() {
    const data = serializeForm(form);
    console.log(data)
    const response = await sendData(data);
    console.log(response)
    if (response.ok) {
        let result = await response.json();
        alert(result.text); // 'message' заменено на 'text'
        formReset();
    } else {
        alert("Код ошибки: " + response.status);
    }
}
// ***end2************************************************************

function serializeForm(formNode) {
    // return new FormData(form);
    return new FormData(formNode);
}

async function sendData(data) {
    return await fetch("send_mail.php", {
        method: "POST",
        body: data,
    });
}

function formReset() {
    form.reset();
    validFormArr.forEach((el) => {
        el.setAttribute("is-valid", 0);
        el.style.border = "none";
    });
    // Перезагрузка страницы
    location.reload();
}

// start //////////// file

let fileInput = document.getElementById("file-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");



fileInput.addEventListener("change", () => {
    fileList.innerHTML = "";
    let params = (new URL(document.location)).searchParams;
    let aimLang = params.get("lang")

    if (aimLang === "en") {
        numOfFiles.textContent = `Files Selected - ${fileInput.files.length}`;
    }
    if (aimLang === "ua") {
        numOfFiles.textContent = `Вибраних файлів - ${fileInput.files.length}`;
    }
    if (aimLang === "ru") {
        numOfFiles.textContent = `Выбранных файлов - ${fileInput.files.length}`;
    }
    for (i of fileInput.files) {
        let reader = new FileReader();
        let listItem = document.createElement("li");
        let fileName = i.name;
        let fileSize = (i.size / 1024).toFixed(1);
        listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;

        if (fileSize >= 1024) {
            fileSize = (fileSize / 1024).toFixed(1)
            listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
        }
        fileList.appendChild(listItem);
    }
});

// end /////////////////////////////////////////// file

// -------------------------------------------------------------------- перевод

// fileList.innerHTML = "";
// numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

// -------------------------------------------------------------------- перевод


