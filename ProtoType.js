
const one ={
    namee : "abhi"
}



const two ={
    sallary :" 200000"
}


two.__proto__ = {
    desc :" coder"
}

one.__proto__ = two




console.log(one.desc);
