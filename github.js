class GitHub{
    constructor(){
        this.client_id = '40c4f6e365adcfda9b1c';
        this.client_secret = '2e75912c25cfbe6215c714f99091f37e171deb60';
        this.reposCount = 5;
        this.reposSort = 'created asc';
    }

    async getUsers(user){
        const fetchUsers = 
        await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const fetchRepo = 
        await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort="${this.reposSort}"&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await fetchUsers.json();
        const repos = await fetchRepo.json();


        return {profile, repos};
    }
}