import type { AxiosPromise } from 'axios'
import $api from '../../../app/http'
import { GetUserRepo } from './models'

const BASE_URL = `/repos`

export const getUserRepo = ({ owner, repo_name }: GetUserRepo): AxiosPromise => {
   return $api.get(`${BASE_URL}/${owner}/${repo_name}`)
}
