const $headerInp = document.getElementById('header-inp'),
        $table = document.getElementById('table'),
        $tableTh = document.querySelectorAll('.table-th'),
        $main = document.getElementById('main'),
        $container = document.querySelector('.container'),
        $tbody = document.querySelector('.tbody'),
        $contactWrapper = document.querySelector('.contact-wrapper'),
        $modalDelete = document.querySelector('.modal-delete'),
        $btnGetClient = document.querySelector('.hero-btn'),
        $btnDel = document.querySelector('.btn-del'),
        $btnCan = document.querySelector('.btn-can'),
        $btnCls = document.querySelector('.btn-cls'),
        $columnId = document.querySelector('.column-id'),
        $columnFIO = document.querySelector('.column-fio'),
        $columnDateCreate = document.querySelector('.column-date-create'),
        $columnDateUpdate = document.querySelector('.column-date-update');

$btnGetClient.addEventListener('click', () => {
    modalCreate ()
})

function modalCreate () {
    const $modal = document.createElement('div'),
        $windowGetClient = document.createElement('div'),
        $modalWrapper = document.createElement('div'),
        $titleWrapper = document.createElement('div'),
        $title = document.createElement('h2'),
        $modalForm = document.createElement('form'),
        $modalSur = document.createElement('label'),
        $modalName = document.createElement('label'),
        $modalLast = document.createElement('label'),
        $inpSur = document.createElement('input'),
        $inpName = document.createElement('input'),
        $inpLast = document.createElement('input'),
        $requeredName = document.createElement('span'),
        $requeredLastname = document.createElement('span'),
        $placeholderName = document.createElement('div'),
        $placeholderSur = document.createElement('div'),
        $placeholderLast = document.createElement('div'),
        $placeholderNameRequered = document.createElement('span'),
        $placeholderLastNameRequered = document.createElement('span'),
        $btnClose = document.createElement('button'),
        $contactWrapper = document.createElement('div'),
        $contacts = document.createElement('div'),
        $contactBtn = document.createElement('button'),
        $contactErorrWrapper = document.createElement('div'),
        $btnSave = document.createElement('button'),
        $btnCancel = document.createElement('button');

    $modal.classList.add('modal')
    $windowGetClient.classList.add('windowGetClient')
    $modalWrapper.classList.add('modal-wrapper')
    $titleWrapper.classList.add('title-wrapper')
    $title.classList.add('low-title')
    $modalForm.classList.add('modal-form')
    $modalSur.classList.add('modal-sur', 'modal-label')
    $modalName.classList.add('modal-name', 'modal-label')
    $modalLast.classList.add('modal-last', 'modal-label')
    $inpSur.classList.add('inp-sur', 'inp')
    $inpName.classList.add('inp-name', 'inp')
    $inpLast.classList.add('inp-last', 'inp')
    $requeredName.classList.add('requered', 'requered-name')
    $requeredLastname.classList.add('requered', 'requered-lastname')
    $placeholderNameRequered.classList.add('placeholder-requered')
    $placeholderLastNameRequered.classList.add('placeholder-requered')
    $btnClose.classList.add('btn-close', 'btn-reset')
    $contactWrapper.classList.add('contact-wrapper')
    $contactErorrWrapper.classList.add('erorr-wrapper')
    $contacts.classList.add('contacts')
    $contactBtn.classList.add('contact-btn', 'btn-reset')
    $btnSave.classList.add('btn-save', 'btn-reset')
    $btnCancel.classList.add('btn-cancel', 'btn-reset')
    $placeholderName.classList.add('placeholders')
    $placeholderSur.classList.add('placeholders')
    $placeholderLast.classList.add('placeholders')
    $contactBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="contact-icon">
                                <g clip-path="url(#clip0_121_884)">
                                    <path d="M8.00001 4.66659C7.63334 4.66659 7.33334 4.96659 7.33334 5.33325V7.33325H5.33334C4.96668 7.33325 4.66668 7.63325 4.66668 7.99992C4.66668 8.36659 4.96668 8.66659 5.33334 8.66659H7.33334V10.6666C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6666V8.66659H10.6667C11.0333 8.66659 11.3333 8.36659 11.3333 7.99992C11.3333 7.63325 11.0333 7.33325 10.6667 7.33325H8.66668V5.33325C8.66668 4.96659 8.36668 4.66659 8.00001 4.66659ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 5.05992 5.06001 2.66659 8.00001 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333Z">
                                </g>
                                <defs>
                                    <clipPath id="clip0_121_884">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Добавить контакт`
    $title.textContent = 'Новый клиент'
    $inpSur.placeholder = 'Фамилия'
    $inpName.placeholder = 'Имя'
    $inpLast.placeholder = 'Отчество'
    $requeredName.textContent = '*'
    $requeredLastname.textContent = '*'
    $placeholderLastNameRequered.textContent = '*'
    $placeholderNameRequered.textContent = '*'
    $btnSave.textContent = 'Сохранить'
    $btnCancel.textContent = 'Отмена'
    $placeholderName.textContent = 'Имя'
    $placeholderSur.textContent = 'Фамилия'
    $placeholderLast.textContent = 'Отчество'


    $main.append($modal)
    $modal.append($windowGetClient)
    $windowGetClient.append($modalWrapper, $btnClose, $contactWrapper, $contactErorrWrapper, $btnSave, $btnCancel)
    $modalWrapper.append($titleWrapper, $modalForm)
    $titleWrapper.append($title)
    $modalForm.append($modalSur, $modalName, $modalLast)
    $modalSur.append($inpSur, $placeholderSur, $requeredLastname)
    $modalName.append($inpName, $placeholderName, $requeredName)
    $modalLast.append($inpLast, $placeholderLast)
    $placeholderSur.append($placeholderLastNameRequered)
    $placeholderName.append($placeholderNameRequered)
    $contactWrapper.append($contacts, $contactBtn)
    setTimeout(() => $modal.classList.add('open'), 1)

    $btnClose.addEventListener('click', () => {
        $modal.classList.remove('open')
        $modal.remove()
    })

    $btnCancel.addEventListener('click', () => {
        $modal.classList.remove('open')
        $modal.remove()
    })

    document.addEventListener('click', (e) => {
        if (e.target == $modal) {
            $modal.classList.remove('open')
            $modal.remove()
        }
    })

    function validateClient () {
        const $errorSur = document.createElement('span'),
            $errorName = document.createElement('span'),
            $errorLast = document.createElement('span'),
            $errorSurValid = document.querySelector('.error-sur'),
            $errorNameValid = document.querySelector('.error-name'),
            $errorLastValid = document.querySelector('.error-last'),
            $contactsValid = document.querySelectorAll('.contact');
    
        const inpName = $inpName.value.trim()
        const inpSur = $inpSur.value.trim()
        const inpLast = $inpLast.value.trim()
    
        if (inpSur.length < 2 || inpSur.length > 15) {
            if ($errorSurValid == null) {
                $errorSur.textContent = 'Фамилия должна содержать не менее 2-х и не более 15-ти символов'
                $errorSur.classList.add('error', 'error-sur')
                $contactErorrWrapper.classList.add('active')
                $contactWrapper.classList.add('mrg')
                $inpSur.classList.add('red')
                $contactErorrWrapper.append($errorSur)
                return
            }
            return
        } else {
            if ($errorSurValid != null ) {
                $errorSurValid.remove()
                $inpSur.classList.remove('red')
            }
        }
    
        if (inpName.length < 2 || inpName.length > 15) {
            if ($errorNameValid == null) {
                $errorName.textContent = 'Имя должна содержать не менее 2-х и не более 15-ти символов'
                $errorName.classList.add('error', 'error-name')
                $contactErorrWrapper.classList.add('active')
                $contactWrapper.classList.add('mrg')
                $inpName.classList.add('red')
                $contactErorrWrapper.append($errorName)
                return
            }
            return
        } else {
            if ($errorNameValid != null ) {
                $errorNameValid.remove()
                $inpName.classList.remove('red')
            }
        }
    
        if (inpLast.length < 2 || inpLast.length > 15) {
            if ($errorLastValid == null) {
                $errorLast.textContent = 'Отчество должна содержать не менее 2-х и не более 15-ти символов'
                $errorLast.classList.add('error', 'error-last')
                $contactErorrWrapper.classList.add('active')
                $contactWrapper.classList.add('mrg')
                $inpLast.classList.add('red')
                $contactErorrWrapper.append($errorLast)
                return
            }
            return
        } else {
            if ($errorLastValid != null ) {
                $inpLast.classList.remove('red')
                $errorLastValid.remove()
            }
        }
    
        if ($contactsValid != null) {
            $contactsValid.forEach(item => validateContactEl(item))
        }
    
        $inpName.value = inpName
        $inpSur.value = inpSur
        $inpLast.value = inpLast
    
        if (document.querySelectorAll('.error').length == 0 && document.querySelectorAll('.error-contact').length == 0) {
            $contactWrapper.classList.remove('mrg')
            fillArrContact()
            let contacts = arrContact,
                name = $inpName.value,
                lastName = $inpSur.value,
                surname = $inpLast.value;
            createClient(name, lastName, surname, contacts)
            $modal.classList.remove('open')
            $modal.remove()
            createTableBody()
        }
    }

    $btnSave.addEventListener('click', () => {
        validateClient ()
    })

    $contactBtn.addEventListener('click', () => {
        createContactEl ()
        if(document.querySelectorAll('.contact').length == 10) {
            $contactBtn.classList.add('disable')
        }
    })

    $inpName.addEventListener('input', () => {
        if($inpName.value != '') {
            $placeholderName.classList.add('active')
            $requeredName.classList.add('hide')
        } else {
                $placeholderName.classList.remove('active')
                $requeredName.classList.remove('hide')
            }
    })

    $inpSur.addEventListener('input', () => {
        if($inpSur.value != '') {
            $placeholderSur.classList.add('active')
            $requeredLastname.classList.add('hide')
        } else {
                $placeholderSur.classList.remove('active')
                $requeredLastname.classList.remove('hide')
            }
    })

    $inpLast.addEventListener('input', () => {
        if($inpLast.value != '') {
            $placeholderLast.classList.add('active')
        } else $placeholderLast.classList.remove('active')
    })
}

function fillArrContact () {
    arrContact = []
    const $arrContact = document.querySelectorAll('.contact')

    $arrContact.forEach(el => createContactObject(el))
}

async function createClient (name, lastName, surname, contacts) {
    await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name,
            lastName: lastName,
            surname: surname,
            contacts: contacts
        })
    });
}

async function createTableBody () {
    $tbody.innerHTML = ''

    //const response = await fetch('http://localhost:3000/api/clients');
    //let clientsList = await response.json();
    let clientsList = [{"name":"Роман","surname":"Геннадьевич","lastName":"Петров","contacts":[{"type":"gena_krokodil@rambler.com","value":"Email"}],"id":"1683830223817","updatedAt":"2023-05-19T18:02:02.802Z","createdAt":"2023-05-11T18:37:03.817Z"},{"name":"Сергей","surname":"Федерович","lastName":"Филипов","contacts":[],"id":"1684518852937","updatedAt":"2023-05-19T17:54:12.937Z","createdAt":"2023-05-19T17:54:12.937Z"},{"name":"Василий","surname":"Андреевич","lastName":"Емельян","contacts":[{"type":"890276931591","value":"Телефон"}],"id":"1684518898564","updatedAt":"2023-05-19T17:54:58.564Z","createdAt":"2023-05-19T17:54:58.564Z"}]

    for (item of clientsList) {
        item.FIO = item.lastName + ' ' + item.name + ' ' + item.surname
    }

    if (sortColumnFlag == 'id') {
        $columnId.classList.add('sort')
        clientsList = clientsList.sort(( a, b ) => {
            if (a.id > b.id) {
                return 1
            }
  
            if (a.id < b.id) {
                return -1
            }
  
            return 0
        })
    }

    if (sortColumnFlag == 'fio') {
        clientsList = clientsList.sort(( a, b ) => {
            if (a.FIO > b.FIO) {
                return 1
            }
  
            if (a.FIO < b.FIO) {
                return -1
            }
  
            return 0
        })
    }

    if (sortColumnFlag == 'dateCreate') {
        clientsList = clientsList.sort(( a, b ) => {
            if (a.createdAt > b.createdAt) {
                return 1
            }
  
            if (a.createdAt < b.createdAt) {
                return -1
            }
  
            return 0
        })
    }

    if (sortColumnFlag == 'dateUpdate') {
        clientsList = clientsList.sort(( a, b ) => {
            if (a.updatedAt > b.updatedAt) {
                return 1
            }
  
            if (a.updatedAt < b.updatedAt) {
                return -1
            }
  
            return 0
        })
    }

    if ($headerInp !== '') {
        clientsList = clientsList.filter(function (item) {
        if (item.FIO.includes($headerInp.value)) return true
        if (item.id.includes($headerInp.value)) return true
        if (item.createdAt.includes($headerInp.value)) return true
        if (item.updatedAt.includes($headerInp.value)) return true
        })
      }

    for (item of clientsList) {
        createTr(item)
    }
}

$headerInp.addEventListener('input', () => {
    createTableBody()
})

function createContactEl () {
    const $contacts = document.querySelector('.contacts'),
        $contactWrapper = document.querySelector('.contact-wrapper'),
        $contact = document.createElement('div'),
        $selectWrapper = document.createElement('div'),
        $select = document.createElement('div'),
        $selected = document.createElement('span'),
        $caret = document.createElement('div'),
        $list = document.createElement('ul'),
        $optionTel = document.createElement('li'),
        $optionDopTel = document.createElement('li'),
        $optionEmail = document.createElement('li'),
        $optionVK = document.createElement('li'),
        $optionFaceBook = document.createElement('li'),
        $contactInput = document.createElement('input'),
        $contactCancel = document.createElement('button');

        if ($contactWrapper.classList.contains('open') == false) {
            $contactWrapper.classList.add('open')
        }

    $contactCancel.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class = 'contact-cancel-icon'>
                                    <g clip-path="url(#clip0_121_2516)">
                                        <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z">
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_121_2516">
                                            <rect width="16" height="16">
                                        </clipPath>
                                    </defs>
                                </svg> `
    $caret.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_121_1693)">
                                <path d="M1.495 3.69003C1.25 3.93503 1.25 4.33003 1.495 4.57503L5.65 8.73003C5.845 8.92503 6.16 8.92503 6.355 8.73003L10.51 4.57503C10.755 4.33003 10.755 3.93503 10.51 3.69003C10.265 3.44503 9.87 3.44503 9.625 3.69003L6 7.31003L2.375 3.68503C2.135 3.44503 1.735 3.44503 1.495 3.69003Z" fill="#9873FF"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_121_1693">
                                    <rect width="12" height="12" fill="white" transform="translate(0 12) rotate(-90)"/>
                                </clipPath>
                            </defs>
                        </svg>`
    $optionTel.textContent = 'Телефон'
    $optionDopTel.textContent = 'Доп. телефон'
    $optionEmail.textContent = 'Email'
    $optionVK.textContent = 'Vk'
    $optionFaceBook.textContent = 'Facebook'
    $contactInput.placeholder = 'Введите данные контакта'
    $selected.innerText = 'Телефон'

    $contactCancel.classList.add('contact-btn-cancel')
    $contact.classList.add('contact')
    $selectWrapper.classList.add('dropdown')
    $list.classList.add('list')
    $select.classList.add('select')
    $selected.classList.add('selected')
    $caret.classList.add('caret')
    $optionTel.classList.add('option', 'opt-tel', 'active')
    $optionDopTel.classList.add('option', 'opt-dop-tel')
    $optionEmail.classList.add('option', 'opt-email')
    $optionVK.classList.add('option', 'opt-vk')
    $optionFaceBook.classList.add('option', 'opt-fb')
    $contactInput.classList.add('contact-input')
    $select.append($selected, $caret)
    $list.append($optionTel, $optionDopTel, $optionEmail, $optionVK, $optionFaceBook)
    $selectWrapper.append($select, $list)
    $contact.append( $selectWrapper, $contactInput, $contactCancel)

    $select.addEventListener('click', () => {
        $caret.classList.toggle('caret-rotate')
        $list.classList.toggle('list-open')
    })

    tippy($contactCancel, {
        content: `Удалить контакт`,
        theme: 'tippy'
    });

    $contactInput.addEventListener('input', function toggle () {
        if ($contactInput.value != '') {
            $contactCancel.classList.add('active')
        } else $contactCancel.classList.remove('active')
    })

    $contactCancel.addEventListener('click', () => {
        $contact.remove()

        const $contactSearch = document.querySelectorAll('.contact'),
            $erorrWrapper = document.querySelector('.erorr-wrapper'),
            $contactBtn = document.querySelector('.contact-btn');

            console.log($contactBtn.classList.contains('disable'))

        if($contactBtn.classList.contains('disable')) {
            $contactBtn.classList.remove('disable')
        }

        if($contactSearch.length === 0) {
            $contactWrapper.classList.remove('open')
            $erorrWrapper.innerHTML = ''
        }
    })

    $contacts.append($contact)

    const $options = $list.querySelectorAll('.option')

    $options.forEach(option => {
        option.addEventListener('click', () => {
            $selected.innerText = option.innerText
            $caret.classList.remove('caret-rotate')
            $list.classList.remove('list-open')
            $options.forEach(option => {
                option.classList.remove('active')
            })
            option.classList.add('active')
        })
    })

    return $contact

}

let arrContact = []

function modalChangeCreate (item) {
    const $modal = document.createElement('div'),
    $windowGetClient = document.createElement('div'),
    $modalWrapper = document.createElement('div'),
    $titleWrapper = document.createElement('div'),
    $title = document.createElement('h2'),
    $id = document.createElement('span'),
    $modalForm = document.createElement('form'),
    $modalSur = document.createElement('label'),
    $modalName = document.createElement('label'),
    $modalLast = document.createElement('label'),
    $inpSur = document.createElement('input'),
    $inpName = document.createElement('input'),
    $inpLast = document.createElement('input'),
    $requeredName = document.createElement('span'),
    $requeredLastname = document.createElement('span'),
    $placeholderNameRequered = document.createElement('span'),
    $placeholderLastNameRequered = document.createElement('span'),
    $btnClose = document.createElement('button'),
    $contactWrapper = document.createElement('div'),
    $contacts = document.createElement('div'),
    $contactBtn = document.createElement('button'),
    $btnSave = document.createElement('button'),
    $btnCancel = document.createElement('button'),
    $placeholderName = document.createElement('span'),
    $placeholderSur = document.createElement('span'),
    $placeholderLast = document.createElement('span');

    $modal.classList.add('modal')
    $windowGetClient.classList.add('windowGetClient')
    $modalWrapper.classList.add('modal-wrapper')
    $titleWrapper.classList.add('title-wrapper')
    $title.classList.add('low-title')
    $id.classList.add('contact-id')
    $modalForm.classList.add('modal-form')
    $modalSur.classList.add('modal-sur', 'modal-label')
    $modalName.classList.add('modal-name', 'modal-label')
    $modalLast.classList.add('modal-last', 'modal-label')
    $inpSur.classList.add('inp-sur', 'inp')
    $inpName.classList.add('inp-name', 'inp')
    $inpLast.classList.add('inp-last', 'inp')
    $requeredName.classList.add('requered', 'requered-name', 'hide')
    $requeredLastname.classList.add('requered', 'requered-lastname', 'hide')
    $placeholderNameRequered.classList.add('placeholder-requered')
    $placeholderLastNameRequered.classList.add('placeholder-requered')
    $btnClose.classList.add('btn-close', 'btn-reset')
    $contactWrapper.classList.add('contact-wrapper')
    $contacts.classList.add('contacts')
    $contactBtn.classList.add('contact-btn', 'btn-reset')
    $btnSave.classList.add('btn-save', 'btn-reset')
    $btnCancel.classList.add('btn-cancel', 'btn-reset')
    $placeholderName.classList.add('placeholders', 'active')
    $placeholderSur.classList.add('placeholders', 'active')
    $placeholderLast.classList.add('placeholders', 'active')
    $contactBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="contact-icon">
                                <g clip-path="url(#clip0_121_884)">
                                    <path d="M8.00001 4.66659C7.63334 4.66659 7.33334 4.96659 7.33334 5.33325V7.33325H5.33334C4.96668 7.33325 4.66668 7.63325 4.66668 7.99992C4.66668 8.36659 4.96668 8.66659 5.33334 8.66659H7.33334V10.6666C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6666V8.66659H10.6667C11.0333 8.66659 11.3333 8.36659 11.3333 7.99992C11.3333 7.63325 11.0333 7.33325 10.6667 7.33325H8.66668V5.33325C8.66668 4.96659 8.36668 4.66659 8.00001 4.66659ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 5.05992 5.06001 2.66659 8.00001 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333Z">
                                </g>
                                <defs>
                                    <clipPath id="clip0_121_884">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Добавить контакт`
    $title.textContent = 'Изменить данные'
    $id.textContent = 'ID: ' + item.id
    $inpSur.placeholder = 'Фамилия'
    $inpName.placeholder = 'Имя'
    $inpLast.placeholder = 'Отчество'
    $inpSur.value = item.lastName
    $inpName.value = item.name
    $inpLast.value = item.surname
    $btnSave.textContent = 'Сохранить'
    $btnCancel.textContent = 'Удалить клиента'
    $requeredName.textContent = '*'
    $requeredLastname.textContent = '*'
    $placeholderLastNameRequered.textContent = '*'
    $placeholderNameRequered.textContent = '*'
    $placeholderName.textContent = 'Имя'
    $placeholderSur.textContent = 'Фамилия'
    $placeholderLast.textContent = 'Отчество'

    $main.append($modal)
    $modal.append($windowGetClient)
    $windowGetClient.append($modalWrapper, $btnClose, $contactWrapper, $btnSave, $btnCancel)
    $modalWrapper.append($titleWrapper, $modalForm)
    $titleWrapper.append($title, $id)
    $modalForm.append($modalSur, $modalName, $modalLast)
    $modalSur.append($inpSur, $placeholderSur, $requeredLastname)
    $modalName.append($inpName, $placeholderName, $requeredName)
    $modalLast.append($inpLast, $placeholderLast)
    $placeholderSur.append($placeholderLastNameRequered)
    $placeholderName.append($placeholderNameRequered)
    $contactWrapper.append($contacts, $contactBtn)
    item.contacts.forEach(el => contactAppGhange(el))
    setTimeout(() => {
        $modal.classList.add('open')
    }, 1)

    $btnClose.addEventListener('click', () => {
        $modal.classList.remove('open')
        $modal.remove()
    })

    $btnCancel.addEventListener('click', () => {
        $modal.remove()
        craeteModalDelete (item)
    })

    document.addEventListener('click', (e) => {
        if (e.target == $modal) {
            $modal.classList.remove('open')
            $modal.remove()
        }
    })

    $contactBtn.addEventListener('click', () => {
        counterContact = document.querySelectorAll('.contact')
        if(counterContact.length == 9) {
            $contactBtn.classList.add('disable')
        }
        createContactEl ()
    })

    $btnSave.addEventListener('click', async () => {
        fillArrContact ()
        await fetch(`http://localhost:3000/api/clients/${item.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: $inpName.value,
                lastName: $inpSur.value,
                surname: $inpLast.value,
                contacts: arrContact
            })
        });
        $modal.remove()
        createTableBody()
    })

    $inpName.addEventListener('input', () => {
        if($inpName.value != '') {
            $placeholderName.classList.add('active')
            $requeredName.classList.add('hide')
        } else {
                $placeholderName.classList.remove('active')
                $requeredName.classList.remove('hide')
            }
    })

    $inpSur.addEventListener('input', () => {
        if($inpSur.value != '') {
            $placeholderSur.classList.add('active')
            $requeredLastname.classList.add('hide')
        } else {
                $placeholderSur.classList.remove('active')
                $requeredLastname.classList.remove('hide')
            }
    })

    $inpLast.addEventListener('input', () => {
        if($inpLast.value != '') {
            $placeholderLast.classList.add('active')
        } else $placeholderLast.classList.remove('active')
    })
}

function createContactObject (el) {
    const elementInp = el.querySelector('.contact-input'),
        elementChoice = el.querySelector('.selected');

    let element = {
        type: elementInp.value,
        value: elementChoice.textContent
    }

    arrContact.push(element)
}

function validateContactEl (item) {
    const $now = item.querySelector('.contact-input'),
        $contactTeg = item.querySelector('.selected'),
        $erorrWrapper = document.querySelector('.erorr-wrapper'),
        $contactWrapper = document.querySelector('.contact-wrapper');

    if ($contactTeg.textContent === 'Телефон' && $now.value.length < 12) {
        $erorrWrapper.innerHTML = ''
        if ($erorrWrapper.querySelector('.error-contact') == null) {
            const $errorCon = document.createElement('span')
            $errorCon.classList.add('error-contact', 'error-tel')
            $errorCon.textContent = 'Телефон должен содержать не менее 12-ти символов'
            $erorrWrapper.classList.add('active')
            $contactWrapper.classList.add('mrg')
            $erorrWrapper.append($errorCon)
            return
        }
        return
    } else  {
        if ($erorrWrapper.querySelector('.error-tel') != null) {
            $erorrWrapper.querySelector('.error-tel').remove()
        }
   }

    if ($contactTeg.textContent === 'Доп. телефон' && $now.value.length < 12) {
        $erorrWrapper.innerHTML = ''
        if ($erorrWrapper.querySelector('.error-contact') == null) {
            const $errorCon = document.createElement('span')
            $errorCon.classList.add('error-contact', 'error-dop-tel')
            $errorCon.textContent = 'Доп. телефон должен содержать не менее 12-ти символов'
            $erorrWrapper.classList.add('active')
            $contactWrapper.classList.add('mrg')
            $erorrWrapper.append($errorCon)
            return
        }
        return
    } else  {
         if ($erorrWrapper.querySelector('.error-dop-tel') != null) {
            $erorrWrapper.querySelector('.error-dop-tel').remove()
         }
    }

    if ($contactTeg.textContent === 'Email' && $now.value.length < 2 && $now.value.includes('@') == false) {
        $erorrWrapper.innerHTML = ''
        if ($erorrWrapper.querySelector('.error-contact') == null) {
            $erorrWrapper.innerHTML = ' '
            const $errorCon = document.createElement('span')
            $errorCon.classList.add('error-contact', 'error-email')
            $errorCon.textContent = 'Email должен содержать не менее 2-x символов и иметь символ - @'
            $erorrWrapper.classList.add('active')
            $contactWrapper.classList.add('mrg')
            $erorrWrapper.append($errorCon)
            return
        }
        return
    } else  {
         if ($erorrWrapper.querySelector('.error-email') != null) {
            $erorrWrapper.querySelector('.error-email').remove()
         }
    }

    if ($contactTeg.textContent === 'Vk' && $now.value.length < 6) {
        $erorrWrapper.innerHTML = ''
        if ($erorrWrapper.querySelector('.error-contact') == null) {
            const $errorCon = document.createElement('span')
            $errorCon.classList.add('error-contact', 'error-vk')
            $errorCon.textContent = 'VK должен содержать не менее 6-ти символов'
            $erorrWrapper.classList.add('active')
            $contactWrapper.classList.add('mrg')
            $erorrWrapper.append($errorCon)
            return
        }
        return
    } else  {
        if ($erorrWrapper.querySelector('.error-vk') != null) {
            $erorrWrapper.querySelector('.error-vk').remove()
        }
   }

   if ($contactTeg.textContent === 'Facebook' && $now.value.length < 6) {
    $erorrWrapper.innerHTML = ''
    if ($erorrWrapper.querySelector('.error-contact') == null) {
        const $errorCon = document.createElement('span')
        $errorCon.classList.add('error-contact', 'error-facebook')
        $errorCon.textContent = 'Facebook должен содержать не менее 6-ти символов'
        $erorrWrapper.classList.add('active')
        $contactWrapper.classList.add('mrg')
        $erorrWrapper.append($errorCon)
        return
    }
    return
} else  {
    if ($erorrWrapper.querySelector('.error-facebook') != null) {
        $erorrWrapper.querySelector('.error-facebook').remove()
    }
}
}

async function craeteModalDelete (item) {
    const $modalDelete = document.createElement('div'),
    $windowDelete = document.createElement('div'),
    $titleDelete = document.createElement('h2'),
    $textDelete = document.createElement('p'),
    $btnClose = document.createElement('button'),
    $btnDel = document.createElement('button'),
    $btnCan = document.createElement('button');

    $modalDelete.classList.add('modal-delete')
    $windowDelete.classList.add('window-delete')
    $titleDelete.classList.add('title-delete')
    $textDelete.classList.add('delete-text')
    $btnClose.classList.add('btn-close', 'btn-reset')
    $btnDel.classList.add('btn-del', 'btn-reset')
    $btnCan.classList.add('btn-can', 'btn-reset')
    $titleDelete.textContent = 'Удалить клиента'
    $textDelete.textContent = 'Вы действительно хотите удалить данного клиента?'
    $btnDel.textContent = 'Удалить'
    $btnCan.textContent = 'Отмена'

    $windowDelete.append($titleDelete, $textDelete, $btnClose, $btnDel, $btnCan)
    $modalDelete.append($windowDelete)
    $main.append($modalDelete)

    setTimeout(() => $modalDelete.classList.add('open'), 1)

    $btnCan.addEventListener('click', () => {
        $modalDelete.remove()
    })

    $btnClose.addEventListener('click', () => {
        $modalDelete.remove()
    })

    document.addEventListener('click', (e) => {
        if (e.target == $modalDelete) {
            $modalDelete.remove()
        }
    })

    $btnDel.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/api/clients/${item.id}`, {
        method: 'DELETE'
        })
        createTableBody()
        $modalDelete.remove()
    })
}

