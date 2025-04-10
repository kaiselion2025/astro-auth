import type { MiddlewareHandler, MiddlewareNext } from 'astro'
import { defineMiddleware } from 'astro:middleware'

const privateRoutes = ['/protected']

export const onRequest = defineMiddleware(async ({ url, request }, next) => {
	// console.log('Middleware triggered')
	// console.log(url)

	const authHeaders = request.headers.get('Authorization') ?? ''
	//console.log('Auth Headers:', authHeaders)

	if (privateRoutes.includes(url.pathname)) {
		return checkLocalAuth(authHeaders, next)
	}

	return next()
})

const checkLocalAuth = (authHeaders: string, next: MiddlewareNext) => {
	if (authHeaders) {
		const authValue = authHeaders.split(' ').at(-1) ?? 'user:password'
		const decodedValue = atob(authValue).split(':')
		const [user, password] = decodedValue

		if (user === 'admin' && password === 'admin2') {
			return next()
		}
	}

	return new Response('Auth Necesaria', {
		status: 401,
		headers: {
			'WWW-Authenticate': 'Basic realm="Secure Area"'
		}
	})
	return next()
}
