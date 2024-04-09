import type { AxiosPromise } from 'axios'
import $api from '../../../app/http'
import { RepoInfo } from './models'

const BASE_URL = `/repos`

export const getUserRepo = ({ owner, repo_name }: RepoInfo): AxiosPromise => {
   return $api.get(`${BASE_URL}/${owner}/${repo_name}`)
}

//`https://api.github.com/repos/${owner}/${repo}/issues?state=open`   ToDo
export const getToDoIssues = ({ owner, repo_name }: RepoInfo): AxiosPromise => {
   return $api.get(`${BASE_URL}/${owner}/${repo_name}/issues?state=open`)
}

// `https://api.github.com/repos/${owner}/${repo}/issues?state=closed` closed
export const getClosedIssues = ({ owner, repo_name }: RepoInfo): AxiosPromise => {
   return $api.get(`${BASE_URL}/${owner}/${repo_name}/issues?state=closed`)
}
