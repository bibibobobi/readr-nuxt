import { ENV } from '../configs/config.js'

const isProdEnv = ENV === 'prod'

export { isProdEnv }

export { reportApiErrorFromKoa, logApiError, getErrorName } from './error.js'

export { getHrefFromKeystone, formatDate } from './post.js'
