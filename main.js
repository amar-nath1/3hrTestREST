

let expList=document.getElementById('expenseList')

function addExpense(event){
    event.preventDefault()

    let amount=document.getElementById('amount').value
    let descp=document.getElementById('desc').value
    let categ=document.getElementById('category').value

    let expData={
        amount,
        descp,
        categ
    }
    axios.post('https://crudcrud.com/api/a572593e8dad47be8a4511e972b13ead/expDataBase',expData).then((res)=>{

        showUserDetails(res.data)
    })
    
}

window.addEventListener('DOMContentLoaded',()=>{

    axios.get('https://crudcrud.com/api/a572593e8dad47be8a4511e972b13ead/expDataBase').then((res)=>{

        
    for (let i=0;i<(res.data).length;i++){

        showUserDetails(res.data[i])
    }
            
        
    })


})

function showUserDetails(jsonData){
    

let output=`<li id=${jsonData._id}>${jsonData.descp} ->  ${jsonData.amount}-> ${jsonData.categ}
<button onclick=edtExp('${jsonData._id}','${jsonData.amount}','${jsonData.descp}','${jsonData.categ}')>Edit</button>
<button onclick=delExp('${jsonData._id}')>Delete Expense</button</li>`
expList.innerHTML=expList.innerHTML+output

}

function delExp(id){

    axios.delete('https://crudcrud.com/api/a572593e8dad47be8a4511e972b13ead/expDataBase/'+id).then((res)=>{

        removeUser(id)
    })
    
}

function removeUser(id){

    expList.removeChild(document.getElementById(id))
}

function edtExp(id,amt,des,categ){

    document.getElementById('amount').value=amt
    document.getElementById('desc').value=des
    document.getElementById('category').value=categ
    removeUser(id)
}