$columnId.addEventListener('click', () => {
    if($columnId.classList.contains('sort')) {
        $tableTh.forEach(th => th.classList.remove('sort'))
        sortColumnFlag = ''
        createTableBody()
        return
    } else {
        sortColumnFlag = 'id'
        $tableTh.forEach(th => th.classList.remove('sort'))
        $columnId.classList.add('sort')
        createTableBody()
    }
})

$columnFIO.addEventListener('click', () => {
    if($columnFIO.classList.contains('sort')) {
        $tableTh.forEach(th => th.classList.remove('sort'))
        sortColumnFlag = ''
        createTableBody()
        return
    } else {
        sortColumnFlag = 'fio'
        $tableTh.forEach(th => th.classList.remove('sort'))
        $columnFIO.classList.add('sort')
        createTableBody()
    }
})

$columnDateCreate.addEventListener('click', () => {
    if($columnDateCreate.classList.contains('sort')) {
        $tableTh.forEach(th => th.classList.remove('sort'))
        sortColumnFlag = ''
        createTableBody()
        return
    } else {
        sortColumnFlag = 'dateCreate'
        $tableTh.forEach(th => th.classList.remove('sort'))
        $columnDateCreate.classList.add('sort')
        createTableBody()
    }
})

$columnDateUpdate.addEventListener('click', () => {
    if($columnDateUpdate.classList.contains('sort')) {
        $tableTh.forEach(th => th.classList.remove('sort'))
        sortColumnFlag = ''
        createTableBody()
        return
    } else {
        sortColumnFlag = 'dateUpdate'
        $tableTh.forEach(th => th.classList.remove('sort'))
        $columnDateUpdate.classList.add('sort')
        createTableBody()
    }
})

