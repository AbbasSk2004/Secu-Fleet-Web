export default async function sitemap() {
	const BASE_URL = 'https://secu-fleet-web.vercel.app'

	const staticRoutes = [
		{ url: `${BASE_URL}/`, lastModified: new Date() },
		{ url: `${BASE_URL}/about`, lastModified: new Date() },
		{ url: `${BASE_URL}/contact`, lastModified: new Date() },
		{ url: `${BASE_URL}/careers`, lastModified: new Date() },

		// Services
		{ url: `${BASE_URL}/service/consulting`, lastModified: new Date() },
		{ url: `${BASE_URL}/service/web-development`, lastModified: new Date() },
		{ url: `${BASE_URL}/service/app-development`, lastModified: new Date() },

		// Products
		{ url: `${BASE_URL}/products/fleet-management`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/vehicle-inspection`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/route-planing`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/digital-reports`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/asset-tracking`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/gps-tracking`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/car-sharing`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/fleet-efficiency`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/worktime`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/adas-and-camera`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/mobile-integration-tool`, lastModified: new Date() },
		{ url: `${BASE_URL}/products/api-integration`, lastModified: new Date() },

		// Industries
		{ url: `${BASE_URL}/industries/construction-and-mining`, lastModified: new Date() },
		{ url: `${BASE_URL}/industries/moto-and-quads`, lastModified: new Date() },
		{ url: `${BASE_URL}/industries/maritime-and-boats`, lastModified: new Date() },
		{ url: `${BASE_URL}/industries/emergency-and-utilities`, lastModified: new Date() },
		{ url: `${BASE_URL}/industries/logistics-and-deliveries`, lastModified: new Date() },
	]

	let dynamicCareerRoutes = []
	try {
		const res = await fetch('https://secuback.onrender.com/api/careerAndJobs/jobListing', { next: { revalidate: 3600 } })
		if (res.ok) {
			const jobs = await res.json()
			dynamicCareerRoutes = Array.isArray(jobs)
				? jobs.map((job) => ({
					url: `${BASE_URL}/careers/jobs/${job._id}`,
					lastModified: job.updatedAt ? new Date(job.updatedAt) : new Date(),
				}))
				: []
		}
	} catch (e) {
		// ignore failures and fall back to static routes
	}

	return [...staticRoutes, ...dynamicCareerRoutes]
} 