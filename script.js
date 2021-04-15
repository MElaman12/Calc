let arr_cards = []

let arr_service = [
	{
		id: Math.random().toString().substr(2, 10),
		name: 'Электричество',
		money: 0
	},
	{
		id: Math.random().toString().substr(2, 10),
		name: 'Вода',
		money: 0
	},
	{
		id: Math.random().toString().substr(2, 10),
		name: 'Аренда помещения',
		money: 0
	},
]
let card_select = document.querySelector('.select1')
let cards = document.querySelector(".cards")
let deletecard = () => {
	let et = event.target
	let id = et.parentElement.getAttribute('id')
	let find = arr_cards.filter(item => item.id === id)[0]
	arr_cards.splice(arr_cards.indexOf(find), 1)
	reload_cards()
}

// PIN-Codes
let pin_sreen = document.querySelector('.pin')
let pin_numbers = document.querySelectorAll('.pin-number')
let CURRENT_PIN = ''
let RIGHT_PIN = "7777"
let pin_innerText = document.querySelector('.title')

if(localStorage.getItem('PIN') != '7777') {
	pin_sreen.classList.add('active_1')
	pin_innerText.classList.add('active')
}

console.log(pin_innerText);
for(let item of pin_numbers){
	item.onclick = () => {
		CURRENT_PIN = CURRENT_PIN + item.innerText
		pin_innerText.innerText = CURRENT_PIN
		// Стоп + проверка
		if(CURRENT_PIN.length >= 4){
			if(CURRENT_PIN === RIGHT_PIN){
				// alert(123)
					pin_sreen.style.display = 'none'
					pin_innerText.style.display = 'none'

					// Сохранить новый пин 
					localStorage.setItem('PIN', CURRENT_PIN)
			}
		}			
}
}

let delete_last_pin = document.querySelector('.clear')


delete_last_pin.onclick = () => {
	pin_innerText.innerText = pin_innerText.innerText.substring(0, pin_innerText.innerText.length - 1)
}

let reload_transactions = () => {
	// Заменяем
}
let reload_cards = () => {
	cards.innerHTML = ""

	for (let item_2 of arr_cards) {
		// Создание карточки
		let cr_div = document.createElement("div")
		let cr_div_top = document.createElement("div")
		let cr_div_top_print = document.createElement("div")
		let cr_div_top_num = document.createElement("div")
		let cr_div_bottom = document.createElement("div")
		let cr_div_bottom_h1 = document.createElement("h1")
		let cr_div_bottom_h4 = document.createElement("h4")
		let cr_div_bottom_month_year = document.createElement("div")
		let cr_div_bottom_h2_2 = document.createElement("h2")
		let delete_icon = document.createElement('div')
		let cr_div_bottom_h2 = document.createElement("h2")

		cr_div.setAttribute('id', item_2.id)
		cr_div.classList.add("item")
		cr_div_top.classList.add("top_card")
		cr_div_top_print.classList.add("print")
		cr_div_top_num.classList.add("num")
		cr_div_top_num.innerText = item_2.number
		cr_div_bottom.classList.add("bottom-card")
		cr_div_bottom_h1.innerText = item_2.name
		cr_div_bottom_h4.innerText = item_2.balance
		cr_div_bottom_month_year.classList.add("cr_div_bottom_month_year")
		cr_div_bottom_h2.innerText = item_2.month
		cr_div_bottom_h2_2.innerText = item_2.year
		cr_div.append(delete_icon)
		delete_icon.classList.add('del_btn')
		delete_icon.setAttribute('onclick', 'deletecard()')
		cards.append(cr_div)
		cr_div.append(cr_div_top)
		cr_div.append(cr_div_bottom)
		cr_div_top.append(cr_div_top_print)
		cr_div_top.append(cr_div_top_num)
		cr_div_bottom.append(cr_div_bottom_h1)
		cr_div_bottom.append(cr_div_bottom_h4)
		cr_div_bottom.append(cr_div_bottom_month_year)
		cr_div_bottom_month_year.append(cr_div_bottom_h2)
		cr_div_bottom_month_year.append(cr_div_bottom_h2_2)
}
}


let arr_tr = [
	{
		id: Math.random().toString().substr(2, 10),
		plus: true,
		title: 'Steam',
		money: 99998 + '$',
		id_service: 'id_service',
		id_card: 'id_card'
	},
	{
		id: Math.random().toString().substr(2, 10),
		plus: true,
		title: 'Food',
		money: 15367 + '$',
		id_service: 'id_service',
		id_card: 'id_card'
	},
	{
		id: Math.random().toString().substr(2, 10),
		plus: true,
		title: 'Travel',
		money: 4560 + '$',
		service: 'id_service',
		card: 'id_card'
	}
]

let transactions_list = document.querySelector('.transactions-list')


