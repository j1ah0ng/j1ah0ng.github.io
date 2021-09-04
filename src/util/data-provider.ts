import axios from 'axios';

type GithubResponse = {
    name?: string,
    commit?: {
        commit?: {
            author?: {
                date?: string,
            },
        },
    },
};



