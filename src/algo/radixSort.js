const  getDigit=(number,index)=>{
	console.log( Math.floor(Math.abs(number)/Math.pow(10,index))%10)

}

getDigit(12345,4)