let transaction = () => {
	for(let item of arr_tr){
	let tr = document.createElement('div')
		tr.classList.add('transaction-first')

	let tr_icon = document.createElement('div')
		tr_icon.classList.add('transaction-icon')
		
		let tr_info = document.createElement('div')
			tr_info.classList.add('transaction-info')

	let tr_info_1 = document.createElement('div')
		tr_info_1.classList.add('transaction-info-1')

	let tr_info_1_h3 = document.createElement('h3')	 
	let tr_info_1_h4 = document.createElement('h4')
	
	let tr_info_2 = document.createElement('div')
		tr_info_2.classList.add('transaction-info-2')
	
	let tr_info_2_h3 = document.createElement('h3')	
	let tr_info_2_h4 = document.createElement('h4')	
	
	tr.append(tr_icon)
	tr.append(tr_info)
	tr_info.append(tr_info_1)
	tr_info_1.append(tr_info_1_h3)
	tr_info_1.append(tr_info_1_h4)
	
	tr.append(tr_info_2)
	tr_info_2.append(tr_info_2_h3)
	tr_info_2.append(tr_info_2_h4)

	transactions_list.append(tr)

		tr_info_1_h3.innerText = item.title
		tr_info_1_h4.innerText = item.plus

		tr_info_2_h3.innerText = item.money
		tr_info_2_h4.innerText = item.id_service
		
}
}

transaction()


//форма транзакций
let transaction_form = document.querySelector('.transaction-form')
let transaction_btn = document.querySelector('.menu_item-onclick')
let trans_btn = document.querySelector('.trans-btn')

transaction_btn.onclick = () => {
	event.preventDefault()

	let select_cards = document.querySelector('.select_cards')
	let select_service = document.querySelector('.select_service')

	transaction_form.classList.add('active')
	
	for (let item of arr_service) {
		let card_option = transaction_form.children[1].children[1].children[0].cloneNode(true)
		
		card_option.innerText = item.name
		card_option.setAttribute('value', item.id)
		select_service.append(card_option)
	}
	for (let item of arr_cards) {
		let card_option = transaction_form.children[1].children[2].children[0].cloneNode(true)
		
		card_option.innerText = item.name
		card_option.setAttribute('value', item.id)
		select_cards.append(card_option)
	}
}

transaction_form.onsubmit = () => {
	event.preventDefault()

	let formData = new FormData(event.target)
	let data = {}
	
	formData.forEach((value, key) => {
		data[key] = value
	})

	let card_id = data.card
	let card_find = arr_cards.filter(item => item.id == card_id)[0]
	// Меняем баланс на карте
	card_find.balance -= parseFloat(data.money)
	// Меняем элемент в массиве

	// Добавление денег в услугу для статистики
	let service_id = data.service
	let service_find = arr_service.filter(item => item.id == service_id)[0]
	// Меняем баланс в услуге
	service_find.money += parseFloat(data.money)

	// Все работает
	reload_cards()
	reload_transactions()
}

// Цвета фона
let corporations = [
	{
		name: "VISA",
		num: 4278,
		img: "",
	},
	{
		name: "Mastercard",
		num: 1234,
		img: "",
	},
	{
		name: "Uzcard",
		num: 8600,
		img: "",
	},
	{
		name: "HUMO",
		num: 9860,
		img: "",
	},
]

// Функция для добавления/удаления/изменения карт


//Работа с формами
let form_add_form = document.querySelector(".add_form")
//Открытие модельного окна формы
let show_form = document.querySelector(".show_form")
let remove_form = document.querySelector(".remove_form")

show_form.onclick = () => {
	event.preventDefault()

	form_add_form.classList.add("active")
}

form_add_form.onsubmit = () => {
	event.preventDefault()
	let start = document.querySelector(".data")
	for (let item of corporations) {
		if (
			item.num.toString() == start.children[1].value.substr(0, 4) &&
			start.children[0].value !== "" &&
			start.children[1].value.length == 16
		) {
			let formData = new FormData(form_add_form)
			let new_card = {}
			//Значение по умолчанию
			new_card.id = Math.random().toString().substr(2, 10)
			new_card.balance = 0

			//Автоматическое добавление из формы
			formData.forEach((value, key) => {
				new_card[key] = value
			})


			arr_cards.unshift(new_card)

			reload_cards()
			let icon = document.querySelector('.print')
			icon.classList.add(item.name)
			// start.children[0].value = ""
			// start.children[1].value = ""
			form_add_form.classList.remove("active")
		} else if (start.children[0].value == "Шахзод") {
			let main = document.querySelector("main")
			let new_div = document.createElement("div")
			new_div.classList.add("easterEgg")
			main.append(new_div)
			form_add_form.classList.remove("active")
		}
	}
}

let cards_1 = []

let card = {
	id: Math.random().toString().substr(2, 10),
	number: Number,
	name: String,
	balance: 0,
	type: Object,
	img: String,
}