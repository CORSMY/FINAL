/*eslint-env es6*/

/*slider*/
/*mũi tên click bấm trái phải của slider*/
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')

/*imgNumber là một NodeList chứa tất cả các phần tử <img> trong phần tử có class là slider-content-left-top*/
/*di chuyển ảnh trong slider*/
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
/*bắt đầu slider ở trang đầu, khai báo biến index với giá trị khởi tạo bằng 0*/
let index = 0
/*addeventlistener là để nghe, khi click thì sẽ thực hiện hàm function*/
/*click thì sẽ click qua phải, cho đến khi click đến slider cuối cùng thì nó sẽ tự quay lại slider đầu*/
rightbtn.addEventListener ("click", function(){
	index = index+1
/*length-1 chính là phép tự quay lại slider đầu*/
	if(index>imgNumber.length-1){
		index=0
	}
/*di chuyển slide hiển thị sang trái hoặc phải tương ứng với giá trị của "index"*/
	document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
/*tương tự cái ở trên, đổi lại là bên trái*/
leftbtn.addEventListener ("click",function(){
	index = index-1
	if(index<0){
		index=imgNumber.length-1
	}
	document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
/*slider1*/
/*khi click vào 1 phần tử thì đồng thời slider sẽ di chuyển đến slide tương ứng*/
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
let imgactive = document.querySelector('.active')
imgNumberLi.forEach(function(image,index){
	image.addEventListener("click",function(){
		removeactive()
		document.querySelector(".slider-content-left-top").style.right = index *100+"%"
		imgactive.classList.remove("active")
		image.classList.add("active")
	})
})
/*removeactive để xóa lớp active của ptu đang được chọn trước đó*/
function removeactive(){
	let imgactive = document.querySelector('.active')
	imgactive.classList.remove("active")
}
/*hàm imgauto dùng để chuyển next slider ở vị trí slider hiện tại*/
function imgauto(){
	index=index +1
	if(index>imgNumber.length-1){
		index=0
	}
	removeactive()
	document.querySelector(".slider-content-left-top").style.right = index *100+"%"
	imgNumberLi[index].classList.add("active")
}
/*xác định thời gian chuyển slide, như sau thì sau 3s*/
setInterval(imgauto,3000)