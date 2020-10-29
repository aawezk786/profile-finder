class UI{
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(profile){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
      <div class="row">
      <div class="col-md-3">
      <img class="img-fluid mb-2" src="${profile.avatar_url}">
      <a href="${profile.html_url}" 
      target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
      </div>
      <div class="col-md-9">
      <span class="badge badge-primary">
      Public Repos: ${profile.public_repos}</span>
      <span class="badge badge-primary">
      Public Gists: ${profile.public_gists}</span>
      <span class="badge badge-success">
      Followers: ${profile.followers}</span>
      <span class="badge badge-info">
      Follwing: ${profile.following}</span>
      <br><br>
        <ul class="list-group">
        <li class="list-group-item">Company ${profile.company}</li>
        <li class="list-group-item">Website/Blog: ${profile.blog}</li>
        <li class="list-group-item">Location: ${profile.location}</li> 
        <li class="list-group-item">Member Since: ${profile.created_at}</li> 
        <ul>
      </div>
      </div>        
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos">

        </div>
        `
    }

    showRepos(repos){
        let output = '';

        repos.forEach((repo)=>{
           output += `
           <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>

                    <div class="col-md-6">
                    <span class="badge badge-primary">
                    Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-primary">
                    Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">
                    Forks: ${repo.forks_count}</span>
                    </div>
                </div>
           </div>
           `
        })

        document.getElementById('repos').innerHTML = output;

    }

    clearProfile(){
        this.profile.innerHTML = '';
    }

    showAlert(message, className){
        this.clearAlert()
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const parentDiv = document.querySelector('.searchContainer');
        const clildDiv = document.querySelector('.search');
        parentDiv.insertBefore(div,clildDiv)

        setTimeout(()=>{
            this.clearAlert()
        },3000)
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}