async function createTr (item) {
    const $tr = document.createElement('tr'),
        $tdID = document.createElement('td'),
        $tdFIO = document.createElement('td'),
        $tdDateCreate = document.createElement('td'),
        $tdLastChange = document.createElement('td'),
        $tdContacts = document.createElement('td'),
        $tdDoo = document.createElement('td'),
        $btnChange = document.createElement('button'),
        $btnDelete = document.createElement('button'),
        $btnDooWrappper = document.createElement('div'),
        $timeCreate = document.createElement('div'),
        $yearCreate = document.createElement('div'),
        $timeChange = document.createElement('div'),
        $yearChange = document.createElement('div'),
        $svgContactWrapper = document.createElement('div'),
        $itemIdSplit = item.id.split('', 6);

        $btnChange.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class = "btn-contact-svg btn-change">
                                    <g opacity="0.7" clip-path="url(#clip0_121_2280)">
                                        <path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z">
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_121_2280">
                                            <rect width="16" height="16">
                                        </clipPath>
                                    </defs>
                                </svg>
                                Изменить`
        $btnDelete.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class = "btn-contact-svg btn-delete">
                <g opacity="0.7" clip-path="url(#clip0_121_2305)">
                    <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z">
                </g>
                <defs>
                    <clipPath id="clip0_121_2305">
                        <rect width="16" height="16">
                    </clipPath>
                </defs>
            </svg>
            Удалить`

        $btnDelete.id = item.id
        $yearChange.textContent = renderYear(new Date(item.updatedAt))
        $timeChange.textContent = renderTime(new Date(item.updatedAt))
        $yearCreate.textContent = renderYear(new Date(item.createdAt))
        $timeCreate.textContent = renderTime(new Date(item.createdAt))
        $tr.classList.add('contact-tr')
        $timeCreate.classList.add('create-time', 'time')
        $yearCreate.classList.add('create-time', 'year')
        $timeChange.classList.add('change-time', 'timech')
        $yearChange.classList.add('change-time', 'yearch')
        $tdID.classList.add('column-contact', 'column-ID')
        $tdFIO.classList.add('column-contact', 'column-FIO')
        $tdDateCreate.classList.add('column-contact', 'column-time')
        $tdLastChange.classList.add('column-contact', 'column-time')
        $tdContacts.classList.add('column-contact', 'column-contacts')
        $tdDoo.classList.add('column-contact', 'column-doo')
        $btnDooWrappper.classList.add('btn-contact-wrapper')
        $btnChange.classList.add('btn-contact', 'btn-change', 'btn-reset')
        $btnDelete.classList.add('btn-contact', 'btn-delete', 'btn-reset')
        $svgContactWrapper.classList.add('svg-wrapper')
        $btnDooWrappper.append($btnChange)
        $btnDooWrappper.append($btnDelete)



        $tdID.textContent = $itemIdSplit.join('')
        $tdFIO.textContent = item.FIO
        $tdDateCreate.append($yearCreate)
        $tdDateCreate.append($timeCreate)
        $tdLastChange.append($yearChange)
        $tdLastChange.append($timeChange)
        $tdDoo.append($btnDooWrappper)
        $tdContacts.append($svgContactWrapper)

        item.contacts.forEach(el => appendIconContacts(el))

        function appendIconContacts (el) {
            if (el.value == 'Телефон') {
                const svgWrap = document.createElement('span')
                svgWrap.classList.add('svg-wrap')
                svgWrap.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill='none' xmlns="http://www.w3.org/2000/svg" class="tel-svg svg-kit">
                                            <g opacity="0.7">
                                                <circle cx="8" cy="8" r="8" fill='none'/>
                                                <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill='white'/>
                                            </g>
                                        </svg>`
                tippy(svgWrap.querySelector('.tel-svg'), {
                    content: `${el.value}: ${el.type}`,
                    theme: 'tippy'
                });
                $svgContactWrapper.append(svgWrap)
                return  
            }

            if (el.value == 'Доп. телефон') {
                const svgWrap = document.createElement('span')
                svgWrap.classList.add('svg-wrap')
                svgWrap.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class='dop-tel-svg svg-kit'>
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
                                    </svg>`
                tippy(svgWrap.querySelector('.dop-tel-svg'), {
                    content: `${el.value}: ${el.type}`,
                    theme: 'tippy'
                });
                $svgContactWrapper.append(svgWrap)
                return  
            }

            if (el.value == 'Email') {
                const svgWrap = document.createElement('span')
                svgWrap.classList.add('svg-wrap')
                svgWrap.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class='email-svg svg-kit'>
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z">
                                    </svg>`
                tippy(svgWrap.querySelector('.email-svg'), {
                    content: `${el.value}: ${el.type}`,
                    theme: 'tippy'
                });
                $svgContactWrapper.append(svgWrap)
                return  
            }

            if (el.value == 'Vk') {
                const svgWrap = document.createElement('span')
                svgWrap.classList.add('svg-wrap')
                svgWrap.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class='vk-svg svg-kit'>
                                        <g opacity="0.7">
                                            <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z">
                                        </g>
                                    </svg>`
                tippy(svgWrap.querySelector('.vk-svg'), {
                    content: `${el.value}: ${el.type}`,
                    theme: 'tippy'
                });
                $svgContactWrapper.append(svgWrap)
                return  
            }

            if (el.value == 'Facebook') {
                const svgWrap = document.createElement('span')
                svgWrap.classList.add('svg-wrap')
                svgWrap.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class='facebook-svg svg-kit'>
                                        <g opacity="0.7">
                                            <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z">
                                        </g>
                                    </svg>`
                tippy(svgWrap.querySelector('.facebook-svg'), {
                    content: `${el.value}: ${el.type}`,
                    theme: 'tippy'
                });
                $svgContactWrapper.append(svgWrap)
                return  
            }
        }

        if($svgContactWrapper.querySelectorAll('.svg-wrap').length > 5) {
            const svgWrap = document.createElement('span'),
                svgCount = $svgContactWrapper.querySelectorAll('.svg-wrap'),
                counter = document.createElement('span');

                console.log(svgCount)

            counter.classList.add('counter')
            svgWrap.classList.add('wrap-counter')

            svgWrap.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7.5" stroke="#9873FF"/>
                                </svg>`

            let count = 0
            svgCount.forEach(el => {
                if(count < 4) {
                    count++
                    return
                }
                el.classList.add('hide')
            })

            counter.textContent = '+' + $svgContactWrapper.querySelectorAll('.hide').length;

            counter.addEventListener('click', () => {
                svgCount.forEach(el => {
                    if(el.classList.contains('hide')) {
                        el.classList.remove('hide')
                    }
                })

                svgWrap.remove()
            })

            svgWrap.append(counter)
            $svgContactWrapper.append(svgWrap)

            $tdContacts.classList.add('column-contacts')
        }

        $btnDelete.addEventListener('click', async () => {
            craeteModalDelete (item)
        })

        $btnChange.addEventListener('click', () => {
            modalChangeCreate (item)
        })

        $tr.append($tdID)
        $tr.append($tdFIO)
        $tr.append($tdDateCreate)
        $tr.append($tdLastChange)
        $tr.append($tdContacts)
        $tr.append($tdDoo)
        $tbody.append($tr)

        return item
}

function contactAppGhange (el) {
    const react = createContactEl()
        react.querySelector('.selected').textContent = el.value
        react.querySelector('.contact-input').value = el.type
        react.querySelector('.contact-btn-cancel').classList.add('active')
}

let sortColumnFlag = 'id'

function renderYear (date) {
    const dateRender = date.getTime();
    const resultTime = new Date(dateRender)
    var dd = resultTime.getDate();
      if (dd < 10) dd = '0' + dd;
  
    var mm = resultTime.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;
  
    var yy = resultTime.getFullYear();
      if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
}

function renderTime (date) {
    const dateRender = date.getTime();
    const resultTime = new Date(dateRender)
    var hh = resultTime.getHours();
      if (hh < 10) hh = '0' + hh;
  
    var mm = resultTime.getMinutes() + 1;
      if (mm < 10) mm = '0' + mm;
  
    return hh + ':' + mm;
}
createTableBody ()