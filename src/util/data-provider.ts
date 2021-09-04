import axios from 'axios';

export type GithubResponse = {
    name: string,
    commit: {
        commit: {
            author: {
                date: string,
            },
        },
    },
};

export const getLastUpdateDate = async () => 
    axios.get<GithubResponse>('https://api.github.com/repos/j1ah0ng/j1ah0ng.github.io/branches/deploy')
        .then(res => res.data.commit.commit.author.date)
        .catch(err => Promise.reject(err));

