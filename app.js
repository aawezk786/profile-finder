const http = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(event)=>{
   const userText = event.target.value;
    if(userText != ''){
        http.getUsers(userText).then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert(`${userText} is not found`,'alert alert-danger')
                // window.alert(`${userText} is not found`)
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos)
            }
        })
    }else{
      ui.clearProfile();
    }
})