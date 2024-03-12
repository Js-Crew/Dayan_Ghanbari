let inputUser = document.getElementById("inputUser")
let btnClick = document.getElementById('btnClick')



btnClick.addEventListener('click', resultvauleobject)

function resultvauleobject(){
    let seveinputUser = inputUser.value
    
    let USER = new UserInputObject(seveinputUser)
    USER.opretionLS()
}


function UserInputObject(object_input_user){

    this.object_input_user = object_input_user



    this.opretionLS = function(){
        const crateIdDate = new Date();
        let idObject = crateIdDate.getTime();
        
        let savedLS_contentUser = JSON.parse(localStorage.getItem("notes")) || [];

        savedLS_contentUser.push({id : idObject , content : object_input_user });

        localStorage.setItem("notes", JSON.stringify(savedLS_contentUser));

    }

}

